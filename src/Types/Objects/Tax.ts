import Types from "../Types.js";
import Money, { TMoney } from "./Money.js";

export type TTax = {
  name: string;
  percent: string;
  readonly amount?: TMoney;
};

class Tax extends Types {
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

  setAmount(amount: Money) {
    this.amount = amount;
    return this;
  }

  override fromObject(obj: TTax) {
    this.name = obj.name;
    this.percent = obj.percent;
    this.amount = obj.amount ? new Money().fromObject(obj.amount) : undefined;
    return this;
  }
}

export default Tax;
