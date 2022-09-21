import PayPal from "../../PayPal";
import Types from "../Types";
import Money from "./Money";

class Tax extends Types {
  name: string;
  percent: string;
  amount: Money;
  constructor(PayPal: PayPal) {
    super(PayPal);
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
}

export default Tax;
