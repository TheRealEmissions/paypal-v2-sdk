import Types from "../Types";
import AmountSummaryDetail, {
  TAmountSummaryDetail,
} from "./AmountSummaryDetail";
import Configuration, { TConfiguration } from "./Configuration";
import EmailAddress, { TEmailAddress } from "./EmailAddress";
import InvoicerInfo, { TInvoicerInfo } from "./InvoicerInfo";
import Item, { TItem } from "./Item";
import Money, { TMoney } from "./Money";
import RecipientInfo, { TRecipientInfo } from "./RecipientInfo";
import TemplateDetail, { TTemplateDetail } from "./TemplateDetail";

export type TTemplateInfo = {
  additional_recipients: TEmailAddress[];
  amount: TAmountSummaryDetail;
  configuration: TConfiguration;
  detail: TTemplateDetail;
  due_amount: TMoney;
  invoicer: TInvoicerInfo;
  items: TItem[];
  primary_recipients: TRecipientInfo[];
};

class TemplateInfo extends Types {
  additionalRecipients: EmailAddress[];
  amount: AmountSummaryDetail;
  configuration: Configuration;
  detail: TemplateDetail;
  dueAmount: Money;
  invoicer: InvoicerInfo;
  items: Item[];
  primaryRecipients: RecipientInfo[];
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

  override fromObject(obj: any) {
    this.additionalRecipients = obj.additional_recipients.map(
      (additionalRecipient: any) =>
        new EmailAddress().fromObject(additionalRecipient)
    );
    this.amount = new AmountSummaryDetail().fromObject(obj.amount);
    this.configuration = new Configuration().fromObject(obj.configuration);
    this.detail = new TemplateDetail().fromObject(obj.detail);
    this.dueAmount = new Money().fromObject(obj.due_amount);
    this.invoicer = new InvoicerInfo().fromObject(obj.invoicer);
    this.items = obj.items.map((item: any) => new Item().fromObject(item));
    this.primaryRecipients = obj.primary_recipients.map(
      (primaryRecipient: any) =>
        new RecipientInfo().fromObject(primaryRecipient)
    );
    return this;
  }
}

export default TemplateInfo;
