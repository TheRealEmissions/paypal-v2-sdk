import PayPal from "../../PayPal";
import Types from "../Types";
import FileReference from "./FileReference";
import InvoicePaymentTerm from "./InvoicePaymentTerm";
import Metadata from "./Metadata";

class InvoiceDetail extends Types {
  currencyCode: string;
  attachments: FileReference[];
  memo: string;
  note: string;
  reference: string;
  termsAndConditions: string;
  invoiceDate: string;
  invoiceNumber: string;
  metadata: Metadata;
  paymentTerm: InvoicePaymentTerm;
  constructor(PayPal: PayPal) {
    super(PayPal);
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
}

export default InvoiceDetail;
