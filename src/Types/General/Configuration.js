const PayPalClass = require("../../PayPal");
const PartialPayment = require("./PartialPayment");

class Configuration {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
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
   * @param {Boolean} boolean
   * @returns
   */
  setTaxCalculatedAfterDiscount(boolean) {
    this.taxCalculatedAfterDiscount = boolean;
    return this;
  }

  /**
   *
   * @param {Boolean} boolean
   * @returns
   */
  setTaxInclusive(boolean) {
    this.taxInclusive = boolean;
    return this;
  }

  /**
   *
   * @param {Boolean} boolean
   * @returns
   */
  setAllowTip(boolean) {
    this.allowTip = boolean;
    return this;
  }

  /**
   *
   * @param {PartialPayment} partialPayment
   * @returns
   */
  setPartialPayment(partialPayment) {
    this.partialPayment = partialPayment;
    return this;
  }

  /**
   *
   * @param {String} id
   * @returns
   */
  setTemplateId(id) {
    this.templateId = id;
    return this;
  }
}

module.exports = Configuration;
