import { IUtility, OnlySetters, Static, Utility } from "../../Utility";

export type TDenyOffer = {
  note: string;
};

type DenyOfferFields = {
  readonly note: string;
};

export class DenyOffer extends Utility implements Static<IUtility, typeof DenyOffer> {
  private note!: string;

  public setNote(note: string): OnlySetters<this> {
    this.note = note;
    return this;
  }
  public getNote() {
    return this.note;
  }

  public override getFields<T extends Partial<DenyOfferFields>>() {
    return super._getFields<T>();
  }

  static fromObject(obj: TDenyOffer) {
    const denyOffer = new DenyOffer();
    denyOffer.setNote(obj.note);
    return denyOffer;
  }
}
