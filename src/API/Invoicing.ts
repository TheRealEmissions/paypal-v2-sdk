import PayPal from "../PayPal.js";
import GenerateInvoiceNumberResponse, {
  TGenerateInvoiceNumberResponse,
} from "../Types/APIResponses/GenerateInvoiceNumber.js";
import ListInvoicesResponse, { TListInvoicesResponse } from "../Types/APIResponses/ListInvoices.js";
import ListTemplatesResponse, { TListTemplatesResponse } from "../Types/APIResponses/ListTemplates.js";
import SearchForInvoicesResponse, { TSearchForInvoicesResponse } from "../Types/APIResponses/SearchForInvoices.js";
import { GenerateQrCodeAction } from "../Types/Enums/GenerateQrCodeAction.js";
import { InvoiceStatus } from "../Types/Enums/InvoiceStatus.js";
import { AddressPortable } from "../Types/Objects/AddressPortable.js";
import { TAmountRange } from "../Types/Objects/AmountRange.js";
import { TDateRange } from "../Types/Objects/DateRange.js";
import { EmailAddress, TEmailAddress } from "../Types/Objects/EmailAddress.js";
import { Field } from "../Types/Objects/Field.js";
import { Invoice, TInvoice } from "../Types/Objects/Invoice.js";
import { LinkDescription } from "../Types/Objects/LinkDescription.js";
import { PaymentDetail, TPaymentDetail } from "../Types/Objects/PaymentDetail.js";
import { PhoneDetail } from "../Types/Objects/PhoneDetail.js";
import { RefundDetail, TRefundDetail } from "../Types/Objects/RefundDetail.js";
import { Template, TTemplate } from "../Types/Objects/Template.js";
import { Integer } from "../Types/Utility.js";

class Invoicing {
  protected PayPal: PayPal;
  constructor(PayPal: PayPal) {
    this.PayPal = PayPal;
  }

  async generateInvoiceNumber(): Promise<GenerateInvoiceNumberResponse> {
    const response = await this.PayPal.getAPI().post<TGenerateInvoiceNumberResponse>(
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
      const MIN_PAGE = 1;
      const MAX_PAGE = 1000;
      if (page < MIN_PAGE || page > MAX_PAGE) {
        throw new Error("Page must be between 1 and 1000");
      }
    }
    if (pageSize !== undefined) {
      if (!Number.isInteger(pageSize)) {
        throw new Error("Page size must be an integer");
      }
      const MIN_PAGE_SIZE = 1;
      const MAX_PAGE_SIZE = 100;
      if (pageSize < MIN_PAGE_SIZE || pageSize > MAX_PAGE_SIZE) {
        throw new Error("Page size must be between 1 and 100");
      }
    }

    const response = await this.PayPal.getAPI().get<TListInvoicesResponse<number, number>>("/v2/invoicing/invoices", {
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

  async createDraft(invoice: Invoice): Promise<Invoice>;
  async createDraft(invoice: (invoice: Invoice) => void): Promise<Invoice>;
  async createDraft(invoice: Invoice | ((invoice: Invoice) => void)) {
    const invoiceInstance = invoice instanceof Invoice ? invoice : new Invoice();
    if (typeof invoice === "function") {
      invoice(invoiceInstance);
    }
    const response = await this.PayPal.getAPI().post<TInvoice>(
      "/v2/invoicing/invoices",
      invoiceInstance.toAttributeObject<TInvoice>()
    );

    return Invoice.fromObject(response.data).setPayPal(this.PayPal);
  }

  async delete(invoice: Invoice): Promise<boolean>;
  async delete(invoice: string): Promise<boolean>;
  async delete(invoice: (invoice: Invoice) => void): Promise<boolean>;
  async delete(invoice: Invoice | string | ((invoice: Invoice) => void)): Promise<boolean> {
    const invoiceInstance =
      typeof invoice !== "string" ? (invoice instanceof Invoice ? invoice : new Invoice()) : undefined;
    if (typeof invoice === "function" && invoiceInstance) {
      invoice(invoiceInstance);
    }
    const invoiceId = typeof invoice === "string" ? invoice : invoiceInstance!.getId();
    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }
    const response = await this.PayPal.getAPI().delete(`/v2/invoicing/invoices/${invoiceId}`);
    const SUCCESS_RESPONSE = 204;
    return response.status === SUCCESS_RESPONSE;
  }

  async fullyUpdate(invoice: Invoice): Promise<Invoice>;
  async fullyUpdate(invoice: (invoice: Invoice) => void, invoiceId?: string): Promise<Invoice>;
  async fullyUpdate(invoice: Invoice | ((invoice: Invoice) => void), invoiceId?: string) {
    const invoiceInstance = invoice instanceof Invoice ? invoice : new Invoice();
    if (typeof invoice === "function") {
      invoice(invoiceInstance);
    }
    const response = await this.PayPal.getAPI().put<TInvoice>(
      `/v2/invoicing/invoices/${invoiceInstance.getId() ?? invoiceId}`,
      invoiceInstance.toAttributeObject<TInvoice>()
    );

    return Invoice.fromObject(response.data).setPayPal(this.PayPal);
  }

  async get(invoice: Invoice | string | ((invoice: Invoice) => void)) {
    const invoiceInstance =
      typeof invoice !== "string" ? (invoice instanceof Invoice ? invoice : new Invoice()) : undefined;
    if (typeof invoice === "function" && invoiceInstance) {
      invoice(invoiceInstance);
    }
    const invoiceId = typeof invoice === "string" ? invoice : invoiceInstance!.getId();
    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }
    const response = await this.PayPal.getAPI().get<TInvoice>(`/v2/invoicing/invoices/${invoiceId}`);

    return Invoice.fromObject(response.data).setPayPal(this.PayPal);
  }

  async cancel(
    invoice: Invoice,
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean>;
  async cancel(
    invoice: string,
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean>;
  async cancel(
    invoice: (invoice: Invoice) => void,
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean>;
  async cancel(
    invoice: Invoice,
    additionalRecipients?: ((additionalRecipient: EmailAddress) => void)[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean>;
  async cancel(
    invoice: string,
    additionalRecipients?: ((additionalRecipient: EmailAddress) => void)[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean>;
  async cancel(
    invoice: (invoice: Invoice) => void,
    additionalRecipients?: ((additionalRecipient: EmailAddress) => void)[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean>;
  async cancel(
    invoice: Invoice | string | ((invoice: Invoice) => void),
    additionalRecipients?: (EmailAddress | ((additionalRecipient: EmailAddress) => void))[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean> {
    const invoiceInstance =
      typeof invoice !== "string" ? (invoice instanceof Invoice ? invoice : new Invoice()) : undefined;
    if (typeof invoice === "function" && invoiceInstance) {
      invoice(invoiceInstance);
    }
    const invoiceId = typeof invoice === "string" ? invoice : invoiceInstance!.getId();
    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }
    const response = await this.PayPal.getAPI().post<TInvoice>(`/v2/invoicing/invoices/${invoiceId}/cancel`, {
      additional_recipients: additionalRecipients?.map((x) => {
        const additionalRecipient = x instanceof EmailAddress ? x : new EmailAddress();
        if (typeof x === "function") {
          x(additionalRecipient);
        }
        return additionalRecipient.toAttributeObject<TEmailAddress>();
      }),
      send_to_invoicer: sendToInvoicer,
      send_to_recipient: sendToRecipient,
      subject,
      note,
    });

    const SUCCESS_RESPONSE = 204;
    return response.status === SUCCESS_RESPONSE;
  }

  async generateQrCode<N extends number, U extends number>(
    invoice: Invoice,
    action?: GenerateQrCodeAction,
    height?: Integer<N>,
    width?: Integer<U>
  ): Promise<string>;
  async generateQrCode<N extends number, U extends number>(
    invoice: string,
    action?: GenerateQrCodeAction,
    height?: Integer<N>,
    width?: Integer<U>
  ): Promise<string>;
  async generateQrCode<N extends number, U extends number>(
    invoice: (invoice: Invoice) => void,
    action?: GenerateQrCodeAction,
    height?: Integer<N>,
    width?: Integer<U>
  ): Promise<string>;
  async generateQrCode<N extends number, U extends number>(
    invoice: Invoice,
    action?: (action: typeof GenerateQrCodeAction) => GenerateQrCodeAction,
    height?: Integer<N>,
    width?: Integer<U>
  ): Promise<string>;
  async generateQrCode<N extends number, U extends number>(
    invoice: string,
    action?: (action: typeof GenerateQrCodeAction) => GenerateQrCodeAction,
    height?: Integer<N>,
    width?: Integer<U>
  ): Promise<string>;
  async generateQrCode<N extends number, U extends number>(
    invoice: (invoice: Invoice) => void,
    action?: (action: typeof GenerateQrCodeAction) => GenerateQrCodeAction,
    height?: Integer<N>,
    width?: Integer<U>
  ): Promise<string>;
  async generateQrCode<N extends number, U extends number>(
    invoice: Invoice | string | ((invoice: Invoice) => void),
    action?: GenerateQrCodeAction | ((action: typeof GenerateQrCodeAction) => GenerateQrCodeAction),
    height?: Integer<N>,
    width?: Integer<U>
  ) {
    const invoiceInstance =
      typeof invoice !== "string" ? (invoice instanceof Invoice ? invoice : new Invoice()) : undefined;
    if (typeof invoice === "function" && invoiceInstance) {
      invoice(invoiceInstance);
    }
    const invoiceId = typeof invoice === "string" ? invoice : invoiceInstance!.getId();
    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }
    const response = await this.PayPal.getAPI().get<string>(`/v2/invoicing/invoices/${invoiceId}/generate-qr-code`, {
      params: {
        ...(action
          ? {
              action:
                GenerateQrCodeAction[
                  (typeof action === "function"
                    ? action(GenerateQrCodeAction)
                    : action
                  ).toUpperCase() as keyof typeof GenerateQrCodeAction
                ],
            }
          : {}),
        height,
        width,
      },
    });

    return response.data;
  }

  async recordPayment(invoice: Invoice, paymentDetail: PaymentDetail): Promise<Invoice>;
  async recordPayment(invoice: string, paymentDetail: PaymentDetail): Promise<Invoice>;
  async recordPayment(invoice: (invoice: Invoice) => void, paymentDetail: PaymentDetail): Promise<Invoice>;
  async recordPayment(invoice: Invoice, paymentDetail: (paymentDetail: PaymentDetail) => void): Promise<Invoice>;
  async recordPayment(invoice: string, paymentDetail: (paymentDetail: PaymentDetail) => void): Promise<Invoice>;
  async recordPayment(
    invoice: (invoice: Invoice) => void,
    paymentDetail: (paymentDetail: PaymentDetail) => void
  ): Promise<Invoice>;

  async recordPayment(
    invoice: Invoice | string | ((invoice: Invoice) => void),
    paymentDetail: PaymentDetail | ((paymentDetail: PaymentDetail) => void)
  ) {
    const invoiceInstance =
      typeof invoice !== "string" ? (invoice instanceof Invoice ? invoice : new Invoice()) : undefined;
    if (typeof invoice === "function" && invoiceInstance) {
      invoice(invoiceInstance);
    }
    const invoiceId = typeof invoice === "string" ? invoice : invoiceInstance!.getId();
    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }
    const paymentDetailInstance = paymentDetail instanceof PaymentDetail ? paymentDetail : new PaymentDetail();
    if (typeof paymentDetail === "function") {
      paymentDetail(paymentDetailInstance);
    }
    const response = await this.PayPal.getAPI().post<TInvoice>(
      `/v2/invoicing/invoices/${invoiceId}/payments`,
      paymentDetailInstance.toAttributeObject<TPaymentDetail>()
    );

    const SUCCESS_RESPONSE = 200;
    return response.status === SUCCESS_RESPONSE ? this.get(invoiceId) : response.statusText;
  }

  async deleteExternalPayment(invoice: Invoice, transactionId: string): Promise<boolean>;
  async deleteExternalPayment(invoice: string, transactionId: string): Promise<boolean>;
  async deleteExternalPayment(invoice: (invoice: Invoice) => void, transactionId: string): Promise<boolean>;
  async deleteExternalPayment(
    invoice: Invoice | string | ((invoice: Invoice) => void),
    transactionId: string
  ): Promise<boolean> {
    const invoiceInstance =
      typeof invoice !== "string" ? (invoice instanceof Invoice ? invoice : new Invoice()) : undefined;
    if (typeof invoice === "function" && invoiceInstance) {
      invoice(invoiceInstance);
    }
    const invoiceId = typeof invoice === "string" ? invoice : invoiceInstance!.getId();
    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }
    const response = await this.PayPal.getAPI().delete(`/v2/invoicing/invoices/${invoiceId}/payments/${transactionId}`);
    const SUCCESS_RESPONSE = 204;
    return response.status === SUCCESS_RESPONSE;
  }

  async recordRefund(invoice: Invoice, refundDetail: RefundDetail): Promise<Invoice | string>;
  async recordRefund(invoice: string, refundDetail: RefundDetail): Promise<Invoice | string>;
  async recordRefund(invoice: (invoice: Invoice) => void, refundDetail: RefundDetail): Promise<Invoice | string>;
  async recordRefund(invoice: Invoice, refundDetail: (refundDetail: RefundDetail) => void): Promise<Invoice | string>;
  async recordRefund(invoice: string, refundDetail: (refundDetail: RefundDetail) => void): Promise<Invoice | string>;
  async recordRefund(
    invoice: (invoice: Invoice) => void,
    refundDetail: (refundDetail: RefundDetail) => void
  ): Promise<Invoice | string>;
  async recordRefund(
    invoice: Invoice | string | ((invoice: Invoice) => void),
    refundDetail: RefundDetail | ((refundDetail: RefundDetail) => void)
  ) {
    const invoiceInstance =
      typeof invoice !== "string" ? (invoice instanceof Invoice ? invoice : new Invoice()) : undefined;
    if (typeof invoice === "function" && invoiceInstance) {
      invoice(invoiceInstance);
    }
    const invoiceId = typeof invoice === "string" ? invoice : invoiceInstance!.getId();
    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }

    const refundDetailInstance = refundDetail instanceof RefundDetail ? refundDetail : new RefundDetail();
    if (typeof refundDetail === "function") {
      refundDetail(refundDetailInstance);
    }

    const response = await this.PayPal.getAPI().post<TInvoice>(
      `/v2/invoicing/invoices/${invoiceId}/refunds`,
      refundDetailInstance.toAttributeObject<TRefundDetail>()
    );

    const SUCCESS_RESPONSE = 200;
    return response.status === SUCCESS_RESPONSE ? this.get(invoiceId) : response.statusText;
  }

  async deleteExternalRefund(invoice: Invoice, transactionId: string): Promise<boolean>;
  async deleteExternalRefund(invoice: string, transactionId: string): Promise<boolean>;
  async deleteExternalRefund(invoice: (invoice: Invoice) => void, transactionId: string): Promise<boolean>;
  async deleteExternalRefund(
    invoice: Invoice | string | ((invoice: Invoice) => void),
    transactionId: string
  ): Promise<boolean> {
    const invoiceInstance =
      typeof invoice !== "string" ? (invoice instanceof Invoice ? invoice : new Invoice()) : undefined;
    if (typeof invoice === "function" && invoiceInstance) {
      invoice(invoiceInstance);
    }
    const invoiceId = typeof invoice === "string" ? invoice : invoiceInstance!.getId();
    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }
    const response = await this.PayPal.getAPI().delete(`/v2/invoicing/invoices/${invoiceId}/refunds/${transactionId}`);
    const SUCCESS_RESPONSE = 204;
    return response.status === SUCCESS_RESPONSE;
  }

  async sendReminder(
    invoice: Invoice,
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice | string>;
  async sendReminder(
    invoice: string,
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice | string>;
  async sendReminder(
    invoice: (invoice: Invoice) => void,
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice | string>;
  async sendReminder(
    invoice: Invoice,
    additionalRecipients?: ((additionalRecipient: EmailAddress) => void)[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice | string>;
  async sendReminder(
    invoice: string,
    additionalRecipients?: ((additionalRecipient: EmailAddress) => void)[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice | string>;
  async sendReminder(
    invoice: (invoice: Invoice) => void,
    additionalRecipients?: ((additionalRecipient: EmailAddress) => void)[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice | string>;
  async sendReminder(
    invoice: Invoice | string | ((invoice: Invoice) => void),
    additionalRecipients?: (EmailAddress | ((additionalRecipient: EmailAddress) => void))[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ) {
    const invoiceInstance =
      typeof invoice !== "string" ? (invoice instanceof Invoice ? invoice : new Invoice()) : undefined;
    if (typeof invoice === "function" && invoiceInstance) {
      invoice(invoiceInstance);
    }
    const invoiceId = typeof invoice === "string" ? invoice : invoiceInstance!.getId();

    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }

    const response = await this.PayPal.getAPI().post<TInvoice>(`/v2/invoicing/invoices/${invoiceId}/remind`, {
      additional_recipients: additionalRecipients?.map((x) => {
        const additionalRecipient = x instanceof EmailAddress ? x : new EmailAddress();
        if (typeof x === "function") {
          x(additionalRecipient);
        }
        return additionalRecipient.toAttributeObject<TEmailAddress>();
      }),
      send_to_invoicer: sendToInvoicer,
      send_to_recipient: sendToRecipient,
      subject,
      note,
    });

    const SUCCESS_RESPONSE = 200;
    return response.status === SUCCESS_RESPONSE ? this.get(invoiceId) : response.statusText;
  }

  async send(
    invoice: Invoice,
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice | string>;
  async send(
    invoice: string,
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice | string>;
  async send(
    invoice: (invoice: Invoice) => void,
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice | string>;
  async send(
    invoice: Invoice,
    additionalRecipients?: ((additionalRecipient: EmailAddress) => void)[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice | string>;
  async send(
    invoice: string,
    additionalRecipients?: ((additionalRecipient: EmailAddress) => void)[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice | string>;
  async send(
    invoice: (invoice: Invoice) => void,
    additionalRecipients?: ((additionalRecipient: EmailAddress) => void)[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice | string>;
  async send(
    invoice: Invoice | string | ((invoice: Invoice) => void),
    additionalRecipients?: (EmailAddress | ((additionalRecipient: EmailAddress) => void))[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ) {
    const invoiceInstance =
      typeof invoice !== "string" ? (invoice instanceof Invoice ? invoice : new Invoice()) : undefined;
    if (typeof invoice === "function" && invoiceInstance) {
      invoice(invoiceInstance);
    }
    const invoiceId = typeof invoice === "string" ? invoice : invoiceInstance!.getId();
    if (!invoiceId) {
      throw new Error("Invoice id is required");
    }
    const response = await this.PayPal.getAPI().post<TInvoice>(`/v2/invoicing/invoices/${invoiceId}/send`, {
      additional_recipients: additionalRecipients?.map((x) => {
        const additionalRecipient = x instanceof EmailAddress ? x : new EmailAddress();
        if (typeof x === "function") {
          x(additionalRecipient);
        }
        return additionalRecipient.toAttributeObject<TEmailAddress>();
      }),
      send_to_invoicer: sendToInvoicer,
      send_to_recipient: sendToRecipient,
      subject,
      note,
    });

    const SUCCESS_RESPONSE = 200;
    return response.status === SUCCESS_RESPONSE ? this.get(invoiceId) : response.statusText;
  }

  async search<N extends number, U extends number>(
    page: Integer<N>,
    pageSize: Integer<U>,
    totalRequired: boolean,
    data?: TSearch
  ) {
    const response = await this.PayPal.getAPI().post<TSearchForInvoicesResponse<number, number>>(
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
    const response = await this.PayPal.getAPI().get<TListTemplatesResponse>(`/v2/invoicing/templates`, {
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

  async createTemplate(template: Template): Promise<Template>;
  async createTemplate(template: (template: Template) => void): Promise<Template>;
  async createTemplate(template: Template | ((template: Template) => void)) {
    const templateInstance = template instanceof Template ? template : new Template();
    if (typeof template === "function") {
      template(templateInstance);
    }
    const response = await this.PayPal.getAPI().post<TTemplate>(
      `/v2/invoicing/templates`,
      templateInstance.toAttributeObject<TTemplate>()
    );

    return Template.fromObject(response.data).setPayPal(this.PayPal);
  }

  async deleteTemplate(template: Template): Promise<boolean>;
  async deleteTemplate(template: string): Promise<boolean>;
  async deleteTemplate(template: (template: Template) => void): Promise<boolean>;
  async deleteTemplate(template: Template | string | ((template: Template) => void)) {
    const templateInstance =
      typeof template !== "string" ? (template instanceof Template ? template : new Template()) : undefined;
    if (typeof template === "function" && templateInstance) {
      template(templateInstance);
    }
    const templateId = typeof template === "string" ? template : templateInstance!.getId();
    if (!templateId) {
      throw new Error("Template id is required");
    }
    const response = await this.PayPal.getAPI().delete(`/v2/invoicing/templates/${templateId}`);
    const SUCCESS_RESPONSE = 204;
    return response.status === SUCCESS_RESPONSE;
  }

  async fullyUpdateTemplate(template: Template): Promise<Template>;
  async fullyUpdateTemplate(template: (template: Template) => void): Promise<Template>;
  async fullyUpdateTemplate(template: Template | ((template: Template) => void)) {
    const templateInstance = template instanceof Template ? template : new Template();
    if (typeof template === "function") {
      template(templateInstance);
    }
    const response = await this.PayPal.getAPI().put<TTemplate>(
      `/v2/invoicing/templates/${templateInstance.getId()}`,
      templateInstance.toAttributeObject<TTemplate>()
    );

    return Template.fromObject(response.data).setPayPal(this.PayPal);
  }

  async getTemplate(template: Template): Promise<Template>;
  async getTemplate(template: string): Promise<Template>;
  async getTemplate(template: (template: Template) => void): Promise<Template>;
  async getTemplate(template: Template | string | ((template: Template) => void)) {
    const templateInstance =
      typeof template !== "string" ? (template instanceof Template ? template : new Template()) : undefined;
    if (typeof template === "function" && templateInstance) {
      template(templateInstance);
    }
    const templateId = typeof template === "string" ? template : templateInstance!.getId();
    if (!templateId) {
      throw new Error("Template id is required");
    }
    const response = await this.PayPal.getAPI().get<TTemplate>(`/v2/invoicing/templates/${templateId}`);

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
