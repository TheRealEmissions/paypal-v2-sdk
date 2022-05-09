const PayPalClass = require("../../PayPal");

class PhoneDetail {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal = null) {
    this.PayPal = PayPal;
  }

  toJson() {
    return JSON.stringify(this.toAttributeObject());
  }

  toAttributeObject() {
    const obj = {};
    for (const entry of Object.keys(this)) {
      obj[entry.replace(/[A-Z]/g, (x) => `_${x.toLowerCase()}`)] =
        this[entry] instanceof Object
          ? this[entry].toAttributeObject()
          : this[entry];
    }
    return obj;
  }

  /**
   *
   * @param {String} code
   * @returns
   */
  setCountryCode(code) {
    this.countryCode = code;
    return this;
  }

  /**
   *
   * @param {String} number
   * @returns
   */
  setNationalNumber(number) {
    this.nationalNumber = number;
    return this;
  }

  /**
   *
   * @param {String} number
   * @returns
   */
  setExtensionNumber(number) {
    this.extensionNumber = number;
    return this;
  }

  /**
   *
   * @param {String} type
   * @returns
   */
  setPhoneType(type) {
    this.phoneType = type;
    return this;
  }
}

module.exports = PhoneDetail;
