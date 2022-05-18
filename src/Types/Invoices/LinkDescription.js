const PayPalClass = require("../../PayPal");
const Types = require("../Types");

class LinkDescription extends Types {
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
   * @param {String} url
   * @returns {LinkDescription}
   */
  setHref(url) {
    this.href = url;
    return this;
  }

  /**
   *
   * @param {String} rel
   * @returns {LinkDescription}
   */
  setRel(rel) {
    this.rel = rel;
    return this;
  }

  /**
   *
   * @param {String} method
   * @returns {LinkDescription}
   */
  setMethod(method) {
    this.method = method;
    return this;
  }
}

module.exports = LinkDescription;
