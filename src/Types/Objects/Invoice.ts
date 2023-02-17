import PayPal from "../../PayPal.js";
import { GenerateQrCodeAction } from "../Enums/GenerateQrCodeAction.js";
import { InvoiceStatus } from "../Enums/InvoiceStatus.js";
import Types, { ITypes, Static } from "../Types.js";
import AmountSummaryDetail, { TAmountSummaryDetail } from "./AmountSummaryDetail.js";
import Configuration, { TConfiguration } from "./Configuration.js";
import EmailAddress, { TEmailAddress } from "./EmailAddress.js";
import InvoiceDetail, { TInvoiceDetail } from "./InvoiceDetail.js";
import InvoicerInfo, { TInvoicerInfo } from "./InvoicerInfo.js";
import Item, { TItem } from "./Item.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";
import Money, { TMoney } from "./Money.js";
import PaymentDetail from "./PaymentDetail.js";
import Payments, { TPayments } from "./Payments.js";
import RecipientInfo, { TRecipientInfo } from "./RecipientInfo.js";
import RefundDetail from "./RefundDetail.js";
import Refunds, { TRefunds } from "./Refunds.js";

export type TInvoice = {
  detail: TInvoiceDetail;
  additional_recipients?: TEmailAddress[];
  amount?: TAmountSummaryDetail;
  configuration?: TConfiguration;
  readonly due_amount?: TMoney;
  readonly gratuity?: TMoney;
  readonly id: string;
  invoicer?: TInvoicerInfo;
  items?: TItem[];
  readonly links?: TLinkDescription[];
  readonly parent_id?: string;
  payments?: TPayments;
  primary_recipients?: TRecipientInfo[];
  refunds?: TRefunds;
  readonly status: keyof typeof InvoiceStatus;
};

class Invoice extends Types implements Static<ITypes, typeof Invoice> {
  detail?: InvoiceDetail;
  additionalRecipients?: EmailAddress[];
  amount?: AmountSummaryDetail;
  configuration?: Configuration;
  dueAmount?: Money;
  gratuity?: Money;
  id?: string;
  invoicer?: InvoicerInfo;
  items?: Item[];
  links?: LinkDescription[];
  parentId?: string;
  payments?: Payments;
  primaryRecipients?: RecipientInfo[];
  refunds?: Refunds;
  status?: InvoiceStatus;

  PayPal?: PayPal;
  constructor(PayPal?: PayPal) {
    super();
    this.PayPal = PayPal;
  }

  setPayPal(PayPal: PayPal) {
    this.PayPal = PayPal;
    return this;
  }

  async createDraft(generateNextInvoiceNumber = false) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (generateNextInvoiceNumber) {
      const invoiceNumber = await this.PayPal.Invoicing.generateInvoiceNumber();
      if (this.detail) {
        this.detail.setInvoiceNumber(invoiceNumber.invoiceNumber);
      } else {
        this.setDetail(new InvoiceDetail().setInvoiceNumber(invoiceNumber.invoiceNumber));
      }
    }
    return await this.PayPal.Invoicing.createDraft(this);
  }

  delete() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to delete the invoice");
    }
    return this.PayPal.Invoicing.delete(this);
  }

  fullyUpdate() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to update the invoice");
    }
    return this.PayPal.Invoicing.fullyUpdate(this);
  }

  get() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to get the invoice");
    }
    return this.PayPal.Invoicing.get(this);
  }

  async generateQrCode(action?: GenerateQrCodeAction, height?: number, width?: number) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to generate QR code");
    }
    return this.PayPal.Invoicing.generateQrCode(this, action, height, width);
  }

  async recordPayment(paymentDetail: PaymentDetail) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to record payment");
    }
    return this.PayPal.Invoicing.recordPayment(this, paymentDetail);
  }

  async deleteExternalPayment(paymentId: string) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to delete external payment");
    }
    return this.PayPal.Invoicing.deleteExternalPayment(this, paymentId);
  }

  async recordRefund(refundDetail: RefundDetail) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to record refund");
    }
    return this.PayPal.Invoicing.recordRefund(this, refundDetail);
  }

  async deleteExternalRefund(transactionId: string) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to delete external refund");
    }
    return this.PayPal.Invoicing.deleteExternalRefund(this, transactionId);
  }

  async sendReminder(
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to send reminder");
    }
    return this.PayPal.Invoicing.sendReminder(
      this,
      additionalRecipients,
      note,
      sendToInvoicer,
      sendToRecipient,
      subject
    );
  }

  async send(
    additionalRecipients?: EmailAddress[],
    note?: string,
    sendToInvoicer?: boolean,
    sendToRecipient?: boolean,
    subject?: string
  ) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to send invoice");
    }
    return this.PayPal.Invoicing.send(this, additionalRecipients, note, sendToInvoicer, sendToRecipient, subject);
  }

  setDetail(detail: InvoiceDetail) {
    this.detail = detail;
    return this;
  }

  setAdditionalRecipients(additionalRecipients: EmailAddress[]) {
    this.additionalRecipients = additionalRecipients;
    return this;
  }

  setAmount(amount: AmountSummaryDetail) {
    this.amount = amount;
    return this;
  }

  setConfiguration(configuration: Configuration) {
    this.configuration = configuration;
    return this;
  }

  setDueAmount(dueAmount: Money) {
    this.dueAmount = dueAmount;
    return this;
  }

  setGratuity(gratuity: Money) {
    this.gratuity = gratuity;
    return this;
  }

  setId(id: string) {
    this.id = id;
    return this;
  }

  setInvoicer(invoicer: InvoicerInfo) {
    this.invoicer = invoicer;
    return this;
  }

  setItems(items: Item[]) {
    this.items = items;
    return this;
  }

  setLinks(links: LinkDescription[]) {
    this.links = links;
    return this;
  }

  setParentId(parentId: string) {
    this.parentId = parentId;
    return this;
  }

  setPayments(payments: Payments) {
    this.payments = payments;
    return this;
  }

  setPrimaryRecipients(primaryRecipients: RecipientInfo[]) {
    this.primaryRecipients = primaryRecipients;
    return this;
  }

  setRefunds(refunds: Refunds) {
    this.refunds = refunds;
    return this;
  }

  setStatus(status: InvoiceStatus) {
    this.status = status;
    return this;
  }

  static fromObject(obj: TInvoice) {
    const invoice = new Invoice();
    if (obj.detail) invoice.setDetail(InvoiceDetail.fromObject(obj.detail));
    if (obj.additional_recipients)
      invoice.setAdditionalRecipients(obj.additional_recipients.map(EmailAddress.fromObject));
    if (obj.amount) invoice.setAmount(AmountSummaryDetail.fromObject(obj.amount));
    if (obj.configuration) invoice.setConfiguration(Configuration.fromObject(obj.configuration));
    if (obj.due_amount) invoice.setDueAmount(Money.fromObject(obj.due_amount));
    if (obj.gratuity) invoice.setGratuity(Money.fromObject(obj.gratuity));
    if (obj.id) invoice.setId(obj.id);
    if (obj.invoicer) invoice.setInvoicer(InvoicerInfo.fromObject(obj.invoicer));
    if (obj.items) invoice.setItems(obj.items.map(Item.fromObject));
    if (obj.links) invoice.setLinks(obj.links.map(LinkDescription.fromObject));
    if (obj.parent_id) invoice.setParentId(obj.parent_id);
    if (obj.payments) invoice.setPayments(Payments.fromObject(obj.payments));
    if (obj.primary_recipients) invoice.setPrimaryRecipients(obj.primary_recipients.map(RecipientInfo.fromObject));
    if (obj.refunds) invoice.setRefunds(Refunds.fromObject(obj.refunds));
    if (obj.status) invoice.setStatus(InvoiceStatus[obj.status]);
    return invoice;
  }
}

export default Invoice;
