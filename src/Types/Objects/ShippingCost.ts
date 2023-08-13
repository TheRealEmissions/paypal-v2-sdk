import Types, { ITypes, Static } from "../Types.js";
import { Money, TMoney } from "./Money.js";
import { Tax, TTax } from "./Tax.js";

export type TShippingCost = {
  amount?: TMoney;
  tax?: TTax;
};

export class ShippingCost extends Types implements Static<ITypes, typeof ShippingCost> {
  amount?: Money;
  tax?: Tax;

  /**
   *
   * @param amount - Value must be between 0 and 1,000,000
   */
  setAmount(amount: Money): this;
  setAmount(amount: (money: Money) => void): this;
  setAmount(amount: Money | ((money: Money) => void)): this {
    const MAX_AMOUNT = 1_000_000;
    if (amount instanceof Money) {
      if (parseFloat(amount.value as string) < 0 || parseFloat(amount.value as string) > MAX_AMOUNT) {
        throw new Error("Amount value cannot be less than 0 or greater than 1,000,000");
      }
      this.amount = amount;
    } else {
      const money = new Money();
      amount(money);
      if (parseFloat(money.value as string) < 0 || parseFloat(money.value as string) > MAX_AMOUNT) {
        throw new Error("Amount value cannot be less than 0 or greater than 1,000,000");
      }
      this.amount = money;
    }
    return this;
  }

  setTax(tax: Tax): this;
  setTax(tax: (tax: Tax) => void): this;
  setTax(tax: Tax | ((tax: Tax) => void)) {
    if (tax instanceof Tax) this.tax = tax;
    else {
      const taxObj = new Tax();
      tax(taxObj);
      this.tax = taxObj;
    }
    return this;
  }

  static fromObject(obj: TShippingCost) {
    const shippingCost = new ShippingCost();
    if (obj.amount) shippingCost.setAmount(Money.fromObject(obj.amount));
    if (obj.tax) shippingCost.setTax(Tax.fromObject(obj.tax));
    return shippingCost;
  }
}
