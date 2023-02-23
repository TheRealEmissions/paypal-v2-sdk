import Types, { Static, ITypes } from "../Types";

export type TBuyer = {
  name?: string;
};

class Buyer extends Types implements Static<ITypes, typeof Buyer> {
  name?: string;

  constructor() {
    super();
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  static fromObject(obj: TBuyer) {
    const buyer = new Buyer();
    if (obj.name) buyer.setName(obj.name);
    return buyer;
  }
}

export default Buyer;
