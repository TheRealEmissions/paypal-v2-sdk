import Types, { ITypes, Static } from "../Types.js";

export type TMoney = {
  currency_code: string;
  value: string;
};

export class Money extends Types implements Static<ITypes, typeof Money> {
  currencyCode?: string;
  value?: string;

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

  static fromObject(obj: TMoney) {
    const money = new Money();
    if (obj.currency_code) money.setCurrencyCode(obj.currency_code);
    if (obj.value) money.setValue(obj.value);
    return money;
  }
}
