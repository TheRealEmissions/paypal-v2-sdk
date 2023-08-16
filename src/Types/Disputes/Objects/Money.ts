import { Utility, IUtility, Static } from "../../Utility.js";

export type TMoney = {
  currency_code: string;
  value: string;
};

export class Money extends Utility implements Static<IUtility, typeof Money> {
  private currencyCode?: string;
  private value?: string;

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

  public override getFields<T extends Partial<TMoney>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TMoney) {
    const money = new Money();
    if (obj.currency_code) money.setCurrencyCode(obj.currency_code);
    if (obj.value) money.setValue(obj.value);
    return money;
  }
}
