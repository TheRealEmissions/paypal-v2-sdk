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

  private PayPal?: PayPal;
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
    return this.PayPal.Invoicing.createDraft(this);
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

  async generateQrCode(
    action?: GenerateQrCodeAction | ((generateQrCodeAction: typeof GenerateQrCodeAction) => GenerateQrCodeAction),
    height?: number,
    width?: number
  ) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to generate QR code");
    }
    return this.PayPal.Invoicing.generateQrCode(
      this,
      typeof action === "function" ? action(GenerateQrCodeAction) : action,
      height,
      width
    );
  }

  async recordPayment(paymentDetail: PaymentDetail | ((paymentDetail: PaymentDetail) => void)) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to record payment");
    }
    if (paymentDetail instanceof PaymentDetail) {
      return this.PayPal.Invoicing.recordPayment(this, paymentDetail);
    } else {
      const newPaymentDetail = new PaymentDetail();
      paymentDetail(newPaymentDetail);
      return this.PayPal.Invoicing.recordPayment(this, newPaymentDetail);
    }
  }

  async deleteExternalPayment(paymentId: string) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to delete external payment");
    }
    return this.PayPal.Invoicing.deleteExternalPayment(this, paymentId);
  }

  async recordRefund(refundDetail: RefundDetail | ((refundDetail: RefundDetail) => void)) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to record refund");
    }
    if (refundDetail instanceof RefundDetail) {
      return this.PayPal.Invoicing.recordRefund(this, refundDetail);
    } else {
      const newRefundDetail = new RefundDetail();
      refundDetail(newRefundDetail);
      return this.PayPal.Invoicing.recordRefund(this, newRefundDetail);
    }
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
    additionalRecipients?: (EmailAddress | ((email: EmailAddress) => void))[],
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
    let newAdditionalRecipients: EmailAddress[] | undefined;
    if (additionalRecipients) {
      newAdditionalRecipients = additionalRecipients.map((email) => {
        if (email instanceof EmailAddress) {
          return email;
        } else {
          const newEmail = new EmailAddress();
          email(newEmail);
          return newEmail;
        }
      });
    }
    return this.PayPal.Invoicing.sendReminder(
      this,
      newAdditionalRecipients,
      note,
      sendToInvoicer,
      sendToRecipient,
      subject
    );
  }

  async send(
    additionalRecipients?: (EmailAddress | ((email: EmailAddress) => void))[],
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
    let newAdditionalRecipients: EmailAddress[] | undefined;
    if (additionalRecipients) {
      newAdditionalRecipients = additionalRecipients.map((email) => {
        if (email instanceof EmailAddress) {
          return email;
        } else {
          const newEmail = new EmailAddress();
          email(newEmail);
          return newEmail;
        }
      });
    }
    return this.PayPal.Invoicing.send(this, newAdditionalRecipients, note, sendToInvoicer, sendToRecipient, subject);
  }

  setDetail(detail: InvoiceDetail | ((detail: InvoiceDetail) => void)) {
    if (detail instanceof InvoiceDetail) {
      this.detail = detail;
    } else {
      const newDetail = new InvoiceDetail();
      detail(newDetail);
      this.detail = newDetail;
    }
    return this;
  }

  setAdditionalRecipients(...additionalRecipients: (EmailAddress | ((email: EmailAddress) => void))[]) {
    this.additionalRecipients = additionalRecipients.map((email) => {
      if (email instanceof EmailAddress) {
        return email;
      } else {
        const newEmail = new EmailAddress();
        email(newEmail);
        return newEmail;
      }
    });
    return this;
  }

  setAmount(amount: AmountSummaryDetail | ((amount: AmountSummaryDetail) => void)) {
    if (amount instanceof AmountSummaryDetail) {
      this.amount = amount;
    } else {
      const newAmount = new AmountSummaryDetail();
      amount(newAmount);
      this.amount = newAmount;
    }
    return this;
  }

  setConfiguration(configuration: Configuration | ((configuration: Configuration) => void)) {
    if (configuration instanceof Configuration) {
      this.configuration = configuration;
    } else {
      const newConfiguration = new Configuration();
      configuration(newConfiguration);
      this.configuration = newConfiguration;
    }
    return this;
  }

  setDueAmount(dueAmount: Money | ((dueAmount: Money) => void)) {
    if (dueAmount instanceof Money) {
      this.dueAmount = dueAmount;
    } else {
      const newDueAmount = new Money();
      dueAmount(newDueAmount);
      this.dueAmount = newDueAmount;
    }
    return this;
  }

  setGratuity(gratuity: Money | ((gratuity: Money) => void)) {
    if (gratuity instanceof Money) {
      this.gratuity = gratuity;
    } else {
      const newGratuity = new Money();
      gratuity(newGratuity);
      this.gratuity = newGratuity;
    }
    return this;
  }

  setId(id: string) {
    this.id = id;
    return this;
  }

  setInvoicer(invoicer: InvoicerInfo | ((invoicer: InvoicerInfo) => void)) {
    if (invoicer instanceof InvoicerInfo) {
      this.invoicer = invoicer;
    } else {
      const newInvoicer = new InvoicerInfo();
      invoicer(newInvoicer);
      this.invoicer = newInvoicer;
    }
    return this;
  }

  setItems(...items: (Item | ((item: Item) => void))[]) {
    this.items = items.map((item) => {
      if (item instanceof Item) {
        return item;
      } else {
        const newItem = new Item();
        item(newItem);
        return newItem;
      }
    });
    return this;
  }

  setLinks(...links: (LinkDescription | ((link: LinkDescription) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) {
        return link;
      } else {
        const newLink = new LinkDescription();
        link(newLink);
        return newLink;
      }
    });
    return this;
  }

  setParentId(parentId: string) {
    this.parentId = parentId;
    return this;
  }

  setPayments(payments: Payments | ((payments: Payments) => void)) {
    if (payments instanceof Payments) {
      this.payments = payments;
    } else {
      const newPayments = new Payments();
      payments(newPayments);
      this.payments = newPayments;
    }
    return this;
  }

  setPrimaryRecipients(...primaryRecipients: (RecipientInfo | ((recipient: RecipientInfo) => void))[]) {
    this.primaryRecipients = primaryRecipients.map((recipient) => {
      if (recipient instanceof RecipientInfo) {
        return recipient;
      } else {
        const newRecipient = new RecipientInfo();
        recipient(newRecipient);
        return newRecipient;
      }
    });
    return this;
  }

  setRefunds(refunds: Refunds | ((refunds: Refunds) => void)) {
    if (refunds instanceof Refunds) {
      this.refunds = refunds;
    } else {
      const newRefunds = new Refunds();
      refunds(newRefunds);
      this.refunds = newRefunds;
    }
    return this;
  }

  setStatus(status: InvoiceStatus | ((status: typeof InvoiceStatus) => InvoiceStatus)) {
    if (typeof status === "function") this.status = status(InvoiceStatus);
    else this.status = status;
    return this;
  }

  static fromObject(obj: TInvoice) {
    const invoice = new Invoice();
    if (obj.detail) invoice.setDetail(InvoiceDetail.fromObject(obj.detail));
    if (obj.additional_recipients)
      invoice.setAdditionalRecipients(...obj.additional_recipients.map(EmailAddress.fromObject));
    if (obj.amount) invoice.setAmount(AmountSummaryDetail.fromObject(obj.amount));
    if (obj.configuration) invoice.setConfiguration(Configuration.fromObject(obj.configuration));
    if (obj.due_amount) invoice.setDueAmount(Money.fromObject(obj.due_amount));
    if (obj.gratuity) invoice.setGratuity(Money.fromObject(obj.gratuity));
    if (obj.id) invoice.setId(obj.id);
    if (obj.invoicer) invoice.setInvoicer(InvoicerInfo.fromObject(obj.invoicer));
    if (obj.items) invoice.setItems(...obj.items.map(Item.fromObject));
    if (obj.links) invoice.setLinks(...obj.links.map(LinkDescription.fromObject));
    if (obj.parent_id) invoice.setParentId(obj.parent_id);
    if (obj.payments) invoice.setPayments(Payments.fromObject(obj.payments));
    if (obj.primary_recipients) invoice.setPrimaryRecipients(...obj.primary_recipients.map(RecipientInfo.fromObject));
    if (obj.refunds) invoice.setRefunds(Refunds.fromObject(obj.refunds));
    if (obj.status) invoice.setStatus(InvoiceStatus[obj.status]);
    return invoice;
  }
}

export default Invoice;
