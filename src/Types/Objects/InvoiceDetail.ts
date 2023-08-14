import { Utility, IUtility, Static } from "../Utility.js";
import { FileReference, TFileReference } from "./FileReference.js";
import { InvoicePaymentTerm, TInvoicePaymentTerm } from "./InvoicePaymentTerm.js";
import { Metadata, TMetadata } from "./Metadata.js";

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

export class InvoiceDetail extends Utility implements Static<IUtility, typeof InvoiceDetail> {
  private currencyCode?: string;
  private attachments?: FileReference[];
  private memo?: string;
  private note?: string;
  private reference?: string;
  private termsAndConditions?: string;
  private invoiceDate?: string;
  private invoiceNumber?: string;
  private metadata?: Metadata;
  private paymentTerm?: InvoicePaymentTerm;

  public setCurrencyCode(currencyCode: string) {
    this.currencyCode = currencyCode;
    return this;
  }
  public getCurrencyCode() {
    return this.currencyCode;
  }

  public setAttachments(...attachments: FileReference[]): this;
  public setAttachments(...attachments: ((attachment: FileReference) => void)[]): this;
  public setAttachments(...attachments: (FileReference | ((attachment: FileReference) => void))[]) {
    this.attachments = attachments.map((attachment) => {
      if (attachment instanceof FileReference) {
        return attachment;
      } else {
        const attachmentInstance = new FileReference();
        attachment(attachmentInstance);
        return attachmentInstance;
      }
    });
    return this;
  }
  public getAttachments() {
    return this.attachments;
  }

  public setMemo(memo: string) {
    this.memo = memo;
    return this;
  }
  public getMemo() {
    return this.memo;
  }

  public setNote(note: string) {
    this.note = note;
    return this;
  }
  public getNote() {
    return this.note;
  }

  public setReference(reference: string) {
    this.reference = reference;
    return this;
  }
  public getReference() {
    return this.reference;
  }

  public setTermsAndConditions(termsAndConditions: string) {
    this.termsAndConditions = termsAndConditions;
    return this;
  }
  public getTermsAndConditions() {
    return this.termsAndConditions;
  }

  public setInvoiceDate(invoiceDate: string) {
    this.invoiceDate = invoiceDate;
    return this;
  }
  public getInvoiceDate() {
    return this.invoiceDate;
  }

  public setInvoiceNumber(invoiceNumber: string) {
    this.invoiceNumber = invoiceNumber;
    return this;
  }
  public getInvoiceNumber() {
    return this.invoiceNumber;
  }

  public setMetadata(metadata: Metadata): this;
  public setMetadata(metadata: (metadata: Metadata) => void): this;
  public setMetadata(metadata: Metadata | ((metadata: Metadata) => void)) {
    if (metadata instanceof Metadata) {
      this.metadata = metadata;
    } else {
      const metadataInstance = new Metadata();
      metadata(metadataInstance);
      this.metadata = metadataInstance;
    }
    return this;
  }
  public getMetadata() {
    return this.metadata;
  }

  public setPaymentTerm(paymentTerm: InvoicePaymentTerm): this;
  public setPaymentTerm(paymentTerm: (paymentTerm: InvoicePaymentTerm) => void): this;
  public setPaymentTerm(paymentTerm: InvoicePaymentTerm | ((paymentTerm: InvoicePaymentTerm) => void)) {
    if (paymentTerm instanceof InvoicePaymentTerm) {
      this.paymentTerm = paymentTerm;
    } else {
      const paymentTermInstance = new InvoicePaymentTerm();
      paymentTerm(paymentTermInstance);
      this.paymentTerm = paymentTermInstance;
    }
    return this;
  }
  public getPaymentTerm() {
    return this.paymentTerm;
  }

  public override getFields<T extends Partial<TInvoiceDetail>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TInvoiceDetail) {
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
