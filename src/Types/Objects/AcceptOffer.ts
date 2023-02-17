import Types, { ITypes, StaticImplements } from "../Types.js";

export type TAcceptOffer = {
  note?: string;
};

class AcceptOffer extends Types implements StaticImplements<ITypes, typeof AcceptOffer> {
  note?: string;
  constructor() {
    super();
  }

  setNote(note: string) {
    this.note = note;
    return this;
  }

  static fromObject(obj: TAcceptOffer) {
    const acceptOffer = new AcceptOffer();
    if (obj.note) acceptOffer.setNote(obj.note);
    return acceptOffer;
  }
}

export default AcceptOffer;
