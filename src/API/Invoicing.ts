import PayPal from "@/PayPal.js";
import GenerateInvoiceNumberResponse, {
  TGenerateInvoiceNumberResponse,
} from "@Types/APIResponses/GenerateInvoiceNumber.js";
import ListInvoicesResponse, { TListInvoicesResponse } from "@Types/APIResponses/ListInvoices.js";
import ListTemplatesResponse, { TListTemplatesResponse } from "@Types/APIResponses/ListTemplates.js";
import SearchForInvoicesResponse, { TSearchForInvoicesResponse } from "@Types/APIResponses/SearchForInvoices.js";
import { GenerateQrCodeAction } from "@Types/Enums/GenerateQrCodeAction.js";
import { InvoiceStatus } from "@Types/Enums/InvoiceStatus.js";
import AddressPortable from "@Types/Objects/AddressPortable.js";
import { TAmountRange } from "@Types/Objects/AmountRange.js";
import { TDateRange } from "@Types/Objects/DateRange.js";
import EmailAddress, { TEmailAddress } from "@Types/Objects/EmailAddress.js";
import Field from "@Types/Objects/Field.js";
import Invoice, { TInvoice } from "@Types/Objects/Invoice.js";
import LinkDescription from "@Types/Objects/LinkDescription.js";
import PaymentDetail, { TPaymentDetail } from "@Types/Objects/PaymentDetail.js";
import PhoneDetail from "@Types/Objects/PhoneDetail.js";
import RefundDetail, { TRefundDetail } from "@Types/Objects/RefundDetail.js";
import Template, { TTemplate } from "@Types/Objects/Template.js";
import { Integer } from "@Types/Types.js";

class Invoicing {
  protected PayPal: PayPal;
  constructor(PayPal: PayPal) {
    this.PayPal = PayPal;
  }

  async generateInvoiceNumber(): Promise<GenerateInvoiceNumberResponse> {
    const response = await this.PayPal.API.post<TGenerateInvoiceNumberResponse>(
      "/v2/invoicing/generate-next-invoice-number"
    );
    const invoiceNumber = response.data.invoice_number;
    return new GenerateInvoiceNumberResponse(invoiceNumber);
  }

  /**
   *
   * @deprecated Use Invoicing#getMany()
   */
  listInvoices(fields?: string, page?: number, pageSize?: number, totalRequired?: boolean) {
    return this.getMany(fields, page, pageSize, totalRequired);
  }

  async getMany<N extends number, U extends number>(
    fields?: string,
    page?: Integer<N>,
    pageSize?: Integer<U>,
    totalRequired?: boolean
  ) {
    if (page !== undefined) {
      if (!Number.isInteger(page)) {
        throw new Error("Page must be an integer");
      }
      if (page < 1 || page > 1000) {
        throw new Error("Page must be between 1 and 1000");
      }
    }
    if (pageSize !== undefined) {
      if (!Number.isInteger(pageSize)) {
        throw new Error("Page size must be an integer");
      }
      if (pageSize < 1 || pageSize > 100) {
        throw new Error("Page size must be between 1 and 100");
      }
    }

    const response = await this.PayPal.API.get<TListInvoicesResponse<number, number>>("/v2/invoicing/invoices", {
      params: {
        fields,
        page,
        page_size: pageSize,
        total_required: totalRequired,
      },
    });

    return new ListInvoicesResponse(
      response.data.items.map((x) => Invoice.fromObject(x)),
      response.data.links.map((x) => LinkDescription.fromObject(x)),
      response.data.total_items,
      response.data.total_pages
    );
  }

  async createDraft(invoice: Invoice) {
    const response = await this.PayPal.API.post<TInvoice>(
      "/v2/invoicing/invoices",
      invoice.toAttributeObject<TInvoice>()
    );

    return Invoice.fromObject(response.data).setPayPal(this.PayPal);
  }

  async delete(invoice: Invoice | string): Promise<boolean> {
    const invoiceId = invoice instanceof Invoice ? invoice.id : invoice;
    const response = await this.PayPal.API.delete(`/v2/invoicing/invoices/${invoiceId}`);
    return response.status === 204;
  }

  async fullyUpdate(invoice: Invoice, invoiceId?: string) {
    const response = await this.PayPal.API.put<TInvoice>(
      `/v2/invoicing/invoices/${invoice.id ?? invoiceId}`,
      invoice.toAttributeObject<TInvoice>()
    );

    return Invoice.fromObject(response.data).setPayPal(this.PayPal);
  }

  async get(invoice: Invoice | string) {
    const invoiceId = invoice instanceof Invoice ? invoice.id : invoice;
    const response = await this.PayPal.API.get<TInvoice>(`/v2/invoicing/invoices/${invoiceId}`);

    return Invoice.fromObject(response.data).setPayPal(this.PayPal);
  }

  async cancel(
    invoice: Invoice | string,
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean> {
    const invoiceId = invoice instanceof Invoice ? invoice.id : invoice;
    const response = await this.PayPal.API.post<TInvoice>(`/v2/invoicing/invoices/${invoiceId}/cancel`, {
      additional_recipients: additionalRecipients?.map((x) => x.toAttributeObject<TEmailAddress>()),
      note,
      send_to_invoicer: sendToInvoicer,
      send_to_recipient: sendToRecipient,
      subject,
    });

    return response.status === 204;
  }

  async generateQrCode<N extends number, U extends number>(
    invoice: Invoice | string,
    action?: GenerateQrCodeAction,
    height?: Integer<N>,
    width?: Integer<U>
  ) {
    const invoiceId = invoice instanceof Invoice ? invoice.id : invoice;
    const response = await this.PayPal.API.get<string>(`/v2/invoicing/invoices/${invoiceId}/generate-qr-code`, {
      params: {
        ...(action
          ? {
              action: GenerateQrCodeAction[action.toUpperCase() as keyof typeof GenerateQrCodeAction],
            }
          : {}),
        height,
        width,
      },
    });

    return response.data;
  }

  async recordPayment(invoice: Invoice | string, paymentDetail: PaymentDetail) {
    const invoiceId = invoice instanceof Invoice ? invoice.id : invoice;
    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }
    const response = await this.PayPal.API.post<TInvoice>(
      `/v2/invoicing/invoices/${invoiceId}/payments`,
      paymentDetail.toAttributeObject<TPaymentDetail>()
    );

    return response.status === 200 ? this.get(invoiceId) : response.statusText;
  }

  async deleteExternalPayment(invoice: Invoice | string, transactionId: string): Promise<boolean> {
    const invoiceId = invoice instanceof Invoice ? invoice.id : invoice;
    const response = await this.PayPal.API.delete(`/v2/invoicing/invoices/${invoiceId}/payments/${transactionId}`);
    return response.status === 204;
  }

  async recordRefund(invoice: Invoice | string, refundDetail: RefundDetail) {
    const invoiceId = invoice instanceof Invoice ? invoice.id : invoice;
    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }

    const response = await this.PayPal.API.post<TInvoice>(
      `/v2/invoicing/invoices/${invoiceId}/refunds`,
      refundDetail.toAttributeObject<TRefundDetail>()
    );

    return response.status === 200 ? this.get(invoiceId) : response.statusText;
  }

  async deleteExternalRefund(invoice: Invoice | string, transactionId: string): Promise<boolean> {
    const invoiceId = invoice instanceof Invoice ? invoice.id : invoice;
    const response = await this.PayPal.API.delete(`/v2/invoicing/invoices/${invoiceId}/refunds/${transactionId}`);
    return response.status === 204;
  }

  async sendReminder(
    invoice: Invoice | string,
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ) {
    const invoiceId = invoice instanceof Invoice ? invoice.id : invoice;

    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }

    const response = await this.PayPal.API.post<TInvoice>(`/v2/invoicing/invoices/${invoiceId}/remind`, {
      additional_recipients: additionalRecipients?.map((x) => x.toAttributeObject<TEmailAddress>()),
      note,
      send_to_invoicer: sendToInvoicer,
      send_to_recipient: sendToRecipient,
      subject,
    });

    return response.status === 200 ? this.get(invoiceId) : response.statusText;
  }

  async send(
    invoice: Invoice | string,
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ) {
    const invoiceId = invoice instanceof Invoice ? invoice.id : invoice;
    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }
    const response = await this.PayPal.API.post<TInvoice>(`/v2/invoicing/invoices/${invoiceId}/send`, {
      additional_recipients: additionalRecipients?.map((x) => x.toAttributeObject<TEmailAddress>()),
      note,
      send_to_invoicer: sendToInvoicer,
      send_to_recipient: sendToRecipient,
      subject,
    });

    if (response.status !== 200) throw new Error(response.statusText);

    return this.get(invoiceId);
  }

  async search<N extends number, U extends number>(
    page: Integer<N>,
    pageSize: Integer<U>,
    totalRequired: boolean,
    data?: TSearch
  ) {
    const response = await this.PayPal.API.post<TSearchForInvoicesResponse<number, number>>(
      `/v2/invoicing/search-invoices`,
      data ?? {},
      {
        params: {
          page,
          page_size: pageSize,
          total_required: totalRequired,
        },
      }
    );

    return new SearchForInvoicesResponse(
      response.data.items.map((x) => Invoice.fromObject(x)),
      response.data.links.map((x) => LinkDescription.fromObject(x)),
      response.data.total_items,
      response.data.total_pages
    );
  }

  async listTemplates<N extends number, U extends number>(fields?: string, page?: Integer<N>, pageSize?: Integer<U>) {
    const response = await this.PayPal.API.get<TListTemplatesResponse>(`/v2/invoicing/templates`, {
      params: {
        fields,
        page,
        page_size: pageSize,
      },
    });

    return new ListTemplatesResponse(
      response.data.addresses.map((x) => AddressPortable.fromObject(x)),
      response.data.emails,
      response.data.links.map((x) => LinkDescription.fromObject(x)),
      response.data.phones.map((x) => PhoneDetail.fromObject(x)),
      response.data.templates.map((x) => Template.fromObject(x))
    );
  }

  async createTemplate(template: Template) {
    const response = await this.PayPal.API.post<TTemplate>(
      `/v2/invoicing/templates`,
      template.toAttributeObject<TTemplate>()
    );

    return Template.fromObject(response.data).setPayPal(this.PayPal);
  }

  async deleteTemplate(template: Template | string) {
    const templateId = template instanceof Template ? template.id : template;
    const response = await this.PayPal.API.delete(`/v2/invoicing/templates/${templateId}`);
    return response.status === 204;
  }

  async fullyUpdateTemplate(template: Template) {
    const response = await this.PayPal.API.put<TTemplate>(
      `/v2/invoicing/templates/${template.id}`,
      template.toAttributeObject<TTemplate>()
    );

    return Template.fromObject(response.data).setPayPal(this.PayPal);
  }

  async getTemplate(template: Template | string) {
    const templateId = template instanceof Template ? template.id : template;
    const response = await this.PayPal.API.get<TTemplate>(`/v2/invoicing/templates/${templateId}`);

    return Template.fromObject(response.data).setPayPal(this.PayPal);
  }
}

type TSearch = {
  archived?: boolean | null;
  creation_date_range?: TDateRange;
  currency_code?: string;
  due_date_range?: TDateRange;
  fields?: Field;
  invoiceDateRange?: TDateRange;
  invoiceNumber?: string;
  memo?: string;
  paymentDateRange?: TDateRange;
  recipientBusinessName?: string;
  recipientEmail?: string;
  recipientFirstName?: string;
  recipientLastName?: string;
  reference?: string;
  status?: (keyof typeof InvoiceStatus)[];
  totalAmountRange?: TAmountRange;
};

export default Invoicing;
