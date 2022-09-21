import PayPal from "../../PayPal";
import Types from "../Types";
import Money from "./Money";

class AmountRange extends Types {
  lowerAmount: Money;
  upperAmount: Money;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setLowerAmount(lowerAmount: Money) {
    this.lowerAmount = lowerAmount;
    return this;
  }

  setUpperAmount(upperAmount: Money) {
    this.upperAmount = upperAmount;
    return this;
  }
}

export default AmountRange;
