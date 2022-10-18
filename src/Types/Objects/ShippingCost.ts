import Types from "../Types.js";
import Money, { TMoney } from "./Money.js";
import Tax, { TTax } from "./Tax.js";

export type TShippingCost = {
  amount?: TMoney;
  tax?: TTax;
};

class ShippingCost extends Types {
  amount?: Money;
  tax?: Tax;

  constructor() {
    super();
  }

  setAmount(amount: Money) {
    if (parseFloat(amount.value as string) < 0 || parseFloat(amount.value as string) > 1000000) {
      throw new Error("Amount value cannot be less than 0 or greater than 1,000,000");
    }
    this.amount = amount;
    return this;
  }

  setTax(tax: Tax) {
    this.tax = tax;
    return this;
  }

  override fromObject(obj: TShippingCost) {
    this.amount = obj.amount ? new Money().fromObject(obj.amount) : undefined;
    this.tax = obj.tax ? new Tax().fromObject(obj.tax) : undefined;
    return this;
  }
}

export default ShippingCost;
