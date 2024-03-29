import PayPal from "../../PayPal.js";
import { QrConfigAction } from "../../Types/Invoicing/Enums/QrConfigAction.js";
import { Invoice, TInvoice } from "../../Types/Invoicing/Objects/Invoice.js";
import { InvoiceNumber, TInvoiceNumber } from "../../Types/Invoicing/Objects/InvoiceNumber.js";
import { Invoices, TInvoices } from "../../Types/Invoicing/Objects/Invoices.js";
import { PaymentDetail, TPaymentDetail } from "../../Types/Invoicing/Objects/PaymentDetail.js";
import { RefundDetail, TRefundDetail } from "../../Types/Invoicing/Objects/RefundDetail.js";
import { SearchData } from "../../Types/Invoicing/Objects/SearchData.js";
import { Template, TTemplate } from "../../Types/Invoicing/Objects/Template.js";
import { TTemplates, Templates } from "../../Types/Invoicing/Objects/Templates.js";
import { Integer, OnlySetters } from "../../Types/Utility.js";

type InvoiceDeleteArg = Invoice | string | ((invoice: OnlySetters<Invoice>) => void);

export class Invoicing {
  constructor(protected PayPal: PayPal) {}

  public async generateInvoiceNumber(): Promise<InvoiceNumber> {
    const response = await this.PayPal.getAPI().post<TInvoiceNumber>("/v2/invoicing/generate-next-invoice-number");
    return InvoiceNumber.fromObject(response.data);
  }

  /**
   *
   * @deprecated Use Invoicing#getMany()
   */
  public listInvoices(fields?: string, page?: number, pageSize?: number, totalRequired?: boolean) {
    return this.getMany(fields, page, pageSize, totalRequired);
  }

  public async getMany<N extends number, U extends number>(
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

    const response = await this.PayPal.getAPI().get<TInvoices>("/v2/invoicing/invoices", {
      params: {
        fields,
        page,
        page_size: pageSize,
        total_required: totalRequired,
      },
    });

    return Invoices.fromObject(response.data);
  }

  public async createDraft(invoice: Invoice): Promise<Invoice>;
  public async createDraft(invoice: (invoice: OnlySetters<Invoice>) => void): Promise<Invoice>;
  public async createDraft(invoice: Invoice | ((invoice: OnlySetters<Invoice>) => void)) {
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

  public async delete(invoice: Invoice): Promise<boolean>;
  public async delete(invoice: string): Promise<boolean>;
  public async delete(invoice: (invoice: OnlySetters<Invoice>) => void): Promise<boolean>;
  public async delete(invoice: InvoiceDeleteArg): Promise<boolean> {
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

  public async fullyUpdate(invoice: Invoice): Promise<Invoice>;
  public async fullyUpdate(invoice: (invoice: OnlySetters<Invoice>) => void, invoiceId?: string): Promise<Invoice>;
  public async fullyUpdate(invoice: Invoice | ((invoice: OnlySetters<Invoice>) => void), invoiceId?: string) {
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

  public async get(invoice: Invoice): Promise<Invoice>;
  public async get(invoice: string): Promise<Invoice>;
  public async get(invoice: (invoice: OnlySetters<Invoice>) => void): Promise<Invoice>;
  public async get(invoice: InvoiceDeleteArg) {
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

  public async cancel(
    invoice: Invoice,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean>;
  public async cancel(
    invoice: string,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean>;
  public async cancel(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean>;
  public async cancel(
    invoice: Invoice,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean>;
  public async cancel(
    invoice: string,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean>;
  public async cancel(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<boolean>;
  public async cancel(
    invoice: InvoiceDeleteArg,
    additionalRecipients?: string[],
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
      additional_recipients: additionalRecipients,
      send_to_invoicer: sendToInvoicer,
      send_to_recipient: sendToRecipient,
      subject,
      note,
    });

    const SUCCESS_RESPONSE = 204;
    return response.status === SUCCESS_RESPONSE;
  }

  public async generateQrCode<N extends number, U extends number>(
    invoice: Invoice,
    action?: QrConfigAction,
    height?: Integer<N>,
    width?: Integer<U>
  ): Promise<string>;
  public async generateQrCode<N extends number, U extends number>(
    invoice: string,
    action?: QrConfigAction,
    height?: Integer<N>,
    width?: Integer<U>
  ): Promise<string>;
  public async generateQrCode<N extends number, U extends number>(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    action?: QrConfigAction,
    height?: Integer<N>,
    width?: Integer<U>
  ): Promise<string>;
  public async generateQrCode<N extends number, U extends number>(
    invoice: Invoice,
    action?: (action: typeof QrConfigAction) => QrConfigAction,
    height?: Integer<N>,
    width?: Integer<U>
  ): Promise<string>;
  public async generateQrCode<N extends number, U extends number>(
    invoice: string,
    action?: (action: typeof QrConfigAction) => QrConfigAction,
    height?: Integer<N>,
    width?: Integer<U>
  ): Promise<string>;
  public async generateQrCode<N extends number, U extends number>(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    action?: (action: typeof QrConfigAction) => QrConfigAction,
    height?: Integer<N>,
    width?: Integer<U>
  ): Promise<string>;
  public async generateQrCode<N extends number, U extends number>(
    invoice: InvoiceDeleteArg,
    action?: QrConfigAction | ((action: typeof QrConfigAction) => QrConfigAction),
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
                QrConfigAction[
                  (typeof action === "function"
                    ? action(QrConfigAction)
                    : action
                  ).toUpperCase() as keyof typeof QrConfigAction
                ],
            }
          : {}),
        height,
        width,
      },
    });

    return response.data;
  }

  public async recordPayment(invoice: Invoice, paymentDetail: PaymentDetail): Promise<Invoice>;
  public async recordPayment(invoice: string, paymentDetail: PaymentDetail): Promise<Invoice>;
  public async recordPayment(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    paymentDetail: PaymentDetail
  ): Promise<Invoice>;
  public async recordPayment(
    invoice: Invoice,
    paymentDetail: (paymentDetail: OnlySetters<PaymentDetail>) => void
  ): Promise<Invoice>;
  public async recordPayment(
    invoice: string,
    paymentDetail: (paymentDetail: OnlySetters<PaymentDetail>) => void
  ): Promise<Invoice>;
  public async recordPayment(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    paymentDetail: (paymentDetail: OnlySetters<PaymentDetail>) => void
  ): Promise<Invoice>;

  public async recordPayment(
    invoice: InvoiceDeleteArg,
    paymentDetail: PaymentDetail | ((paymentDetail: OnlySetters<PaymentDetail>) => void)
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

  public async deleteExternalPayment(invoice: Invoice, transactionId: string): Promise<boolean>;
  public async deleteExternalPayment(invoice: string, transactionId: string): Promise<boolean>;
  public async deleteExternalPayment(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    transactionId: string
  ): Promise<boolean>;
  public async deleteExternalPayment(invoice: InvoiceDeleteArg, transactionId: string): Promise<boolean> {
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

  public async recordRefund(invoice: Invoice, refundDetail: RefundDetail): Promise<Invoice>;
  public async recordRefund(invoice: string, refundDetail: RefundDetail): Promise<Invoice>;
  public async recordRefund(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    refundDetail: RefundDetail
  ): Promise<Invoice>;
  public async recordRefund(
    invoice: Invoice,
    refundDetail: (refundDetail: OnlySetters<RefundDetail>) => void
  ): Promise<Invoice>;
  public async recordRefund(
    invoice: string,
    refundDetail: (refundDetail: OnlySetters<RefundDetail>) => void
  ): Promise<Invoice>;
  public async recordRefund(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    refundDetail: (refundDetail: OnlySetters<RefundDetail>) => void
  ): Promise<Invoice>;
  public async recordRefund(
    invoice: InvoiceDeleteArg,
    refundDetail: RefundDetail | ((refundDetail: OnlySetters<RefundDetail>) => void)
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
    if (response.status !== SUCCESS_RESPONSE) {
      throw new Error("Failed to record refund");
    }

    return this.get(invoiceId);
  }

  public async deleteExternalRefund(invoice: Invoice, transactionId: string): Promise<boolean>;
  public async deleteExternalRefund(invoice: string, transactionId: string): Promise<boolean>;
  public async deleteExternalRefund(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    transactionId: string
  ): Promise<boolean>;
  public async deleteExternalRefund(invoice: InvoiceDeleteArg, transactionId: string): Promise<boolean> {
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

  public async sendReminder(
    invoice: Invoice,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice>;
  public async sendReminder(
    invoice: string,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice>;
  public async sendReminder(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice>;
  public async sendReminder(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice>;
  public async sendReminder(
    invoice: Invoice | string | ((invoice: OnlySetters<Invoice>) => void),
    additionalRecipients?: string[],
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
      additional_recipients: additionalRecipients,
      send_to_invoicer: sendToInvoicer,
      send_to_recipient: sendToRecipient,
      subject,
      note,
    });

    const SUCCESS_RESPONSE = 200;

    if (response.status !== SUCCESS_RESPONSE) {
      throw new Error("Failed to send reminder");
    }

    return this.get(invoiceId);
  }

  public async send(
    invoice: Invoice,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice>;
  public async send(
    invoice: string,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice>;
  public async send(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice>;
  public async send(
    invoice: Invoice,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice>;
  public async send(
    invoice: string,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice>;
  public async send(
    invoice: (invoice: OnlySetters<Invoice>) => void,
    additionalRecipients?: string[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ): Promise<Invoice>;
  public async send(
    invoice: Invoice | string | ((invoice: OnlySetters<Invoice>) => void),
    additionalRecipients?: string[],
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
      additional_recipients: additionalRecipients,
      send_to_invoicer: sendToInvoicer,
      send_to_recipient: sendToRecipient,
      subject,
      note,
    });

    const SUCCESS_RESPONSE = 202;

    if (response.status !== SUCCESS_RESPONSE) {
      throw new Error("Failed to send invoice");
    }

    return this.get(invoiceId);
  }

  public async search<N extends number, U extends number>(
    page: Integer<N>,
    pageSize: Integer<U>,
    totalRequired: boolean,
    data?: SearchData | ((searchData: OnlySetters<SearchData>) => void)
  ) {
    const dataInstance = data instanceof SearchData ? data : new SearchData();
    if (typeof data === "function") data(dataInstance);
    const response = await this.PayPal.getAPI().post<TInvoices>(
      `/v2/invoicing/search-invoices`,
      dataInstance?.getFields() ?? {},
      {
        params: {
          page,
          page_size: pageSize,
          total_required: totalRequired,
        },
      }
    );

    return Invoices.fromObject(response.data);
  }

  public async listTemplates<N extends number, U extends number>(
    fields?: string,
    page?: Integer<N>,
    pageSize?: Integer<U>
  ) {
    const response = await this.PayPal.getAPI().get<TTemplates>(`/v2/invoicing/templates`, {
      params: {
        fields,
        page,
        page_size: pageSize,
      },
    });

    return Templates.fromObject(response.data);
  }

  public async createTemplate(template: Template): Promise<Template>;
  public async createTemplate(template: (template: OnlySetters<Template>) => void): Promise<Template>;
  public async createTemplate(template: Template | ((template: OnlySetters<Template>) => void)) {
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

  public async deleteTemplate(template: Template): Promise<boolean>;
  public async deleteTemplate(template: string): Promise<boolean>;
  public async deleteTemplate(template: (template: OnlySetters<Template>) => void): Promise<boolean>;
  public async deleteTemplate(template: Template | string | ((template: OnlySetters<Template>) => void)) {
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

  public async fullyUpdateTemplate(template: Template): Promise<Template>;
  public async fullyUpdateTemplate(template: (template: OnlySetters<Template>) => void): Promise<Template>;
  public async fullyUpdateTemplate(template: Template | ((template: OnlySetters<Template>) => void)) {
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

  public async getTemplate(template: Template): Promise<Template>;
  public async getTemplate(template: string): Promise<Template>;
  public async getTemplate(template: (template: OnlySetters<Template>) => void): Promise<Template>;
  public async getTemplate(template: Template | string | ((template: OnlySetters<Template>) => void)) {
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
