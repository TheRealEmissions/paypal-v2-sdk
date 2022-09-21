import PayPal from "../../PayPal";
import Types from "../Types";
import Money from "./Money";

class Discount extends Types {
  amount: Money;
  percent: string;

  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setAmount(amount: Money) {
    this.amount = amount;
    return this;
  }

  setPercent(percent: string) {
    this.percent = percent;
    return this;
  }
}

export default Discount;
