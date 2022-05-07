const PayPalClass = require("../../PayPal");

const PhoneDetail = require("../General/PhoneDetail");

class BillingInfo {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} email
   * @returns
   */
  setEmailAddress(email) {
    this.email = email;
    return this;
  }

  /**
   *
   * @param {Array<PhoneDetail>} phones
   * @returns
   */
  setPhones(phones) {
    this.phones = phones;
    return this;
  }

  /**
   *
   * @param {String} str
   * @returns
   */
  setAdditionalInfo(str) {
    this.additionalInfo = str;
    return this;
  }

  /**
   *
   * @param {String} lang
   * @returns
   */
  setLanguage(lang) {
    this.language = lang;
    return this;
  }
}

module.exports = BillingInfo;
