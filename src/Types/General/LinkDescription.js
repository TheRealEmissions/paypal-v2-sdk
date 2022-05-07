const PayPalClass = require("../../PayPal");

class LinkDescription {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} url
   * @returns
   */
  setHref(url) {
    this.href = url;
    return this;
  }

  /**
   *
   * @param {String} rel
   * @returns
   */
  setRel(rel) {
    this.rel = rel;
    return this;
  }

  /**
   *
   * @param {String} method
   * @returns
   */
  setMethod(method) {
    this.method = method;
    return this;
  }
}

module.exports = LinkDescription;
