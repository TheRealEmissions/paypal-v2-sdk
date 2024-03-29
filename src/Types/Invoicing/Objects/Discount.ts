import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { Money, TMoney } from "./Money.js";

export type TDiscount = {
  amount?: TMoney;
  percent?: string;
};

type DiscountFields = {
  readonly amount?: Money;
  readonly percent?: string;
};

export class Discount extends Utility implements Static<IUtility, typeof Discount> {
  private amount?: Money;
  private percent?: string;

  public setAmount(amount: Money): this;
  public setAmount(amount: (amount: OnlySetters<Money>) => void): this;
  public setAmount(amount: Money | ((amount: OnlySetters<Money>) => void)): this {
    if (amount instanceof Money) {
      this.amount = amount;
    } else {
      const amountInstance = new Money();
      amount(amountInstance);
      this.amount = amountInstance;
    }
    return this;
  }
  public getAmount() {
    return this.amount;
  }

  public setPercent(percent: string) {
    this.percent = percent;
    return this;
  }
  public getPercent() {
    return this.percent;
  }

  public override getFields<T extends DiscountFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TDiscount) {
    const discount = new Discount();
    if (obj.amount) discount.setAmount(Money.fromObject(obj.amount));
    if (obj.percent) discount.setPercent(obj.percent);
    return discount;
  }
}
