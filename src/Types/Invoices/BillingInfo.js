const PayPalClass = require("../../PayPal");
const Types = require("../Types");

const PhoneDetail = require("./PhoneDetail");

class BillingInfo extends Types {
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
   * @param {String} email
   * @returns {BillingInfo}
   */
  setEmailAddress(email) {
    this.email = email;
    return this;
  }

  /**
   *
   * @param {Array<PhoneDetail>} phones
   * @returns {BillingInfo}
   */
  setPhones(phones) {
    this.phones = phones;
    return this;
  }

  /**
   *
   * @param {String} str
   * @returns {BillingInfo}
   */
  setAdditionalInfo(str) {
    this.additionalInfo = str;
    return this;
  }

  /**
   *
   * @param {String} lang
   * @returns {BillingInfo}
   */
  setLanguage(lang) {
    this.language = lang;
    return this;
  }
}

module.exports = BillingInfo;
