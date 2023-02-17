import Types, { ITypes, Static } from "../Types.js";
import Money, { TMoney } from "./Money.js";

export type TAmountRange = {
  lower_amount: TMoney;
  upper_amount: TMoney;
};

class AmountRange extends Types implements Static<ITypes, typeof AmountRange> {
  lowerAmount?: Money;
  upperAmount?: Money;
  constructor() {
    super();
  }

  setLowerAmount(lowerAmount: Money) {
    this.lowerAmount = lowerAmount;
    return this;
  }

  setUpperAmount(upperAmount: Money) {
    this.upperAmount = upperAmount;
    return this;
  }

  static fromObject(obj: TAmountRange) {
    const amountRange = new AmountRange();
    amountRange.setLowerAmount(Money.fromObject(obj.lower_amount));
    amountRange.setUpperAmount(Money.fromObject(obj.upper_amount));
    return amountRange;
  }
}

export default AmountRange;
