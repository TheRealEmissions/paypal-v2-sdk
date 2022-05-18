const PayPalClass = require("../../PayPal");
const Types = require("../Types");
const PartialPayment = require("./PartialPayment");

class Configuration extends Types {
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
