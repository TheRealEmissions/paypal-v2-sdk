import PayPal from "../PayPal";
import GenerateInvoiceNumberResponse, {
  TGenerateInvoiceNumberResponse,
} from "../Types/APIResponses/GenerateInvoiceNumber";
import ListInvoicesResponse, { TListInvoicesResponse } from "../Types/APIResponses/ListInvoices";
import ListTemplatesResponse, { TListTemplatesResponse } from "../Types/APIResponses/ListTemplates";
import SearchForInvoicesResponse, { TSearchForInvoicesResponse } from "../Types/APIResponses/SearchForInvoices";
import { GenerateQrCodeAction } from "../Types/Enums/GenerateQrCodeAction";
import { InvoiceStatus } from "../Types/Enums/InvoiceStatus";
import AddressPortable from "../Types/Objects/AddressPortable";
import AmountRange from "../Types/Objects/AmountRange";
import DateRange from "../Types/Objects/DateRange";
import EmailAddress from "../Types/Objects/EmailAddress";
import Field from "../Types/Objects/Field";
import Invoice, { TInvoice } from "../Types/Objects/Invoice";
import LinkDescription from "../Types/Objects/LinkDescription";
import PaymentDetail, { TPaymentDetail } from "../Types/Objects/PaymentDetail";
import PhoneDetail from "../Types/Objects/PhoneDetail";
import RefundDetail, { TRefundDetail } from "../Types/Objects/RefundDetail";
import Template, { TTemplate } from "../Types/Objects/Template";

class Invoicing {
  PayPal: PayPal;
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

  async getMany(fields?: string, page?: number, pageSize?: number, totalRequired?: boolean) {
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

    const response = await this.PayPal.API.get<TListInvoicesResponse>("/v2/invoicing/invoices", {
      params: {
        fields,
        page,
        page_size: pageSize,
        total_required: totalRequired,
      },
    });

    return new ListInvoicesResponse(
      response.data.items.map((x) => new Invoice().fromObject(x)),
      response.data.links.map((x) => new LinkDescription().fromObject(x)),
      response.data.total_items,
      response.data.total_pages
    );
  }

  async createDraft(invoice: Invoice) {
    const response = await this.PayPal.API.post<TInvoice>("/v2/invoicing/invoices", {
      detail: invoice.detail,
      additional_recipients: invoice.additionalRecipients,
      amount: invoice.amount,
      configuration: invoice.configuration,
      due_amount: invoice.dueAmount,
      gratuity: invoice.gratuity,
      id: invoice.id,
      invoicer: invoice.invoicer,
      items: invoice.items,
      links: invoice.links,
      parent_id: invoice.parentId,
      payments: invoice.payments,
      primary_recipients: invoice.primaryRecipients,
      refunds: invoice.refunds,
      ...(invoice.status ? { status: InvoiceStatus[invoice.status] } : {}),
    });

    return new Invoice(this.PayPal).fromObject(response.data);
  }

  async delete(invoice: Invoice | string): Promise<boolean> {
    const invoiceId = invoice instanceof Invoice ? invoice.id : invoice;
    const response = await this.PayPal.API.delete(`/v2/invoicing/invoices/${invoiceId}`);
    return response.status === 204;
  }

  async fullyUpdate(invoice: Invoice, invoiceId?: string) {
    const response = await this.PayPal.API.put<TInvoice>(`/v2/invoicing/invoices/${invoice.id ?? invoiceId}`, {
      detail: invoice.detail,
      additional_recipients: invoice.additionalRecipients,
      amount: invoice.amount,
      configuration: invoice.configuration,
      due_amount: invoice.dueAmount,
      gratuity: invoice.gratuity,
      id: invoice.id,
      invoicer: invoice.invoicer,
      items: invoice.items,
      links: invoice.links,
      parent_id: invoice.parentId,
      payments: invoice.payments,
      primary_recipients: invoice.primaryRecipients,
      refunds: invoice.refunds,
      ...(invoice.status ? { status: InvoiceStatus[invoice.status] } : {}),
    });

    return new Invoice(this.PayPal).fromObject(response.data);
  }

  async get(invoice: Invoice | string) {
    const invoiceId = invoice instanceof Invoice ? invoice.id : invoice;
    const response = await this.PayPal.API.get<TInvoice>(`/v2/invoicing/invoices/${invoiceId}`);

    return new Invoice(this.PayPal).fromObject(response.data);
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
      additional_recipients: additionalRecipients,
      note,
      send_to_invoicer: sendToInvoicer,
      send_to_recipient: sendToRecipient,
      subject,
    });

    return response.status === 204;
  }

  async generateQrCode(invoice: Invoice | string, action?: GenerateQrCodeAction, height?: number, width?: number) {
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
      additional_recipients: additionalRecipients,
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
      additional_recipients: additionalRecipients,
      note,
      send_to_invoicer: sendToInvoicer,
      send_to_recipient: sendToRecipient,
      subject,
    });

    if (response.status !== 200) throw new Error(response.statusText);

    return await this.get(invoiceId);
  }

  async search(page: number, pageSize: number, totalRequired: boolean, data?: TSearch) {
    const response = await this.PayPal.API.post<TSearchForInvoicesResponse>(
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
      response.data.items.map((x) => new Invoice().fromObject(x)),
      response.data.links.map((x) => new LinkDescription().fromObject(x)),
      response.data.total_items,
      response.data.total_pages
    );
  }

  async listTemplates(fields?: string, page?: number, pageSize?: number) {
    const response = await this.PayPal.API.get<TListTemplatesResponse>(`/v2/invoicing/templates`, {
      params: {
        fields,
        page,
        page_size: pageSize,
      },
    });

    return new ListTemplatesResponse(
      response.data.addresses.map((x) => new AddressPortable().fromObject(x)),
      response.data.emails,
      response.data.links.map((x) => new LinkDescription().fromObject(x)),
      response.data.phones.map((x) => new PhoneDetail().fromObject(x)),
      response.data.templates.map((x) => new Template().fromObject(x))
    );
  }

  async createTemplate(template: Template) {
    const response = await this.PayPal.API.post<TTemplate>(
      `/v2/invoicing/templates`,
      template.toAttributeObject<TTemplate>()
    );

    return new Template(this.PayPal).fromObject(response.data);
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

    return new Template(this.PayPal).fromObject(response.data);
  }

  async getTemplate(template: Template | string) {
    const templateId = template instanceof Template ? template.id : template;
    const response = await this.PayPal.API.get<TTemplate>(`/v2/invoicing/templates/${templateId}`);

    return new Template(this.PayPal).fromObject(response.data);
  }
}

type TSearch = {
  archived?: boolean | null;
  creation_date_range?: DateRange;
  currency_code?: string;
  due_date_range?: DateRange;
  fields?: Field;
  invoiceDateRange?: DateRange;
  invoiceNumber?: string;
  memo?: string;
  paymentDateRange?: DateRange;
  recipientBusinessName?: string;
  recipientEmail?: string;
  recipientFirstName?: string;
  recipientLastName?: string;
  reference?: string;
  status?: InvoiceStatus[];
  totalAmountRange?: AmountRange;
};

export default Invoicing;
