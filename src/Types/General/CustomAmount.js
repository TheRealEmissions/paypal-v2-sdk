const PayPalClass = require("../../PayPal");
const Money = require("./Money");

class CustomAmount {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} label
   * @returns
   */
  setLabel(label) {
    this.label = label;
    return this;
  }

  /**
   *
   * @param {Money} amount
   * @returns
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }
}

module.exports = CustomAmount;
