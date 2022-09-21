import PayPal from "../../PayPal";
import Types from "../Types";
import Money from "./Money";
import Tax from "./Tax";

class ShippingCost extends Types {
  amount: Money;
  tax: Tax;

  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setAmount(amount: Money) {
    if (parseFloat(amount.value) < 0 || parseFloat(amount.value) > 1000000) {
      throw new Error(
        "Amount value cannot be less than 0 or greater than 1,000,000"
      );
    }
    this.amount = amount;
    return this;
  }

  setTax(tax: Tax) {
    this.tax = tax;
    return this;
  }
}

export default ShippingCost;
