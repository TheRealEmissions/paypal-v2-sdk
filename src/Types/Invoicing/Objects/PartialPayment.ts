import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { Money, TMoney } from "./Money.js";

export type TPartialPayment = {
  allow_partial_payment?: boolean;
  minimum_amount_due?: TMoney;
};

type PartialPaymentFields = {
  readonly allowPartialPayment?: boolean;
  readonly minimumAmountDue?: Money;
};

export class PartialPayment extends Utility implements Static<IUtility, typeof PartialPayment> {
  private allowPartialPayment?: boolean;
  private minimumAmountDue?: Money;

  public setAllowPartialPayment(allowPartialPayment: boolean) {
    this.allowPartialPayment = allowPartialPayment;
    return this;
  }
  public getAllowPartialPayment() {
    return this.allowPartialPayment;
  }

  public setMinimumAmountDue(minimumAmountDue: Money): this;
  public setMinimumAmountDue(minimumAmountDue: (money: OnlySetters<Money>) => void): this;
  public setMinimumAmountDue(minimumAmountDue: Money | ((money: OnlySetters<Money>) => void)) {
    if (minimumAmountDue instanceof Money) this.minimumAmountDue = minimumAmountDue;
    else {
      const money = new Money();
      minimumAmountDue(money);
      this.minimumAmountDue = money;
    }
    return this;
  }
  public getMinimumAmountDue() {
    return this.minimumAmountDue;
  }

  public override getFields<T extends Partial<PartialPaymentFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TPartialPayment) {
    const partialPayment = new PartialPayment();
    if (obj.allow_partial_payment) partialPayment.setAllowPartialPayment(obj.allow_partial_payment);
    if (obj.minimum_amount_due) partialPayment.setMinimumAmountDue(Money.fromObject(obj.minimum_amount_due));
    return partialPayment;
  }
}
