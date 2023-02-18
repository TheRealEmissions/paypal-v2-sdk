import Types, { ITypes, Static } from "@Types/Types.js";
import AmountSummaryDetail, { TAmountSummaryDetail } from "./AmountSummaryDetail.js";
import Configuration, { TConfiguration } from "./Configuration.js";
import EmailAddress, { TEmailAddress } from "./EmailAddress.js";
import InvoicerInfo, { TInvoicerInfo } from "./InvoicerInfo.js";
import Item, { TItem } from "./Item.js";
import Money, { TMoney } from "./Money.js";
import RecipientInfo, { TRecipientInfo } from "./RecipientInfo.js";
import TemplateDetail, { TTemplateDetail } from "./TemplateDetail.js";

export type TTemplateInfo = {
  additional_recipients?: TEmailAddress[];
  amount?: TAmountSummaryDetail;
  configuration?: TConfiguration;
  detail?: TTemplateDetail;
  readonly due_amount?: TMoney;
  invoicer?: TInvoicerInfo;
  items?: TItem[];
  primary_recipients?: TRecipientInfo[];
};

class TemplateInfo extends Types implements Static<ITypes, typeof TemplateInfo> {
  additionalRecipients?: EmailAddress[];
  amount?: AmountSummaryDetail;
  configuration?: Configuration;
  detail?: TemplateDetail;
  dueAmount?: Money;
  invoicer?: InvoicerInfo;
  items?: Item[];
  primaryRecipients?: RecipientInfo[];
  constructor() {
    super();
  }

  setAdditionalRecipients(...additionalRecipients: (EmailAddress | ((emailAddress: EmailAddress) => void))[]) {
    this.additionalRecipients = additionalRecipients.map((x) => {
      if (x instanceof EmailAddress) return x;
      else {
        const emailAddress = new EmailAddress();
        x(emailAddress);
        return emailAddress;
      }
    });
    return this;
  }

  setAmount(amount: AmountSummaryDetail | ((amountSummaryDetail: AmountSummaryDetail) => void)) {
    if (amount instanceof AmountSummaryDetail) this.amount = amount;
    else {
      const amountSummaryDetail = new AmountSummaryDetail();
      amount(amountSummaryDetail);
      this.amount = amountSummaryDetail;
    }
    return this;
  }

  setConfiguration(configuration: Configuration | ((configuration: Configuration) => void)) {
    if (configuration instanceof Configuration) this.configuration = configuration;
    else {
      const config = new Configuration();
      configuration(config);
      this.configuration = config;
    }
    return this;
  }

  setDetail(detail: TemplateDetail | ((templateDetail: TemplateDetail) => void)) {
    if (detail instanceof TemplateDetail) this.detail = detail;
    else {
      const templateDetail = new TemplateDetail();
      detail(templateDetail);
      this.detail = templateDetail;
    }
    return this;
  }

  setDueAmount(dueAmount: Money | ((money: Money) => void)) {
    if (dueAmount instanceof Money) this.dueAmount = dueAmount;
    else {
      const money = new Money();
      dueAmount(money);
      this.dueAmount = money;
    }
    return this;
  }

  setInvoicer(invoicer: InvoicerInfo | ((invoicerInfo: InvoicerInfo) => void)) {
    if (invoicer instanceof InvoicerInfo) this.invoicer = invoicer;
    else {
      const invoicerInfo = new InvoicerInfo();
      invoicer(invoicerInfo);
      this.invoicer = invoicerInfo;
    }
    return this;
  }

  setItems(...items: (Item | ((item: Item) => void))[]) {
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

  setPrimaryRecipients(...primaryRecipients: (RecipientInfo | ((recipientInfo: RecipientInfo) => void))[]) {
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

  static fromObject(obj: TTemplateInfo) {
    const templateInfo = new TemplateInfo();
    if (obj.additional_recipients)
      templateInfo.setAdditionalRecipients(...obj.additional_recipients.map((x) => EmailAddress.fromObject(x)));
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

export default TemplateInfo;
