const PayPalClass = require("../../PayPal");
const Types = require("../Types");

class PhoneDetail extends Types {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal = null) {
    super();
    this.PayPal = PayPal;
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
