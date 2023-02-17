import PayPal from "../../PayPal.js";
import { GenerateQrCodeAction } from "../Enums/GenerateQrCodeAction.js";
import { InvoiceStatus } from "../Enums/InvoiceStatus.js";
import Types from "../Types.js";
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

class Invoice extends Types {
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

  override fromObject(obj: TInvoice) {
    this.detail = new InvoiceDetail().fromObject(obj.detail);
    this.additionalRecipients = obj.additional_recipients?.map((x) => new EmailAddress().fromObject(x));
    this.amount = obj.amount ? new AmountSummaryDetail().fromObject(obj.amount) : undefined;
    this.configuration = obj.configuration ? new Configuration().fromObject(obj.configuration) : undefined;
    this.dueAmount = obj.due_amount ? new Money().fromObject(obj.due_amount) : undefined;
    this.gratuity = obj.gratuity ? new Money().fromObject(obj.gratuity) : undefined;
    this.id = obj.id;
    this.invoicer = obj.invoicer ? new InvoicerInfo().fromObject(obj.invoicer) : undefined;
    this.items = obj.items?.map((x) => new Item().fromObject(x));
    this.links = obj.links?.map((x) => new LinkDescription().fromObject(x));
    this.parentId = obj.parent_id;
    this.payments = obj.payments ? new Payments().fromObject(obj.payments) : undefined;
    this.primaryRecipients = obj.primary_recipients?.map((x) => new RecipientInfo().fromObject(x));
    this.refunds = obj.refunds ? new Refunds().fromObject(obj.refunds) : undefined;
    this.status = InvoiceStatus[obj.status as keyof typeof InvoiceStatus];
    return this;
  }
}

export default Invoice;
