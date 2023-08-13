import Types, { ITypes, Static } from "../Types.js";
import Money, { TMoney } from "./Money.js";

export type TDiscount = {
  amount?: TMoney;
  percent?: string;
};

class Discount extends Types implements Static<ITypes, typeof Discount> {
  amount?: Money;
  percent?: string;

  setAmount(amount: Money): this;
  setAmount(amount: (amount: Money) => void): this;
  setAmount(amount: Money | ((amount: Money) => void)): this {
    if (amount instanceof Money) {
      this.amount = amount;
    } else {
      const amountInstance = new Money();
      amount(amountInstance);
      this.amount = amountInstance;
    }
    return this;
  }

  setPercent(percent: string) {
    this.percent = percent;
    return this;
  }

  static fromObject(obj: TDiscount) {
    const discount = new Discount();
    if (obj.amount) discount.setAmount(Money.fromObject(obj.amount));
    if (obj.percent) discount.setPercent(obj.percent);
    return discount;
  }
}

export default Discount;
