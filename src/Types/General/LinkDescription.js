const PayPalClass = require("../../PayPal");

class LinkDescription {
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
