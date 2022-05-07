const PayPalClass = require("../../PayPal");

class PhoneDetail {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
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
