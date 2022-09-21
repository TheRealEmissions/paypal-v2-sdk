import PayPal from "../../PayPal";
import Types from "../Types";
import Money from "./Money";

class PartialPayment extends Types {
  allowPartialPayment: boolean;
  minimumAmountDue: Money;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setAllowPartialPayment(allowPartialPayment: boolean) {
    this.allowPartialPayment = allowPartialPayment;
    return this;
  }

  setMinimumAmountDue(minimumAmountDue: Money) {
    this.minimumAmountDue = minimumAmountDue;
    return this;
  }
}

export default PartialPayment;
