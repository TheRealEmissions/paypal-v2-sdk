import Types from "../Types";
import AmountSummaryDetail, { TAmountSummaryDetail } from "./AmountSummaryDetail";
import Configuration, { TConfiguration } from "./Configuration";
import EmailAddress, { TEmailAddress } from "./EmailAddress";
import InvoicerInfo, { TInvoicerInfo } from "./InvoicerInfo";
import Item, { TItem } from "./Item";
import Money, { TMoney } from "./Money";
import RecipientInfo, { TRecipientInfo } from "./RecipientInfo";
import TemplateDetail, { TTemplateDetail } from "./TemplateDetail";

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

class TemplateInfo extends Types {
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

  override fromObject(obj: TTemplateInfo) {
    this.additionalRecipients = obj.additional_recipients?.map((additionalRecipient: any) =>
      new EmailAddress().fromObject(additionalRecipient)
    );
    this.amount = obj.amount ? new AmountSummaryDetail().fromObject(obj.amount) : undefined;
    this.configuration = obj.configuration ? new Configuration().fromObject(obj.configuration) : undefined;
    this.detail = obj.detail ? new TemplateDetail().fromObject(obj.detail) : undefined;
    this.dueAmount = obj.due_amount ? new Money().fromObject(obj.due_amount) : undefined;
    this.invoicer = obj.invoicer ? new InvoicerInfo().fromObject(obj.invoicer) : undefined;
    this.items = obj.items?.map((item: any) => new Item().fromObject(item));
    this.primaryRecipients = obj.primary_recipients?.map((primaryRecipient: any) =>
      new RecipientInfo().fromObject(primaryRecipient)
    );
    return this;
  }
}

export default TemplateInfo;
