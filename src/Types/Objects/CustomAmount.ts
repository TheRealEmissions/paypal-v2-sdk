import Types, { ITypes, Static } from "../Types.js";
import Money, { TMoney } from "./Money.js";

export type TCustomAmount = {
  label: string;
  amount?: TMoney;
};

class CustomAmount extends Types implements Static<ITypes, typeof CustomAmount> {
  label?: string;
  amount?: Money;

  setLabel(label: string) {
    this.label = label;
    return this;
  }

  setAmount(amount: Money): this;
  setAmount(amount: (amount: Money) => void): this;
  setAmount(amount: Money | ((amount: Money) => void)): this {
    const MAX_AMOUNT = 1_000_000;
    if (amount instanceof Money) {
      if (Math.abs(parseFloat(amount.value as string)) > MAX_AMOUNT) {
        throw new Error("Amount value cannot be greater than 1,000,000");
      }
      this.amount = amount;
    } else {
      const amountInstance = new Money();
      amount(amountInstance);
      if (Math.abs(parseFloat(amountInstance.value as string)) > MAX_AMOUNT) {
        throw new Error("Amount value cannot be greater than 1,000,000");
      }
      this.amount = amountInstance;
    }
    return this;
  }

  static fromObject(obj: TCustomAmount) {
    const customAmount = new CustomAmount();
    if (obj.label) customAmount.setLabel(obj.label);
    if (obj.amount) customAmount.setAmount(Money.fromObject(obj.amount));
    return customAmount;
  }
}

export default CustomAmount;
