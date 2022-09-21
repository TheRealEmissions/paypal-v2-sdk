import PayPal from "../../PayPal";
import Types from "../Types";
import Money from "./Money";

class CustomAmount extends Types {
  label: string;
  amount: Money;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setLabel(label: string) {
    this.label = label;
    return this;
  }

  setAmount(amount: Money) {
    if (Math.abs(parseFloat(amount.value)) > 1000000) {
      throw new Error("Amount value cannot be greater than 1,000,000");
    }
    this.amount = amount;
    return this;
  }
}

export default CustomAmount;
