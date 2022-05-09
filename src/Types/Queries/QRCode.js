const PayPalClass = require("../../PayPal");

class QrCodeQuery {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
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
   * @param {Number} width
   * @returns {QrCodeQuery}
   */
  setWidth(width) {
    this.width = width;
    return this;
  }

  /**
   *
   * @param {Number} height
   * @returns
   */
  setHeight(height) {
    this.height = height;
    return this;
  }

  /**
   *
   * @param {String} type
   * @returns
   */
  setAction(type) {
    this.action = type;
    return this;
  }
}

module.exports = QrCodeQuery;
