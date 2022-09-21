import Types from "../Types";

export type TMoney = {
  currency_code: string;
  value: string;
};

class Money extends Types {
  currencyCode?: string;
  value?: string;
  constructor() {
    super();
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

  override fromObject(obj: TMoney) {
    this.currencyCode = obj.currency_code;
    this.value = obj.value;
    return this;
  }
}

export default Money;
