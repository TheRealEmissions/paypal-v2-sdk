import { IUtility, Static, Utility } from "../../Utility";

export type TDenyOffer = {
  note: string;
};

export class DenyOffer extends Utility implements Static<IUtility, typeof DenyOffer> {
  private note!: string;

  public setNote(note: string) {
    this.note = note;
    return this;
  }
  public getNote() {
    return this.note;
  }

  public override getFields<T extends Partial<TDenyOffer>>() {
    return super.getFields<T>();
  }

  static fromObject(obj: TDenyOffer) {
    const denyOffer = new DenyOffer();
    denyOffer.setNote(obj.note);
    return denyOffer;
  }
}
