const PayPalClass = require("../../PayPal");

class Field {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} name
   * @returns {Field}
   */
  setField(name) {
    this.field = name;
    return this;
  }
}

module.exports = Field;
