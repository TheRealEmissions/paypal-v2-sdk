import Types, { ITypes, Static } from "../Types.js";
import FileReference, { TFileReference } from "./FileReference.js";
import InvoicePaymentTerm, { TInvoicePaymentTerm } from "./InvoicePaymentTerm.js";
import Metadata, { TMetadata } from "./Metadata.js";

export type TInvoiceDetail = {
  currency_code: string;
  attachments?: TFileReference[];
  memo?: string;
  note?: string;
  reference?: string;
  terms_and_conditions?: string;
  invoice_date?: string;
  invoice_number?: string;
  metadata?: TMetadata;
  payment_term?: TInvoicePaymentTerm;
};

class InvoiceDetail extends Types implements Static<ITypes, typeof InvoiceDetail> {
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

  setAttachments(...attachments: (FileReference | ((fileReference: FileReference) => void))[]) {
    this.attachments = attachments.map((attachment) => {
      if (attachment instanceof FileReference) return attachment;
      const fileReference = new FileReference();
      attachment(fileReference);
      return fileReference;
    });
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

  setPaymentTerm(paymentTerm: InvoicePaymentTerm | ((paymentTerm: InvoicePaymentTerm) => void)) {
    if (paymentTerm instanceof InvoicePaymentTerm) this.paymentTerm = paymentTerm;
    else {
      const invoicePaymentTerm = new InvoicePaymentTerm();
      paymentTerm(invoicePaymentTerm);
      this.paymentTerm = invoicePaymentTerm;
    }
    return this;
  }

  static fromObject(obj: TInvoiceDetail) {
    const invoiceDetail = new InvoiceDetail();
    if (obj.currency_code) invoiceDetail.setCurrencyCode(obj.currency_code);
    if (obj.attachments)
      invoiceDetail.setAttachments(...obj.attachments.map((attachment) => FileReference.fromObject(attachment)));
    if (obj.memo) invoiceDetail.setMemo(obj.memo);
    if (obj.note) invoiceDetail.setNote(obj.note);
    if (obj.reference) invoiceDetail.setReference(obj.reference);
    if (obj.terms_and_conditions) invoiceDetail.setTermsAndConditions(obj.terms_and_conditions);
    if (obj.invoice_date) invoiceDetail.setInvoiceDate(obj.invoice_date);
    if (obj.invoice_number) invoiceDetail.setInvoiceNumber(obj.invoice_number);
    if (obj.metadata) invoiceDetail.setMetadata(Metadata.fromObject(obj.metadata));
    if (obj.payment_term) invoiceDetail.setPaymentTerm(InvoicePaymentTerm.fromObject(obj.payment_term));
    return invoiceDetail;
  }
}

export default InvoiceDetail;
