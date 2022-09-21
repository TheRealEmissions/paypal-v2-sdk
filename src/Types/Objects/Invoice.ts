import PayPal from "../../PayPal";
import { GenerateQrCodeAction } from "../Enums/GenerateQrCodeAction";
import { InvoiceStatus } from "../Enums/InvoiceStatus";
import Types from "../Types";
import AmountSummaryDetail, {
  TAmountSummaryDetail,
} from "./AmountSummaryDetail";
import Configuration, { TConfiguration } from "./Configuration";
import EmailAddress, { TEmailAddress } from "./EmailAddress";
import InvoiceDetail, { TInvoiceDetail } from "./InvoiceDetail";
import InvoicerInfo, { TInvoicerInfo } from "./InvoicerInfo";
import Item, { TItem } from "./Item";
import LinkDescription, { TLinkDescription } from "./LinkDescription";
import Money, { TMoney } from "./Money";
import PaymentDetail from "./PaymentDetail";
import Payments, { TPayments } from "./Payments";
import RecipientInfo, { TRecipientInfo } from "./RecipientInfo";
import RefundDetail from "./RefundDetail";
import Refunds, { TRefunds } from "./Refunds";

export type TInvoice = {
  detail: TInvoiceDetail;
  additional_recipients: TEmailAddress[];
  amount: TAmountSummaryDetail;
  configuration: TConfiguration;
  due_amount: TMoney;
  gratuity: TMoney;
  id: string;
  invoicer: TInvoicerInfo;
  items: TItem[];
  links: TLinkDescription[];
  parent_id: string;
  payments: TPayments;
  primary_recipients: TRecipientInfo[];
  refunds: TRefunds;
  status: string;
};

class Invoice extends Types {
  detail: InvoiceDetail;
  additionalRecipients: EmailAddress[];
  amount: AmountSummaryDetail;
  configuration: Configuration;
  dueAmount: Money;
  gratuity: Money;
  id: string;
  invoicer: InvoicerInfo;
  items: Item[];
  links: LinkDescription[];
  parentId: string;
  payments: Payments;
  primaryRecipients: RecipientInfo[];
  refunds: Refunds;
  status: InvoiceStatus;

  PayPal?: PayPal;
  constructor(PayPal?: PayPal) {
    super();
    this.PayPal = PayPal;
  }

  async createDraft(generateNextInvoiceNumber = false) {
    if (!this.PayPal)
      throw new Error(
        "To use in-built methods, please provide PayPal instance when initialising the invoice"
      );
    if (generateNextInvoiceNumber) {
      const invoiceNumber = await this.PayPal.Invoicing.generateInvoiceNumber();
      if (this.detail) {
        this.detail.setInvoiceNumber(invoiceNumber.invoiceNumber);
      } else {
        this.setDetail(
          new InvoiceDetail().setInvoiceNumber(invoiceNumber.invoiceNumber)
        );
      }
    }
    return this.PayPal.Invoicing.createDraft(this);
  }

  async delete() {
    if (!this.PayPal)
      throw new Error(
        "To use in-built methods, please provide PayPal instance when initialising the invoice"
      );
    if (!this.id) {
      throw new Error("Invoice ID is required to delete the invoice");
    }
    return this.PayPal.Invoicing.delete(this);
  }

  async fullyUpdate() {
    if (!this.PayPal)
      throw new Error(
        "To use in-built methods, please provide PayPal instance when initialising the invoice"
      );
    if (!this.id) {
      throw new Error("Invoice ID is required to update the invoice");
    }
    return this.PayPal.Invoicing.fullyUpdate(this);
  }

  async get() {
    if (!this.PayPal)
      throw new Error(
        "To use in-built methods, please provide PayPal instance when initialising the invoice"
      );
    if (!this.id) {
      throw new Error("Invoice ID is required to get the invoice");
    }
    return this.PayPal.Invoicing.get(this);
  }

  async generateQrCode(
    action?: GenerateQrCodeAction,
    height?: number,
    width?: number
  ) {
    if (!this.PayPal)
      throw new Error(
        "To use in-built methods, please provide PayPal instance when initialising the invoice"
      );
    if (!this.id) {
      throw new Error("Invoice ID is required to generate QR code");
    }
    return this.PayPal.Invoicing.generateQrCode(this, action, height, width);
  }

  async recordPayment(paymentDetail: PaymentDetail) {
    if (!this.PayPal)
      throw new Error(
        "To use in-built methods, please provide PayPal instance when initialising the invoice"
      );
    if (!this.id) {
      throw new Error("Invoice ID is required to record payment");
    }
    return this.PayPal.Invoicing.recordPayment(this, paymentDetail);
  }

  async deleteExternalPayment(paymentId: string) {
    if (!this.PayPal)
      throw new Error(
        "To use in-built methods, please provide PayPal instance when initialising the invoice"
      );
    if (!this.id) {
      throw new Error("Invoice ID is required to delete external payment");
    }
    return this.PayPal.Invoicing.deleteExternalPayment(this, paymentId);
  }

  async recordRefund(refundDetail: RefundDetail) {
    if (!this.PayPal)
      throw new Error(
        "To use in-built methods, please provide PayPal instance when initialising the invoice"
      );
    if (!this.id) {
      throw new Error("Invoice ID is required to record refund");
    }
    return this.PayPal.Invoicing.recordRefund(this, refundDetail);
  }

  async deleteExternalRefund(transactionId: string) {
    if (!this.PayPal)
      throw new Error(
        "To use in-built methods, please provide PayPal instance when initialising the invoice"
      );
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
      throw new Error(
        "To use in-built methods, please provide PayPal instance when initialising the invoice"
      );
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
      throw new Error(
        "To use in-built methods, please provide PayPal instance when initialising the invoice"
      );
    if (!this.id) {
      throw new Error("Invoice ID is required to send invoice");
    }
    return this.PayPal.Invoicing.send(
      this,
      additionalRecipients,
      note,
      sendToInvoicer,
      sendToRecipient,
      subject
    );
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
    this.additionalRecipients = obj.additional_recipients.map((x) =>
      new EmailAddress().fromObject(x)
    );
    this.amount = new AmountSummaryDetail().fromObject(obj.amount);
    this.configuration = new Configuration().fromObject(obj.configuration);
    this.dueAmount = new Money().fromObject(obj.due_amount);
    this.gratuity = new Money().fromObject(obj.gratuity);
    this.id = obj.id;
    this.invoicer = new InvoicerInfo().fromObject(obj.invoicer);
    this.items = obj.items.map((x) => new Item().fromObject(x));
    this.links = obj.links.map((x) => new LinkDescription().fromObject(x));
    this.parentId = obj.parent_id;
    this.payments = new Payments().fromObject(obj.payments);
    this.primaryRecipients = obj.primary_recipients.map((x) =>
      new RecipientInfo().fromObject(x)
    );
    this.refunds = new Refunds().fromObject(obj.refunds);
    this.status = InvoiceStatus[obj.status as keyof typeof InvoiceStatus];
    return this;
  }
}

export default Invoice;
