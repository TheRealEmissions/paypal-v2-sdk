import PayPal from "../../../PayPal.js";
import { InvoiceStatus } from "../Enums/InvoiceStatus.js";
import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { AmountSummaryDetail, TAmountSummaryDetail } from "./AmountSummaryDetail.js";
import { Configuration, TConfiguration } from "./Configuration.js";
import { InvoiceDetail, TInvoiceDetail } from "./InvoiceDetail.js";
import { InvoicerInfo, TInvoicerInfo } from "./InvoicerInfo.js";
import { Item, TItem } from "./Item.js";
import { PaymentDetail } from "./PaymentDetail.js";
import { Payments, TPayments } from "./Payments.js";
import { RecipientInfo, TRecipientInfo } from "./RecipientInfo.js";
import { RefundDetail } from "./RefundDetail.js";
import { Refunds, TRefunds } from "./Refunds.js";
import { Money, TMoney } from "./Money.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";
import { QrConfigAction } from "../Enums/QrConfigAction.js";

export type TInvoice = {
  detail: TInvoiceDetail;
  additional_recipients?: string[];
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

type InvoiceFields = {
  readonly detail?: InvoiceDetail;
  readonly additionalRecipients?: string[];
  readonly amount?: AmountSummaryDetail;
  readonly configuration?: Configuration;
  readonly dueAmount?: Money;
  readonly gratuity?: Money;
  readonly id?: string;
  readonly invoicer?: InvoicerInfo;
  readonly items?: Item[];
  readonly links?: LinkDescription[];
  readonly parentId?: string;
  readonly payments?: Payments;
  readonly primaryRecipients?: RecipientInfo[];
  readonly refunds?: Refunds;
  readonly status?: InvoiceStatus;
};

export class Invoice extends Utility implements Static<IUtility, typeof Invoice> {
  private detail?: InvoiceDetail;
  private additionalRecipients?: string[];
  private amount?: AmountSummaryDetail;
  private configuration?: Configuration;
  private dueAmount?: Money;
  private gratuity?: Money;
  private id?: string;
  private invoicer?: InvoicerInfo;
  private items?: Item[];
  private links?: LinkDescription[];
  private parentId?: string;
  private payments?: Payments;
  private primaryRecipients?: RecipientInfo[];
  private refunds?: Refunds;
  private status?: InvoiceStatus;

  private PayPal?: PayPal;
  constructor(PayPal?: PayPal) {
    super();
    this.PayPal = PayPal;
  }

  public setPayPal(PayPal: PayPal) {
    this.PayPal = PayPal;
    return this;
  }

  public async createDraft(generateNextInvoiceNumber = false) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (generateNextInvoiceNumber) {
      const invoiceNumber = await this.PayPal.getInvoicing().generateInvoiceNumber();
      if (this.detail) {
        this.detail.setInvoiceNumber(invoiceNumber.getInvoiceNumber()!);
      } else {
        this.setDetail((detail) => detail.setInvoiceNumber(invoiceNumber.getInvoiceNumber()!));
      }
    }
    return this.PayPal.getInvoicing().createDraft(this);
  }

  public delete() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to delete the invoice");
    }
    return this.PayPal.getInvoicing().delete(this);
  }

  public fullyUpdate() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to update the invoice");
    }
    return this.PayPal.getInvoicing().fullyUpdate(this);
  }

  public get() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to get the invoice");
    }
    return this.PayPal.getInvoicing().get(this);
  }

  public async generateQrCode(action?: QrConfigAction, height?: number, width?: number): Promise<string>;
  public async generateQrCode(
    action?: (generateQrCodeAction: typeof QrConfigAction) => QrConfigAction,
    height?: number,
    width?: number
  ): Promise<string>;
  public async generateQrCode(
    action?: QrConfigAction | ((generateQrCodeAction: typeof QrConfigAction) => QrConfigAction),
    height?: number,
    width?: number
  ) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to generate QR code");
    }
    return this.PayPal.getInvoicing().generateQrCode(
      this,
      typeof action === "function" ? action(QrConfigAction) : action,
      height,
      width
    );
  }

  public async recordPayment(paymentDetail: PaymentDetail): Promise<string | Invoice>;
  public async recordPayment(
    paymentDetail: (paymentDetail: OnlySetters<PaymentDetail>) => void
  ): Promise<string | Invoice>;
  public async recordPayment(paymentDetail: PaymentDetail | ((paymentDetail: OnlySetters<PaymentDetail>) => void)) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to record payment");
    }
    if (paymentDetail instanceof PaymentDetail) {
      return this.PayPal.getInvoicing().recordPayment(this, paymentDetail);
    } else {
      const paymentDetailInstance = new PaymentDetail();
      paymentDetail(paymentDetailInstance);
      return this.PayPal.getInvoicing().recordPayment(this, paymentDetailInstance);
    }
  }

  public async deleteExternalPayment(paymentId: string) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to delete external payment");
    }
    return this.PayPal.getInvoicing().deleteExternalPayment(this, paymentId);
  }

  public async recordRefund(refundDetail: RefundDetail): Promise<string | Invoice>;
  public async recordRefund(refundDetail: (refundDetail: OnlySetters<RefundDetail>) => void): Promise<string | Invoice>;
  public async recordRefund(refundDetail: RefundDetail | ((refundDetail: OnlySetters<RefundDetail>) => void)) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to record refund");
    }
    if (refundDetail instanceof RefundDetail) {
      return this.PayPal.getInvoicing().recordRefund(this, refundDetail);
    } else {
      const refundDetailInstance = new RefundDetail();
      refundDetail(refundDetailInstance);
      return this.PayPal.getInvoicing().recordRefund(this, refundDetailInstance);
    }
  }

  public async deleteExternalRefund(transactionId: string) {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the invoice");
    if (!this.id) {
      throw new Error("Invoice ID is required to delete external refund");
    }
    return this.PayPal.getInvoicing().deleteExternalRefund(this, transactionId);
  }

  public async sendReminder(
    additionalRecipients?: string[],
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
    return this.PayPal.getInvoicing().sendReminder(
      this,
      additionalRecipients,
      note,
      sendToInvoicer,
      sendToRecipient,
      subject
    );
  }

  public async send(
    additionalRecipients?: string[],
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
    return this.PayPal.getInvoicing().send(this, additionalRecipients, note, sendToInvoicer, sendToRecipient, subject);
  }

  public setDetail(detail: InvoiceDetail): this;
  public setDetail(detail: (detail: OnlySetters<InvoiceDetail>) => void): this;
  public setDetail(detail: InvoiceDetail | ((detail: OnlySetters<InvoiceDetail>) => void)): this {
    if (detail instanceof InvoiceDetail) {
      this.detail = detail;
    } else {
      const detailInstance = new InvoiceDetail();
      detail(detailInstance);
      this.detail = detailInstance;
    }
    return this;
  }
  public getDetail() {
    return this.detail;
  }

  public setAdditionalRecipients(...additionalRecipients: string[]) {
    this.additionalRecipients = additionalRecipients;
    return this;
  }
  public getAdditionalRecipients() {
    return this.additionalRecipients;
  }

  public setAmount(amount: AmountSummaryDetail): this;
  public setAmount(amount: (amount: OnlySetters<AmountSummaryDetail>) => void): this;
  public setAmount(amount: AmountSummaryDetail | ((amount: OnlySetters<AmountSummaryDetail>) => void)) {
    if (amount instanceof AmountSummaryDetail) {
      this.amount = amount;
    } else {
      const amountInstance = new AmountSummaryDetail();
      amount(amountInstance);
      this.amount = amountInstance;
    }
    return this;
  }
  public getAmount() {
    return this.amount;
  }

  public setConfiguration(configuration: Configuration): this;
  public setConfiguration(configuration: (configuration: OnlySetters<Configuration>) => void): this;
  public setConfiguration(configuration: Configuration | ((configuration: OnlySetters<Configuration>) => void)): this {
    if (configuration instanceof Configuration) {
      this.configuration = configuration;
    } else {
      const configurationInstance = new Configuration();
      configuration(configurationInstance);
      this.configuration = configurationInstance;
    }
    return this;
  }
  public getConfiguration() {
    return this.configuration;
  }

  public setDueAmount(dueAmount: Money): this;
  public setDueAmount(dueAmount: (dueAmount: OnlySetters<Money>) => void): this;
  public setDueAmount(dueAmount: Money | ((dueAmount: OnlySetters<Money>) => void)) {
    if (dueAmount instanceof Money) {
      this.dueAmount = dueAmount;
    } else {
      const newDueAmount = new Money();
      dueAmount(newDueAmount);
      this.dueAmount = newDueAmount;
    }
    return this;
  }
  public getDueAmount() {
    return this.dueAmount;
  }

  public setGratuity(gratuity: Money): this;
  public setGratuity(gratuity: (gratuity: OnlySetters<Money>) => void): this;
  public setGratuity(gratuity: Money | ((gratuity: OnlySetters<Money>) => void)) {
    if (gratuity instanceof Money) {
      this.gratuity = gratuity;
    } else {
      const newGratuity = new Money();
      gratuity(newGratuity);
      this.gratuity = newGratuity;
    }
    return this;
  }
  public getGratuity() {
    return this.gratuity;
  }

  public setId(id: string) {
    this.id = id;
    return this;
  }
  public getId() {
    return this.id;
  }

  public setInvoicer(invoicer: InvoicerInfo): this;
  public setInvoicer(invoicer: (invoicer: OnlySetters<InvoicerInfo>) => void): this;
  public setInvoicer(invoicer: InvoicerInfo | ((invoicer: OnlySetters<InvoicerInfo>) => void)) {
    if (invoicer instanceof InvoicerInfo) {
      this.invoicer = invoicer;
    } else {
      const newInvoicer = new InvoicerInfo();
      invoicer(newInvoicer);
      this.invoicer = newInvoicer;
    }
    return this;
  }
  public getInvoicer() {
    return this.invoicer;
  }

  public setItems(...items: Item[]): this;
  public setItems(...items: ((item: OnlySetters<Item>) => void)[]): this;
  public setItems(...items: (Item | ((item: OnlySetters<Item>) => void))[]) {
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
  public getItems() {
    return this.items;
  }

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((link: OnlySetters<LinkDescription>) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((link: OnlySetters<LinkDescription>) => void))[]) {
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
  public getLinks() {
    return this.links;
  }

  public setParentId(parentId: string) {
    this.parentId = parentId;
    return this;
  }
  public getParentId() {
    return this.parentId;
  }

  public setPayments(payments: Payments): this;
  public setPayments(payments: (payments: OnlySetters<Payments>) => void): this;
  public setPayments(payments: Payments | ((payments: OnlySetters<Payments>) => void)) {
    if (payments instanceof Payments) {
      this.payments = payments;
    } else {
      const newPayments = new Payments();
      payments(newPayments);
      this.payments = newPayments;
    }
    return this;
  }
  public getPayments() {
    return this.payments;
  }

  public setPrimaryRecipients(...primaryRecipients: RecipientInfo[]): this;
  public setPrimaryRecipients(...primaryRecipients: ((recipient: OnlySetters<RecipientInfo>) => void)[]): this;
  public setPrimaryRecipients(
    ...primaryRecipients: (RecipientInfo | ((recipient: OnlySetters<RecipientInfo>) => void))[]
  ) {
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
  public getPrimaryRecipients() {
    return this.primaryRecipients;
  }

  public setRefunds(refunds: Refunds): this;
  public setRefunds(refunds: (refunds: OnlySetters<Refunds>) => void): this;
  public setRefunds(refunds: Refunds | ((refunds: OnlySetters<Refunds>) => void)) {
    if (refunds instanceof Refunds) {
      this.refunds = refunds;
    } else {
      const newRefunds = new Refunds();
      refunds(newRefunds);
      this.refunds = newRefunds;
    }
    return this;
  }
  public getRefunds() {
    return this.refunds;
  }

  public setStatus(status: InvoiceStatus): this;
  public setStatus(status: (status: typeof InvoiceStatus) => InvoiceStatus): this;
  public setStatus(status: InvoiceStatus | ((status: typeof InvoiceStatus) => InvoiceStatus)) {
    if (typeof status === "function") this.status = status(InvoiceStatus);
    else this.status = status;
    return this;
  }
  public getStatus() {
    return this.status;
  }

  public override getFields<T extends Partial<InvoiceFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TInvoice) {
    const invoice = new Invoice();
    if (obj.detail) invoice.setDetail(InvoiceDetail.fromObject(obj.detail));
    if (obj.additional_recipients) invoice.setAdditionalRecipients(...obj.additional_recipients);
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
