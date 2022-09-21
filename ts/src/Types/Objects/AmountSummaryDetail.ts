import PayPal from "../../PayPal";
import Types from "../Types";
import AmountWithBreakdown from "./AmountWithBreakdown";

class AmountSummaryDetail extends Types {
  breakdown: AmountWithBreakdown;
  currencyCode: string;
  value: string;

  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setBreakdown(breakdown: AmountWithBreakdown) {
    this.breakdown = breakdown;
    return this;
  }

  setCurrencyCode(currencyCode: string) {
    this.currencyCode = currencyCode;
    return this;
  }

  setValue(value: string) {
    const regex = new RegExp(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/);
    if (!regex.test(value)) {
      throw new Error("Invalid value");
    }

    this.value = value;
    return this;
  }
}

export default AmountSummaryDetail;
