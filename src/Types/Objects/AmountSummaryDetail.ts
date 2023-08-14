import { Utility, IUtility, Static } from "../Utility.js";
import { AmountWithBreakdown, TAmountWithBreakdown } from "./AmountWithBreakdown.js";

export type TAmountSummaryDetail = {
  breakdown?: TAmountWithBreakdown;
  currency_code?: string;
  value?: string;
};

export class AmountSummaryDetail extends Utility implements Static<IUtility, typeof AmountSummaryDetail> {
  private breakdown?: AmountWithBreakdown;
  private currencyCode?: string;
  private value?: string;

  public setBreakdown(breakdown: AmountWithBreakdown): this;
  public setBreakdown(breakdown: (breakdown: AmountWithBreakdown) => void): this;
  public setBreakdown(breakdown: AmountWithBreakdown | ((breakdown: AmountWithBreakdown) => void)): this {
    if (breakdown instanceof AmountWithBreakdown) {
      this.breakdown = breakdown;
    } else {
      const breakdownInstance = new AmountWithBreakdown();
      breakdown(breakdownInstance);
      this.breakdown = breakdownInstance;
    }
    return this;
  }
  public getBreakdown() {
    return this.breakdown;
  }

  public setCurrencyCode(currencyCode: string) {
    this.currencyCode = currencyCode;
    return this;
  }
  public getCurrencyCode() {
    return this.currencyCode;
  }

  public setValue(value: string) {
    const regex = new RegExp(/^((-?\d+)|(-?(\d+)?[.]\d+))$/);
    if (!regex.test(value)) {
      throw new Error("Invalid value");
    }

    this.value = value;
    return this;
  }
  public getValue() {
    return this.value;
  }

  public override getFields<T extends Partial<TAmountSummaryDetail>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TAmountSummaryDetail) {
    const amountSummaryDetail = new AmountSummaryDetail();
    if (obj.breakdown) amountSummaryDetail.setBreakdown(AmountWithBreakdown.fromObject(obj.breakdown));
    if (obj.currency_code) amountSummaryDetail.setCurrencyCode(obj.currency_code);
    if (obj.value) amountSummaryDetail.setValue(obj.value);
    return amountSummaryDetail;
  }
}
