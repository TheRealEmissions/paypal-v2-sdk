import { FileReference, TFileReference } from "./FileReference";
import { IUtility, Static, Utility } from "../../Utility";

export type TDetail = {
  reference?: string;
  note?: string;
  terms_and_conditions?: string;
  memo?: string;
  attachments?: TFileReference[];
  currency_code: string;
};

export class Detail extends Utility implements Static<IUtility, typeof Detail> {
  private reference?: string;
  private note?: string;
  private termsAndConditions?: string;
  private memo?: string;
  private attachments?: FileReference[];
  private currencyCode!: string;

  public setReference(reference: string): this {
    this.reference = reference;
    return this;
  }
  public getReference(): string | undefined {
    return this.reference;
  }

  public setNote(note: string): this {
    this.note = note;
    return this;
  }
  public getNote(): string | undefined {
    return this.note;
  }

  public setTermsAndConditions(termsAndConditions: string): this {
    this.termsAndConditions = termsAndConditions;
    return this;
  }
  public getTermsAndConditions(): string | undefined {
    return this.termsAndConditions;
  }

  public setMemo(memo: string): this {
    this.memo = memo;
    return this;
  }
  public getMemo(): string | undefined {
    return this.memo;
  }

  public setAttachments(...attachments: FileReference[]): this;
  public setAttachments(...attachments: ((file: FileReference) => void)[]): this;
  public setAttachments(...attachments: (FileReference | ((file: FileReference) => void))[]) {
    this.attachments = attachments.map((attachment) => {
      if (attachment instanceof FileReference) {
        return attachment;
      }
      const file = new FileReference();
      attachment(file);
      return file;
    });
    return this;
  }
  public getAttachments(): FileReference[] | undefined {
    return this.attachments;
  }

  public setCurrencyCode(currencyCode: string): this {
    this.currencyCode = currencyCode;
    return this;
  }
  public getCurrencyCode(): string {
    return this.currencyCode;
  }

  public override getFields<T extends Partial<TDetail>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TDetail) {
    const detail = new Detail();
    if (obj.reference) {
      detail.setReference(obj.reference);
    }
    if (obj.note) {
      detail.setNote(obj.note);
    }
    if (obj.terms_and_conditions) {
      detail.setTermsAndConditions(obj.terms_and_conditions);
    }
    if (obj.memo) {
      detail.setMemo(obj.memo);
    }
    if (obj.attachments) {
      detail.setAttachments(...obj.attachments.map((attachment) => FileReference.fromObject(attachment)));
    }
    if (obj.currency_code) {
      detail.setCurrencyCode(obj.currency_code);
    }
    return detail;
  }
}
