import Types from "../Types";
import Money, { TMoney } from "./Money";

export type TDiscount = {
  amount?: TMoney;
  percent?: string;
};

class Discount extends Types {
  amount?: Money;
  percent?: string;

  constructor() {
    super();
  }

  setAmount(amount: Money) {
    this.amount = amount;
    return this;
  }

  setPercent(percent: string) {
    this.percent = percent;
    return this;
  }

  override fromObject(obj: TDiscount) {
    this.amount = obj.amount ? new Money().fromObject(obj.amount) : undefined;
    this.percent = obj.percent;
    return this;
  }
}

export default Discount;
