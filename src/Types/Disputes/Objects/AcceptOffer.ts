import { Utility, IUtility, Static } from "../../Utility.js";

export type TAcceptOffer = {
  note?: string;
};

export class AcceptOffer extends Utility implements Static<IUtility, typeof AcceptOffer> {
  private note?: string;

  public setNote(note: string) {
    this.note = note;
    return this;
  }
  public getNote() {
    return this.note;
  }

  public override getFields<T extends TAcceptOffer>() {
    return super.getFields<T>();
  }

  static fromObject(obj: TAcceptOffer) {
    const acceptOffer = new AcceptOffer();
    if (obj.note) acceptOffer.setNote(obj.note);
    return acceptOffer;
  }
}
