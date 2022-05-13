const PayPalClass = require("../../PayPal");
const PartialPayment = require("./PartialPayment");

class Configuration {
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
   * @param {Boolean} boolean
   * @returns {Configuration}
   */
  setTaxCalculatedAfterDiscount(boolean) {
    this.taxCalculatedAfterDiscount = boolean;
    return this;
  }

  /**
   *
   * @param {Boolean} boolean
   * @returns {Configuration}
   */
  setTaxInclusive(boolean) {
    this.taxInclusive = boolean;
    return this;
  }

  /**
   *
   * @param {Boolean} boolean
   * @returns {Configuration}
   */
  setAllowTip(boolean) {
    this.allowTip = boolean;
    return this;
  }

  /**
   *
   * @param {PartialPayment} partialPayment
   * @returns {Configuration}
   */
  setPartialPayment(partialPayment) {
    this.partialPayment = partialPayment;
    return this;
  }

  /**
   *
   * @param {String} id
   * @returns {Configuration}
   */
  setTemplateId(id) {
    this.templateId = id;
    return this;
  }
}

module.exports = Configuration;
