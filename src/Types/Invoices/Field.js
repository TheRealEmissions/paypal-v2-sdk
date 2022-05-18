const PayPalClass = require("../../PayPal");
const Types = require("../Types");

class Field extends Types {
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
   * @param {String} name
   * @returns {Field}
   */
  setField(name) {
    this.field = name;
    return this;
  }
}

module.exports = Field;
