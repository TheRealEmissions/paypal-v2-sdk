import { InvoiceStatus } from "../Enums/InvoiceStatus";
import { IUtility, OnlySetters, Static, Utility } from "../../Utility";
import { AmountRange, TAmountRange } from "./AmountRange";
import { DateRange, TDateRange } from "./DateRange";

export type TSearchData = {
  recipient_email?: string;
  recipient_first_name?: string;
  recipient_last_name?: string;
  recipient_business_name?: string;
  invoice_number?: string;
  status?: keyof typeof InvoiceStatus;
  reference?: string;
  memo?: string;
  payment_date_range?: TDateRange;
  archived?: boolean;
  fields?: string[];
  currency_code?: string;
  total_amount_range?: TAmountRange;
  invoice_date_range?: TDateRange;
  due_date_range?: TDateRange;
  creation_date_range?: TDateRange;
};

type SearchDataFields = {
  readonly recipientEmail?: string;
  readonly recipientFirstName?: string;
  readonly recipientLastName?: string;
  readonly recipientBusinessName?: string;
  readonly invoiceNumber?: string;
  readonly status?: InvoiceStatus;
  readonly reference?: string;
  readonly memo?: string;
  readonly paymentDateRange?: DateRange;
  readonly archived?: boolean;
  readonly fields?: string[];
  readonly currencyCode?: string;
  readonly totalAmountRange?: AmountRange;
  readonly invoiceDateRange?: DateRange;
  readonly dueDateRange?: DateRange;
  readonly creationDateRange?: DateRange;
};

export class SearchData extends Utility implements Static<IUtility, typeof SearchData> {
  private recipientEmail?: string;
  private recipientFirstName?: string;
  private recipientLastName?: string;
  private recipientBusinessName?: string;
  private invoiceNumber?: string;
  private status?: InvoiceStatus;
  private reference?: string;
  private memo?: string;
  private paymentDateRange?: DateRange;
  private archived?: boolean;
  private fields?: string[];
  private currencyCode?: string;
  private totalAmountRange?: AmountRange;
  private invoiceDateRange?: DateRange;
  private dueDateRange?: DateRange;
  private creationDateRange?: DateRange;

  public setRecipientEmail(recipientEmail: string) {
    this.recipientEmail = recipientEmail;
    return this;
  }
  public getRecipientEmail() {
    return this.recipientEmail;
  }

  public setRecipientFirstName(recipientFirstName: string) {
    this.recipientFirstName = recipientFirstName;
    return this;
  }
  public getRecipientFirstName() {
    return this.recipientFirstName;
  }

  public setRecipientLastName(recipientLastName: string) {
    this.recipientLastName = recipientLastName;
    return this;
  }
  public getRecipientLastName() {
    return this.recipientLastName;
  }

  public setRecipientBusinessName(recipientBusinessName: string) {
    this.recipientBusinessName = recipientBusinessName;
    return this;
  }
  public getRecipientBusinessName() {
    return this.recipientBusinessName;
  }

  public setInvoiceNumber(invoiceNumber: string) {
    this.invoiceNumber = invoiceNumber;
    return this;
  }
  public getInvoiceNumber() {
    return this.invoiceNumber;
  }

  public setStatus(status: InvoiceStatus | ((status: typeof InvoiceStatus) => InvoiceStatus)) {
    this.status = typeof status === "function" ? status(InvoiceStatus) : status;
    return this;
  }
  public getStatus() {
    return this.status;
  }

  public setReference(reference: string) {
    this.reference = reference;
    return this;
  }
  public getReference() {
    return this.reference;
  }

  public setMemo(memo: string) {
    this.memo = memo;
    return this;
  }
  public getMemo() {
    return this.memo;
  }

  public setPaymentDateRange(paymentDateRange: DateRange): this;
  public setPaymentDateRange(paymentDateRange: (dateRange: OnlySetters<DateRange>) => void): this;
  public setPaymentDateRange(paymentDateRange: DateRange | ((dateRange: OnlySetters<DateRange>) => void)) {
    const dateRange = paymentDateRange instanceof DateRange ? paymentDateRange : new DateRange();
    if (typeof paymentDateRange === "function") paymentDateRange(dateRange);
    this.paymentDateRange = dateRange;
    return this;
  }
  public getPaymentDateRange() {
    return this.paymentDateRange;
  }

  public setArchived(archived: boolean) {
    this.archived = archived;
    return this;
  }
  public getArchived() {
    return this.archived;
  }

  public setFieldsField(...fields: string[]) {
    this.fields = fields;
    return this;
  }
  public getFieldsField() {
    return this.fields;
  }

  public setCurrencyCode(currencyCode: string) {
    this.currencyCode = currencyCode;
    return this;
  }
  public getCurrencyCode() {
    return this.currencyCode;
  }

  public setTotalAmountRange(totalAmountRange: AmountRange): this;
  public setTotalAmountRange(totalAmountRange: (amountRange: OnlySetters<AmountRange>) => void): this;
  public setTotalAmountRange(totalAmountRange: AmountRange | ((amountRange: OnlySetters<AmountRange>) => void)) {
    const amountRange = totalAmountRange instanceof AmountRange ? totalAmountRange : new AmountRange();
    if (typeof totalAmountRange === "function") totalAmountRange(amountRange);
    this.totalAmountRange = amountRange;
    return this;
  }
  public getTotalAmountRange() {
    return this.totalAmountRange;
  }

  public setInvoiceDateRange(invoiceDateRange: DateRange): this;
  public setInvoiceDateRange(invoiceDateRange: (dateRange: OnlySetters<DateRange>) => void): this;
  public setInvoiceDateRange(invoiceDateRange: DateRange | ((dateRange: OnlySetters<DateRange>) => void)) {
    const dateRange = invoiceDateRange instanceof DateRange ? invoiceDateRange : new DateRange();
    if (typeof invoiceDateRange === "function") invoiceDateRange(dateRange);
    this.invoiceDateRange = dateRange;
    return this;
  }
  public getInvoiceDateRange() {
    return this.invoiceDateRange;
  }

  public setDueDateRange(dueDateRange: DateRange): this;
  public setDueDateRange(dueDateRange: (dateRange: OnlySetters<DateRange>) => void): this;
  public setDueDateRange(dueDateRange: DateRange | ((dateRange: OnlySetters<DateRange>) => void)) {
    const dateRange = dueDateRange instanceof DateRange ? dueDateRange : new DateRange();
    if (typeof dueDateRange === "function") dueDateRange(dateRange);
    this.dueDateRange = dateRange;
    return this;
  }
  public getDueDateRange() {
    return this.dueDateRange;
  }

  public setCreationDateRange(creationDateRange: DateRange): this;
  public setCreationDateRange(creationDateRange: (dateRange: OnlySetters<DateRange>) => void): this;
  public setCreationDateRange(creationDateRange: DateRange | ((dateRange: OnlySetters<DateRange>) => void)) {
    const dateRange = creationDateRange instanceof DateRange ? creationDateRange : new DateRange();
    if (typeof creationDateRange === "function") creationDateRange(dateRange);
    this.creationDateRange = dateRange;
    return this;
  }
  public getCreationDateRange() {
    return this.creationDateRange;
  }

  public override getFields<T extends Partial<SearchDataFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TSearchData) {
    const searchData = new SearchData();
    if (obj.recipient_email) searchData.setRecipientEmail(obj.recipient_email);
    if (obj.recipient_first_name) searchData.setRecipientFirstName(obj.recipient_first_name);
    if (obj.recipient_last_name) searchData.setRecipientLastName(obj.recipient_last_name);
    if (obj.recipient_business_name) searchData.setRecipientBusinessName(obj.recipient_business_name);
    if (obj.invoice_number) searchData.setInvoiceNumber(obj.invoice_number);
    if (obj.status) searchData.setStatus(InvoiceStatus[obj.status]);
    if (obj.reference) searchData.setReference(obj.reference);
    if (obj.memo) searchData.setMemo(obj.memo);
    if (obj.payment_date_range) searchData.setPaymentDateRange(DateRange.fromObject(obj.payment_date_range));
    if (obj.archived) searchData.setArchived(obj.archived);
    if (obj.fields) searchData.setFieldsField(...obj.fields);
    if (obj.currency_code) searchData.setCurrencyCode(obj.currency_code);
    if (obj.total_amount_range) searchData.setTotalAmountRange(AmountRange.fromObject(obj.total_amount_range));
    if (obj.invoice_date_range) searchData.setInvoiceDateRange(DateRange.fromObject(obj.invoice_date_range));
    if (obj.due_date_range) searchData.setDueDateRange(DateRange.fromObject(obj.due_date_range));
    if (obj.creation_date_range) searchData.setCreationDateRange(DateRange.fromObject(obj.creation_date_range));
    return searchData;
  }
}
