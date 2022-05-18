const PayPalClass = require("../../PayPal");
const Types = require("../Types");
const Money = require("./Money");

class CustomAmount extends Types {
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
   * @param {String} label
   * @returns {CustomAmount}
   */
  setLabel(label) {
    this.label = label;
    return this;
  }

  /**
   *
   * @param {Money} amount
   * @returns {CustomAmount}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }
}

module.exports = CustomAmount;
