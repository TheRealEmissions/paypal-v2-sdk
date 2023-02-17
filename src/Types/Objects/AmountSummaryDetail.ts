import Types, { ITypes, Static } from "../Types.js";
import AmountWithBreakdown, { TAmountWithBreakdown } from "./AmountWithBreakdown.js";

export type TAmountSummaryDetail = {
  breakdown?: TAmountWithBreakdown;
  currency_code?: string;
  value?: string;
};

class AmountSummaryDetail extends Types implements Static<ITypes, typeof AmountSummaryDetail> {
  breakdown?: AmountWithBreakdown;
  currencyCode?: string;
  value?: string;

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

  static fromObject(obj: TAmountSummaryDetail) {
    const amountSummaryDetail = new AmountSummaryDetail();
    if (obj.breakdown) amountSummaryDetail.setBreakdown(AmountWithBreakdown.fromObject(obj.breakdown));
    if (obj.currency_code) amountSummaryDetail.setCurrencyCode(obj.currency_code);
    if (obj.value) amountSummaryDetail.setValue(obj.value);
    return amountSummaryDetail;
  }
}

export default AmountSummaryDetail;
