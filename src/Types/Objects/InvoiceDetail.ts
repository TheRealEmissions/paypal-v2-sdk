import Types from "../Types";
import FileReference, { TFileReference } from "./FileReference";
import InvoicePaymentTerm, { TInvoicePaymentTerm } from "./InvoicePaymentTerm";
import Metadata, { TMetadata } from "./Metadata";

export type TInvoiceDetail = {
  currency_code: string;
  attachments: TFileReference[];
  memo: string;
  note: string;
  reference: string;
  terms_and_conditions: string;
  invoice_date: string;
  invoice_number: string;
  metadata: TMetadata;
  payment_term: TInvoicePaymentTerm;
};

class InvoiceDetail extends Types {
  currencyCode?: string;
  attachments?: FileReference[];
  memo?: string;
  note?: string;
  reference?: string;
  termsAndConditions?: string;
  invoiceDate?: string;
  invoiceNumber?: string;
  metadata?: Metadata;
  paymentTerm?: InvoicePaymentTerm;
  constructor() {
    super();
  }

  setCurrencyCode(currencyCode: string) {
    this.currencyCode = currencyCode;
    return this;
  }

  setAttachments(attachments: FileReference[]) {
    this.attachments = attachments;
    return this;
  }

  setMemo(memo: string) {
    this.memo = memo;
    return this;
  }

  setNote(note: string) {
    this.note = note;
    return this;
  }

  setReference(reference: string) {
    this.reference = reference;
    return this;
  }

  setTermsAndConditions(termsAndConditions: string) {
    this.termsAndConditions = termsAndConditions;
    return this;
  }

  setInvoiceDate(invoiceDate: string) {
    this.invoiceDate = invoiceDate;
    return this;
  }

  setInvoiceNumber(invoiceNumber: string) {
    this.invoiceNumber = invoiceNumber;
    return this;
  }

  setMetadata(metadata: Metadata) {
    this.metadata = metadata;
    return this;
  }

  setPaymentTerm(paymentTerm: InvoicePaymentTerm) {
    this.paymentTerm = paymentTerm;
    return this;
  }

  override fromObject(obj: TInvoiceDetail) {
    this.currencyCode = obj.currency_code;
    this.attachments = obj.attachments.map((attachment) =>
      new FileReference().fromObject(attachment)
    );
    this.memo = obj.memo;
    this.note = obj.note;
    this.reference = obj.reference;
    this.termsAndConditions = obj.terms_and_conditions;
    this.invoiceDate = obj.invoice_date;
    this.invoiceNumber = obj.invoice_number;
    this.metadata = new Metadata().fromObject(obj.metadata);
    this.paymentTerm = new InvoicePaymentTerm().fromObject(obj.payment_term);
    return this;
  }
}

export default InvoiceDetail;
