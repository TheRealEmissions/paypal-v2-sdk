const PayPalClass = require("../../PayPal");

const PhoneDetail = require("../General/PhoneDetail");

class BillingInfo {
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
