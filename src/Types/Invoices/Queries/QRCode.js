const PayPalClass = require("../../../PayPal");
const Types = require("../../Types");

class QrCodeQuery extends Types {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    super();
    this.PayPal = PayPal;
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
   * @returns {QrCodeQuery}
   */
  setHeight(height) {
    this.height = height;
    return this;
  }

  /**
   *
   * @param {String} type
   * @returns {QrCodeQuery}
   */
  setAction(type) {
    this.action = type;
    return this;
  }
}

module.exports = QrCodeQuery;
