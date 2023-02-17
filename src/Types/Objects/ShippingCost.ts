import Types, { ITypes, StaticImplements } from "../Types.js";
import Money, { TMoney } from "./Money.js";
import Tax, { TTax } from "./Tax.js";

export type TShippingCost = {
  amount?: TMoney;
  tax?: TTax;
};

class ShippingCost extends Types implements StaticImplements<ITypes, typeof ShippingCost> {
  amount?: Money;
  tax?: Tax;

  constructor() {
    super();
  }

  /**
   *
   * @param amount - Value must be between 0 and 1,000,000
   */
  setAmount(amount: Money): ShippingCost {
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

  static fromObject(obj: TShippingCost) {
    const shippingCost = new ShippingCost();
    if (obj.amount) shippingCost.setAmount(Money.fromObject(obj.amount));
    if (obj.tax) shippingCost.setTax(Tax.fromObject(obj.tax));
    return shippingCost;
  }
}

export default ShippingCost;
