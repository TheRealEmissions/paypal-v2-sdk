import Types, { ITypes, Static } from "../Types.js";
import Money, { TMoney } from "./Money.js";

export type TCustomAmount = {
  label: string;
  amount?: TMoney;
};

class CustomAmount extends Types implements Static<ITypes, typeof CustomAmount> {
  label?: string;
  amount?: Money;
  constructor() {
    super();
  }

  setLabel(label: string) {
    this.label = label;
    return this;
  }

  setAmount(amount: Money | ((money: Money) => void)) {
    if (amount instanceof Money) {
      if (Math.abs(parseFloat(amount.value as string)) > 1000000) {
        throw new Error("Amount value cannot be greater than 1,000,000");
      }
      this.amount = amount;
    } else {
      const money = new Money();
      amount(money);
      if (Math.abs(parseFloat(money.value as string)) > 1000000) {
        throw new Error("Amount value cannot be greater than 1,000,000");
      }
      this.amount = money;
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
