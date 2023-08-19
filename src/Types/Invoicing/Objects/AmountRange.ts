import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { Money, TMoney } from "./Money.js";

export type TAmountRange = {
  lower_amount: TMoney;
  upper_amount: TMoney;
};

type AmountRangeFields = {
  readonly lowerAmount: Money;
  readonly upperAmount: Money;
};

export class AmountRange extends Utility implements Static<IUtility, typeof AmountRange> {
  private lowerAmount?: Money;
  private upperAmount?: Money;

  public setLowerAmount(lowerAmount: Money): this;
  public setLowerAmount(lowerAmount: (lowerAmount: OnlySetters<Money>) => void): this;
  public setLowerAmount(lowerAmount: Money | ((lowerAmount: OnlySetters<Money>) => void)): this {
    if (lowerAmount instanceof Money) {
      this.lowerAmount = lowerAmount;
    } else {
      const lowerAmountInstance = new Money();
      lowerAmount(lowerAmountInstance);
      this.lowerAmount = lowerAmountInstance;
    }
    return this;
  }
  public getLowerAmount() {
    return this.lowerAmount;
  }

  public setUpperAmount(upperAmount: Money): this;
  public setUpperAmount(upperAmount: (upperAmount: OnlySetters<Money>) => void): this;
  public setUpperAmount(upperAmount: Money | ((upperAmount: OnlySetters<Money>) => void)): this {
    if (upperAmount instanceof Money) {
      this.upperAmount = upperAmount;
    } else {
      const upperAmountInstance = new Money();
      upperAmount(upperAmountInstance);
      this.upperAmount = upperAmountInstance;
    }
    return this;
  }
  public getUpperAmount() {
    return this.upperAmount;
  }

  public override getFields<T extends Partial<AmountRangeFields>>() {
    return super._getFields<T>();
  }

  static fromObject(obj: TAmountRange) {
    const amountRange = new AmountRange();
    amountRange.setLowerAmount(Money.fromObject(obj.lower_amount));
    amountRange.setUpperAmount(Money.fromObject(obj.upper_amount));
    return amountRange;
  }
}
