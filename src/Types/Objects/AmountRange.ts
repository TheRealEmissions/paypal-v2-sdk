import Types, { ITypes, Static } from "../Types.js";
import { Money, TMoney } from "./Money.js";

export type TAmountRange = {
  lower_amount: TMoney;
  upper_amount: TMoney;
};

export class AmountRange extends Types implements Static<ITypes, typeof AmountRange> {
  lowerAmount?: Money;
  upperAmount?: Money;

  setLowerAmount(lowerAmount: Money): this;
  setLowerAmount(lowerAmount: (lowerAmount: Money) => void): this;
  setLowerAmount(lowerAmount: Money | ((lowerAmount: Money) => void)): this {
    if (lowerAmount instanceof Money) {
      this.lowerAmount = lowerAmount;
    } else {
      const lowerAmountInstance = new Money();
      lowerAmount(lowerAmountInstance);
      this.lowerAmount = lowerAmountInstance;
    }
    return this;
  }

  setUpperAmount(upperAmount: Money): this;
  setUpperAmount(upperAmount: (upperAmount: Money) => void): this;
  setUpperAmount(upperAmount: Money | ((upperAmount: Money) => void)): this {
    if (upperAmount instanceof Money) {
      this.upperAmount = upperAmount;
    } else {
      const upperAmountInstance = new Money();
      upperAmount(upperAmountInstance);
      this.upperAmount = upperAmountInstance;
    }
    return this;
  }

  static fromObject(obj: TAmountRange) {
    const amountRange = new AmountRange();
    amountRange.setLowerAmount(Money.fromObject(obj.lower_amount));
    amountRange.setUpperAmount(Money.fromObject(obj.upper_amount));
    return amountRange;
  }
}
