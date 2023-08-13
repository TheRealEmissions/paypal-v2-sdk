import Types, { ITypes, Static } from "../Types.js";
import { Money, TMoney } from "./Money.js";

export type TTax = {
  name: string;
  percent: string;
  readonly amount?: TMoney;
};

export class Tax extends Types implements Static<ITypes, typeof Tax> {
  name?: string;
  percent?: string;
  amount?: Money;

  setName(name: string) {
    this.name = name;
    return this;
  }

  setPercent(percent: string) {
    const regex = new RegExp(/^((-?\d+)|(-?(\d+)?[.]\d+))$/);
    if (!regex.test(percent)) {
      throw new Error("Invalid percent");
    }
    const MAX_PERCENT = 100;
    if (parseFloat(percent) < 0 || parseFloat(percent) > MAX_PERCENT) {
      throw new Error("Invalid percent");
    }
    this.percent = percent;
    return this;
  }

  setAmount(amount: Money): this;
  setAmount(amount: (money: Money) => void): this;
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
