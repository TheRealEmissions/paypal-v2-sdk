import Types, { ITypes, Static } from "../Types.js";
import Money, { TMoney } from "./Money.js";

export type TPartialPayment = {
  allow_partial_payment?: boolean;
  minimum_amount_due?: TMoney;
};

class PartialPayment extends Types implements Static<ITypes, typeof PartialPayment> {
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

  static fromObject(obj: TPartialPayment) {
    const partialPayment = new PartialPayment();
    if (obj.allow_partial_payment) partialPayment.setAllowPartialPayment(obj.allow_partial_payment);
    if (obj.minimum_amount_due) partialPayment.setMinimumAmountDue(Money.fromObject(obj.minimum_amount_due));
    return partialPayment;
  }
}

export default PartialPayment;
