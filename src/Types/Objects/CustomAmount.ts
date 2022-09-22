import Types from "../Types";
import Money, { TMoney } from "./Money";

export type TCustomAmount = {
  label: string;
  amount?: TMoney;
};

class CustomAmount extends Types {
  label?: string;
  amount?: Money;
  constructor() {
    super();
  }

  setLabel(label: string) {
    this.label = label;
    return this;
  }

  setAmount(amount: Money) {
    if (Math.abs(parseFloat(amount.value as string)) > 1000000) {
      throw new Error("Amount value cannot be greater than 1,000,000");
    }
    this.amount = amount;
    return this;
  }

  override fromObject(obj: TCustomAmount) {
    this.label = obj.label;
    this.amount = obj.amount ? new Money().fromObject(obj.amount) : undefined;
    return this;
  }
}

export default CustomAmount;
