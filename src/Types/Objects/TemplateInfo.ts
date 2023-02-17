import Types, { ITypes, StaticImplements } from "../Types.js";
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

class TemplateInfo extends Types implements StaticImplements<ITypes, typeof TemplateInfo> {
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

  setDetail(detail: TemplateDetail) {
    this.detail = detail;
    return this;
  }

  setDueAmount(dueAmount: Money) {
    this.dueAmount = dueAmount;
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

  setPrimaryRecipients(primaryRecipients: RecipientInfo[]) {
    this.primaryRecipients = primaryRecipients;
    return this;
  }

  static fromObject(obj: TTemplateInfo) {
    const templateInfo = new TemplateInfo();
    if (obj.additional_recipients)
      templateInfo.setAdditionalRecipients(obj.additional_recipients.map((x) => EmailAddress.fromObject(x)));
    if (obj.amount) templateInfo.setAmount(AmountSummaryDetail.fromObject(obj.amount));
    if (obj.configuration) templateInfo.setConfiguration(Configuration.fromObject(obj.configuration));
    if (obj.detail) templateInfo.setDetail(TemplateDetail.fromObject(obj.detail));
    if (obj.due_amount) templateInfo.setDueAmount(Money.fromObject(obj.due_amount));
    if (obj.invoicer) templateInfo.setInvoicer(InvoicerInfo.fromObject(obj.invoicer));
    if (obj.items) templateInfo.setItems(obj.items.map((x) => Item.fromObject(x)));
    if (obj.primary_recipients)
      templateInfo.setPrimaryRecipients(obj.primary_recipients.map((x) => RecipientInfo.fromObject(x)));
    return templateInfo;
  }
}

export default TemplateInfo;
