import { Utility, IUtility, Static } from "../Utility.js";
import { Money, TMoney } from "./Money.js";
import { Tax, TTax } from "./Tax.js";

export type TShippingCost = {
  amount?: TMoney;
  tax?: TTax;
};

export class ShippingCost extends Utility implements Static<IUtility, typeof ShippingCost> {
  private amount?: Money;
  private tax?: Tax;

  /**
   *
   * @param amount - Value must be between 0 and 1,000,000
   */
  public setAmount(amount: Money): this;
  public setAmount(amount: (money: Money) => void): this;
  public setAmount(amount: Money | ((money: Money) => void)): this {
    const MAX_AMOUNT = 1_000_000;
    if (amount instanceof Money) {
      if (parseFloat(amount.getValue() as string) < 0 || parseFloat(amount.getValue() as string) > MAX_AMOUNT) {
        throw new Error("Amount value cannot be less than 0 or greater than 1,000,000");
      }
      this.amount = amount;
    } else {
      const money = new Money();
      amount(money);
      if (parseFloat(money.getValue() as string) < 0 || parseFloat(money.getValue() as string) > MAX_AMOUNT) {
        throw new Error("Amount value cannot be less than 0 or greater than 1,000,000");
      }
      this.amount = money;
    }
    return this;
  }
  public getAmount() {
    return this.amount;
  }

  public setTax(tax: Tax): this;
  public setTax(tax: (tax: Tax) => void): this;
  public setTax(tax: Tax | ((tax: Tax) => void)) {
    if (tax instanceof Tax) this.tax = tax;
    else {
      const taxObj = new Tax();
      tax(taxObj);
      this.tax = taxObj;
    }
    return this;
  }
  public getTax() {
    return this.tax;
  }

  public override getFields<T extends TShippingCost>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TShippingCost) {
    const shippingCost = new ShippingCost();
    if (obj.amount) shippingCost.setAmount(Money.fromObject(obj.amount));
    if (obj.tax) shippingCost.setTax(Tax.fromObject(obj.tax));
    return shippingCost;
  }
}
