const PayPalClass = require("../../PayPal");

class Money {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} code
   * @returns
   */
  setCurrencyCode(code) {
    this.currencyCode = code;
    return this;
  }

  /**
   *
   * @param {String} amount
   * @returns
   */
  setValue(amount) {
    this.value = amount;
    return this;
  }
}

module.exports = Money;
