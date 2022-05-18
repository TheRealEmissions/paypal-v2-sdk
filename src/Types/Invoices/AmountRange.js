const PayPalClass = require("../../PayPal");
const Types = require("../Types");
const Money = require("./Money");

class AmountRange extends Types {
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
   * @param {Money} amount
   * @returns {AmountRange}
   */
  setLowerAmount(amount) {
    this.lowerAmount = amount;
    return this;
  }

  /**
   *
   * @param {Money} amount
   * @returns {AmountRange}
   */
  setUpperAmount(amount) {
    this.upperAmount = amount;
    return this;
  }
}

module.exports = AmountRange;
