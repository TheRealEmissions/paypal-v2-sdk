import Types from "../Types.js";
import Money, { TMoney } from "./Money.js";

export type TAmountRange = {
  lower_amount: TMoney;
  upper_amount: TMoney;
};

class AmountRange extends Types {
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

  override fromObject(obj: TAmountRange) {
    this.lowerAmount = new Money().fromObject(obj.lower_amount);
    this.upperAmount = new Money().fromObject(obj.upper_amount);
    return this;
  }
}

export default AmountRange;
