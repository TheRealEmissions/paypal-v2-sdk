import { IUtility, OnlySetters, Static, Utility } from "../../Utility.js";

export type TBuyer = {
  name?: string;
};

type BuyerFields = {
  readonly name?: string;
};

export class Buyer extends Utility implements Static<IUtility, typeof Buyer> {
  private name?: string;

  public setName(name: string): OnlySetters<this> {
    this.name = name;
    return this;
  }
  public getName() {
    return this.name;
  }

  public override getFields<T extends BuyerFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TBuyer) {
    const buyer = new Buyer();
    if (obj.name) buyer.setName(obj.name);
    return buyer;
  }
}
