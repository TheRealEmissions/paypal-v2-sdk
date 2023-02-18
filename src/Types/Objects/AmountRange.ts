import Types, { ITypes, Static } from "@Types/Types.js";
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

  setLowerAmount(lowerAmount: Money | ((money: Money) => void)) {
    if (lowerAmount instanceof Money) this.lowerAmount = lowerAmount;
    else {
      const money = new Money();
      lowerAmount(money);
      this.lowerAmount = money;
    }
    return this;
  }

  setUpperAmount(upperAmount: Money | ((money: Money) => void)) {
    if (upperAmount instanceof Money) this.upperAmount = upperAmount;
    else {
      const money = new Money();
      upperAmount(money);
      this.upperAmount = money;
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

export default AmountRange;
