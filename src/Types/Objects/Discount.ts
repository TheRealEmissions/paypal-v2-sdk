import Types, { ITypes, Static } from "@Types/Types.js";
import Money, { TMoney } from "./Money.js";

export type TDiscount = {
  amount?: TMoney;
  percent?: string;
};

class Discount extends Types implements Static<ITypes, typeof Discount> {
  amount?: Money;
  percent?: string;

  constructor() {
    super();
  }

  setAmount(amount: Money | ((money: Money) => void)) {
    if (amount instanceof Money) this.amount = amount;
    else {
      const money = new Money();
      amount(money);
      this.amount = money;
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
