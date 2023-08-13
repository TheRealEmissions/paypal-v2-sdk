import Types, { ITypes, Static } from "../Types.js";
import { AmountWithBreakdown, TAmountWithBreakdown } from "./AmountWithBreakdown.js";

export type TAmountSummaryDetail = {
  breakdown?: TAmountWithBreakdown;
  currency_code?: string;
  value?: string;
};

export class AmountSummaryDetail extends Types implements Static<ITypes, typeof AmountSummaryDetail> {
  breakdown?: AmountWithBreakdown;
  currencyCode?: string;
  value?: string;

  setBreakdown(breakdown: AmountWithBreakdown): this;
  setBreakdown(breakdown: (breakdown: AmountWithBreakdown) => void): this;
  setBreakdown(breakdown: AmountWithBreakdown | ((breakdown: AmountWithBreakdown) => void)): this {
    if (breakdown instanceof AmountWithBreakdown) {
      this.breakdown = breakdown;
    } else {
      const breakdownInstance = new AmountWithBreakdown();
      breakdown(breakdownInstance);
      this.breakdown = breakdownInstance;
    }
    return this;
  }

  setCurrencyCode(currencyCode: string) {
    this.currencyCode = currencyCode;
    return this;
  }

  setValue(value: string) {
    const regex = new RegExp(/^((-?\d+)|(-?(\d+)?[.]\d+))$/);
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
