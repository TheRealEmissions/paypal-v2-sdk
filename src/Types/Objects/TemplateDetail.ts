import Types, { ITypes, Static } from "../Types.js";
import FileReference, { TFileReference } from "./FileReference.js";
import PaymentTerm, { TPaymentTerm } from "./PaymentTerm.js";
import TemplateMetadata, { TTemplateMetadata } from "./TemplateMetadata.js";

export type TTemplateDetail = {
  currency_code: string;
  attachments?: TFileReference[];
  memo?: string;
  note?: string;
  reference?: string;
  terms_and_conditions?: string;
  metadata?: TTemplateMetadata;
  payment_term?: TPaymentTerm;
};

class TemplateDetail extends Types implements Static<ITypes, typeof TemplateDetail> {
  currencyCode?: string;
  attachments?: FileReference[];
  memo?: string;
  note?: string;
  reference?: string;
  termsAndConditions?: string;
  metadata?: TemplateMetadata;
  paymentTerm?: PaymentTerm;
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
      else {
        const a = new FileReference();
        attachment(a);
        return a;
      }
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

  setMetadata(metadata: TemplateMetadata | ((metadata: TemplateMetadata) => void)) {
    if (metadata instanceof TemplateMetadata) this.metadata = metadata;
    else {
      const m = new TemplateMetadata();
      metadata(m);
      this.metadata = m;
    }
    return this;
  }

  setPaymentTerm(paymentTerm: PaymentTerm | ((paymentTerm: PaymentTerm) => void)) {
    if (paymentTerm instanceof PaymentTerm) this.paymentTerm = paymentTerm;
    else {
      const p = new PaymentTerm();
      paymentTerm(p);
      this.paymentTerm = p;
    }
    return this;
  }

  static fromObject(obj: TTemplateDetail) {
    const templateDetail = new TemplateDetail();
    if (obj.currency_code) templateDetail.setCurrencyCode(obj.currency_code);
    if (obj.attachments)
      templateDetail.setAttachments(...obj.attachments.map((attachment) => FileReference.fromObject(attachment)));
    if (obj.memo) templateDetail.setMemo(obj.memo);
    if (obj.note) templateDetail.setNote(obj.note);
    if (obj.reference) templateDetail.setReference(obj.reference);
    if (obj.terms_and_conditions) templateDetail.setTermsAndConditions(obj.terms_and_conditions);
    if (obj.metadata) templateDetail.setMetadata(TemplateMetadata.fromObject(obj.metadata));
    if (obj.payment_term) templateDetail.setPaymentTerm(PaymentTerm.fromObject(obj.payment_term));
    return templateDetail;
  }
}

export default TemplateDetail;
