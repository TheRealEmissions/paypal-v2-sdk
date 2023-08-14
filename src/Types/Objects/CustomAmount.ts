import { Utility, IUtility, Static } from "../Utility.js";
import { Money, TMoney } from "./Money.js";

export type TCustomAmount = {
  label: string;
  amount?: TMoney;
};

export class CustomAmount extends Utility implements Static<IUtility, typeof CustomAmount> {
  private label?: string;
  private amount?: Money;

  public setLabel(label: string) {
    this.label = label;
    return this;
  }
  public getLabel() {
    return this.label;
  }

  public setAmount(amount: Money): this;
  public setAmount(amount: (amount: Money) => void): this;
  public setAmount(amount: Money | ((amount: Money) => void)): this {
    const MAX_AMOUNT = 1_000_000;
    if (amount instanceof Money) {
      if (Math.abs(parseFloat(amount.getValue() as string)) > MAX_AMOUNT) {
        throw new Error("Amount value cannot be greater than 1,000,000");
      }
      this.amount = amount;
    } else {
      const amountInstance = new Money();
      amount(amountInstance);
      if (Math.abs(parseFloat(amountInstance.getValue() as string)) > MAX_AMOUNT) {
        throw new Error("Amount value cannot be greater than 1,000,000");
      }
      this.amount = amountInstance;
    }
    return this;
  }
  public getAmount() {
    return this.amount;
  }

  public override getFields<T extends Partial<TCustomAmount>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TCustomAmount) {
    const customAmount = new CustomAmount();
    if (obj.label) customAmount.setLabel(obj.label);
    if (obj.amount) customAmount.setAmount(Money.fromObject(obj.amount));
    return customAmount;
  }
}
