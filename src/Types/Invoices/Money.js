const PayPalClass = require("../../PayPal");
const Types = require("../Types");

class Money extends Types {
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
   * @param {String} code
   * @returns {Money}
   */
  setCurrencyCode(code) {
    this.currencyCode = code;
    return this;
  }

  /**
   *
   * @param {String} amount
   * @returns {Money}
   */
  setValue(amount) {
    this.value = amount;
    return this;
  }
}

module.exports = Money;
