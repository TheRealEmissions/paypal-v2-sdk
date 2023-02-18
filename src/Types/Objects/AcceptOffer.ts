import Types, { ITypes, Static } from "@Types/Types.js";

export type TAcceptOffer = {
  note?: string;
};

class AcceptOffer extends Types implements Static<ITypes, typeof AcceptOffer> {
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
