import Types from "../Types";
import Money, { TMoney } from "./Money";

export type TPartialPayment = {
  allow_partial_payment?: boolean;
  minimum_amount_due?: TMoney;
};

class PartialPayment extends Types {
  allowPartialPayment?: boolean;
  minimumAmountDue?: Money;
  constructor() {
    super();
  }

  setAllowPartialPayment(allowPartialPayment: boolean) {
    this.allowPartialPayment = allowPartialPayment;
    return this;
  }

  setMinimumAmountDue(minimumAmountDue: Money) {
    this.minimumAmountDue = minimumAmountDue;
    return this;
  }

  override fromObject(obj: TPartialPayment) {
    this.allowPartialPayment = obj.allow_partial_payment;
    this.minimumAmountDue = obj.minimum_amount_due ? new Money().fromObject(obj.minimum_amount_due) : undefined;
    return this;
  }
}

export default PartialPayment;
