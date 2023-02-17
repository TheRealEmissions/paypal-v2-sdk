import Types, { ITypes, Static } from "../Types.js";
import Money, { TMoney } from "./Money.js";

export type TTax = {
  name: string;
  percent: string;
  readonly amount?: TMoney;
};

class Tax extends Types implements Static<ITypes, typeof Tax> {
  name?: string;
  percent?: string;
  amount?: Money;
  constructor() {
    super();
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setPercent(percent: string) {
    const regex = new RegExp(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/);
    if (!regex.test(percent)) {
      throw new Error("Invalid percent");
    }
    if (parseFloat(percent) < 0 || parseFloat(percent) > 100) {
      throw new Error("Invalid percent");
    }
    this.percent = percent;
    return this;
  }

  setAmount(amount: Money | ((money: Money) => void)) {
    if (amount instanceof Money) {
      this.amount = amount;
    } else {
      const money = new Money();
      amount(money);
      this.amount = money;
    }
    return this;
  }

  static fromObject(obj: TTax) {
    const tax = new Tax();
    if (obj.name) tax.setName(obj.name);
    if (obj.percent) tax.setPercent(obj.percent);
    if (obj.amount) tax.setAmount(Money.fromObject(obj.amount));
    return tax;
  }
}

export default Tax;
