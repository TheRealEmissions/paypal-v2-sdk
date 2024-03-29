import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { AmountSummaryDetail, TAmountSummaryDetail } from "./AmountSummaryDetail.js";
import { Configuration, TConfiguration } from "./Configuration.js";
import { InvoicerInfo, TInvoicerInfo } from "./InvoicerInfo.js";
import { Item, TItem } from "./Item.js";
import { Money, TMoney } from "./Money.js";
import { RecipientInfo, TRecipientInfo } from "./RecipientInfo.js";
import { TemplateDetail, TTemplateDetail } from "./TemplateDetail.js";

export type TTemplateInfo = {
  additional_recipients?: string[];
  amount?: TAmountSummaryDetail;
  configuration?: TConfiguration;
  detail?: TTemplateDetail;
  readonly due_amount?: TMoney;
  invoicer?: TInvoicerInfo;
  items?: TItem[];
  primary_recipients?: TRecipientInfo[];
};

type TemplateInfoFields = {
  readonly additionalRecipients?: string[];
  readonly amount?: AmountSummaryDetail;
  readonly configuration?: Configuration;
  readonly detail?: TemplateDetail;
  readonly dueAmount?: Money;
  readonly invoicer?: InvoicerInfo;
  readonly items?: Item[];
  readonly primaryRecipients?: RecipientInfo[];
};

export class TemplateInfo extends Utility implements Static<IUtility, typeof TemplateInfo> {
  private additionalRecipients?: string[];
  private amount?: AmountSummaryDetail;
  private configuration?: Configuration;
  private detail?: TemplateDetail;
  private dueAmount?: Money;
  private invoicer?: InvoicerInfo;
  private items?: Item[];
  private primaryRecipients?: RecipientInfo[];

  public setAdditionalRecipients(...additionalRecipients: string[]) {
    this.additionalRecipients = additionalRecipients;
    return this;
  }
  public getAdditionalRecipients() {
    return this.additionalRecipients;
  }

  public setAmount(amount: AmountSummaryDetail): this;
  public setAmount(amount: (amountSummaryDetail: OnlySetters<AmountSummaryDetail>) => void): this;
  public setAmount(amount: AmountSummaryDetail | ((amountSummaryDetail: OnlySetters<AmountSummaryDetail>) => void)) {
    if (amount instanceof AmountSummaryDetail) this.amount = amount;
    else {
      const amountSummaryDetail = new AmountSummaryDetail();
      amount(amountSummaryDetail);
      this.amount = amountSummaryDetail;
    }
    return this;
  }
  public getAmount() {
    return this.amount;
  }

  public setConfiguration(configuration: Configuration): this;
  public setConfiguration(configuration: (configuration: OnlySetters<Configuration>) => void): this;
  public setConfiguration(configuration: Configuration | ((configuration: OnlySetters<Configuration>) => void)) {
    if (configuration instanceof Configuration) this.configuration = configuration;
    else {
      const config = new Configuration();
      configuration(config);
      this.configuration = config;
    }
    return this;
  }
  public getConfiguration() {
    return this.configuration;
  }

  public setDetail(detail: TemplateDetail): this;
  public setDetail(detail: (templateDetail: OnlySetters<TemplateDetail>) => void): this;
  public setDetail(detail: TemplateDetail | ((templateDetail: OnlySetters<TemplateDetail>) => void)) {
    if (detail instanceof TemplateDetail) this.detail = detail;
    else {
      const templateDetail = new TemplateDetail();
      detail(templateDetail);
      this.detail = templateDetail;
    }
    return this;
  }
  public getDetail() {
    return this.detail;
  }

  public setDueAmount(dueAmount: Money): this;
  public setDueAmount(dueAmount: (money: OnlySetters<Money>) => void): this;
  public setDueAmount(dueAmount: Money | ((money: OnlySetters<Money>) => void)) {
    if (dueAmount instanceof Money) this.dueAmount = dueAmount;
    else {
      const money = new Money();
      dueAmount(money);
      this.dueAmount = money;
    }
    return this;
  }
  public getDueAmount() {
    return this.dueAmount;
  }

  public setInvoicer(invoicer: InvoicerInfo): this;
  public setInvoicer(invoicer: (invoicerInfo: OnlySetters<InvoicerInfo>) => void): this;
  public setInvoicer(invoicer: InvoicerInfo | ((invoicerInfo: OnlySetters<InvoicerInfo>) => void)) {
    if (invoicer instanceof InvoicerInfo) this.invoicer = invoicer;
    else {
      const invoicerInfo = new InvoicerInfo();
      invoicer(invoicerInfo);
      this.invoicer = invoicerInfo;
    }
    return this;
  }
  public getInvoicer() {
    return this.invoicer;
  }

  public setItems(...items: Item[]): this;
  public setItems(...items: ((item: OnlySetters<Item>) => void)[]): this;
  public setItems(...items: (Item | ((item: OnlySetters<Item>) => void))[]) {
    this.items = items.map((x) => {
      if (x instanceof Item) return x;
      else {
        const item = new Item();
        x(item);
        return item;
      }
    });
    return this;
  }
  public getItems() {
    return this.items;
  }

  public setPrimaryRecipients(...primaryRecipients: RecipientInfo[]): this;
  public setPrimaryRecipients(...primaryRecipients: ((recipientInfo: OnlySetters<RecipientInfo>) => void)[]): this;
  public setPrimaryRecipients(
    ...primaryRecipients: (RecipientInfo | ((recipientInfo: OnlySetters<RecipientInfo>) => void))[]
  ) {
    this.primaryRecipients = primaryRecipients.map((x) => {
      if (x instanceof RecipientInfo) return x;
      else {
        const recipientInfo = new RecipientInfo();
        x(recipientInfo);
        return recipientInfo;
      }
    });
    return this;
  }
  public getPrimaryRecipients() {
    return this.primaryRecipients;
  }

  public override getFields<T extends TemplateInfoFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TTemplateInfo) {
    const templateInfo = new TemplateInfo();
    if (obj.additional_recipients) templateInfo.setAdditionalRecipients(...obj.additional_recipients);
    if (obj.amount) templateInfo.setAmount(AmountSummaryDetail.fromObject(obj.amount));
    if (obj.configuration) templateInfo.setConfiguration(Configuration.fromObject(obj.configuration));
    if (obj.detail) templateInfo.setDetail(TemplateDetail.fromObject(obj.detail));
    if (obj.due_amount) templateInfo.setDueAmount(Money.fromObject(obj.due_amount));
    if (obj.invoicer) templateInfo.setInvoicer(InvoicerInfo.fromObject(obj.invoicer));
    if (obj.items) templateInfo.setItems(...obj.items.map((x) => Item.fromObject(x)));
    if (obj.primary_recipients)
      templateInfo.setPrimaryRecipients(...obj.primary_recipients.map((x) => RecipientInfo.fromObject(x)));
    return templateInfo;
  }
}
