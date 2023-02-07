import Types from "../Types.js";

export type TAcceptOffer = {
  note?: string;
};

class AcceptOffer extends Types {
  note?: string;
  constructor() {
    super();
  }

  setNote(note: string) {
    this.note = note;
    return this;
  }

  override fromObject(obj: TAcceptOffer) {
    this.note = obj.note;
    return this;
  }
}

export default AcceptOffer;
