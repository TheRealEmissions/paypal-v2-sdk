import { IUtility, Static, Utility } from "../../Utility.js";

export type TBuyer = {
  name?: string;
};

export class Buyer extends Utility implements Static<IUtility, typeof Buyer> {
  private name?: string;

  public setName(name: string) {
    this.name = name;
    return this;
  }
  public getName() {
    return this.name;
  }

  public override getFields<T extends TBuyer>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TBuyer) {
    const buyer = new Buyer();
    if (obj.name) buyer.setName(obj.name);
    return buyer;
  }
}
