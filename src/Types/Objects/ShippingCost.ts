import Types from "../Types";
import Money, { TMoney } from "./Money";
import Tax, { TTax } from "./Tax";

export type TShippingCost = {
  amount: TMoney;
  tax: TTax;
};

class ShippingCost extends Types {
  amount?: Money;
  tax?: Tax;

  constructor() {
    super();
  }

  setAmount(amount: Money) {
    if (
      parseFloat(amount.value as string) < 0 ||
      parseFloat(amount.value as string) > 1000000
    ) {
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

  override fromObject(obj: TShippingCost) {
    this.amount = new Money().fromObject(obj.amount);
    this.tax = new Tax().fromObject(obj.tax);
    return this;
  }
}

export default ShippingCost;
