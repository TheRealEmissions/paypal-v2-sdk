import PayPal from "../../PayPal";
import Types from "../Types";
import AmountWithBreakdown, {
  TAmountWithBreakdown,
} from "./AmountWithBreakdown";

export type TAmountSummaryDetail = {
  breakdown: TAmountWithBreakdown;
  currency_code: string;
  value: string;
};

class AmountSummaryDetail extends Types {
  breakdown: AmountWithBreakdown;
  currencyCode: string;
  value: string;

  constructor() {
    super();
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

  override fromObject(obj: TAmountSummaryDetail) {
    this.breakdown = new AmountWithBreakdown().fromObject(obj.breakdown);
    this.currencyCode = obj.currency_code;
    this.value = obj.value;
    return this;
  }
}

export default AmountSummaryDetail;
