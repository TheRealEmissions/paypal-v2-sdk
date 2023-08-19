import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { FileReference, TFileReference } from "./FileReference.js";
import { PaymentTerm, TPaymentTerm } from "./PaymentTerm.js";
import { TemplateMetadata, TTemplateMetadata } from "./TemplateMetadata.js";

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

type TemplateDetailFields = {
  readonly currencyCode: string;
  readonly attachments?: FileReference[];
  readonly memo?: string;
  readonly note?: string;
  readonly reference?: string;
  readonly termsAndConditions?: string;
  readonly metadata?: TemplateMetadata;
  readonly paymentTerm?: PaymentTerm;
};

export class TemplateDetail extends Utility implements Static<IUtility, typeof TemplateDetail> {
  private currencyCode?: string;
  private attachments?: FileReference[];
  private memo?: string;
  private note?: string;
  private reference?: string;
  private termsAndConditions?: string;
  private metadata?: TemplateMetadata;
  private paymentTerm?: PaymentTerm;

  public setCurrencyCode(currencyCode: string) {
    this.currencyCode = currencyCode;
    return this;
  }
  public getCurrencyCode() {
    return this.currencyCode;
  }

  public setAttachments(...attachments: FileReference[]): this;
  public setAttachments(...attachments: ((fileReference: OnlySetters<FileReference>) => void)[]): this;
  public setAttachments(...attachments: (FileReference | ((fileReference: OnlySetters<FileReference>) => void))[]) {
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

  public setMetadata(metadata: TemplateMetadata): this;
  public setMetadata(metadata: (metadata: OnlySetters<TemplateMetadata>) => void): this;
  public setMetadata(metadata: TemplateMetadata | ((metadata: OnlySetters<TemplateMetadata>) => void)) {
    if (metadata instanceof TemplateMetadata) this.metadata = metadata;
    else {
      const m = new TemplateMetadata();
      metadata(m);
      this.metadata = m;
    }
    return this;
  }
  public getMetadata() {
    return this.metadata;
  }

  public setPaymentTerm(paymentTerm: PaymentTerm): this;
  public setPaymentTerm(paymentTerm: (paymentTerm: OnlySetters<PaymentTerm>) => void): this;
  public setPaymentTerm(paymentTerm: PaymentTerm | ((paymentTerm: OnlySetters<PaymentTerm>) => void)) {
    if (paymentTerm instanceof PaymentTerm) this.paymentTerm = paymentTerm;
    else {
      const p = new PaymentTerm();
      paymentTerm(p);
      this.paymentTerm = p;
    }
    return this;
  }
  public getPaymentTerm() {
    return this.paymentTerm;
  }

  public override getFields<T extends Partial<TemplateDetailFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TTemplateDetail) {
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
