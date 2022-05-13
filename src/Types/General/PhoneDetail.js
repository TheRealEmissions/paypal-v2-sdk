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
          ? this[entry] instanceof Array
            ? this[entry].map((x) =>
                x instanceof Object ? x.toAttributeObject() : x
              )
            : this[entry].toAttributeObject()
          : this[entry];
    }
    return obj;
  }

  /**
   *
   * @param {String} code
   * @returns {PhoneDetail}
   */
  setCountryCode(code) {
    this.countryCode = code;
    return this;
  }

  /**
   *
   * @param {String} number
   * @returns {PhoneDetail}
   */
  setNationalNumber(number) {
    this.nationalNumber = number;
    return this;
  }

  /**
   *
   * @param {String} number
   * @returns {PhoneDetail}
   */
  setExtensionNumber(number) {
    this.extensionNumber = number;
    return this;
  }

  /**
   *
   * @param {String} type
   * @returns {PhoneDetail}
   */
  setPhoneType(type) {
    this.phoneType = type;
    return this;
  }
}

module.exports = PhoneDetail;
