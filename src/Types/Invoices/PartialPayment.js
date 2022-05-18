const PayPalClass = require("../../PayPal");
const Types = require("../Types");
const Money = require("./Money");

class PartialPayment extends Types {
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
   * @param {Boolean} boolean
   * @returns {PartialPayment}
   */
  setAllowPartialPayment(boolean) {
    this.allowPartialPayment = boolean;
    return this;
  }

  /**
   *
   * @param {Money} minAmountDue
   * @returns {PartialPayment}
   */
  setMinimumAmountDue(minAmountDue) {
    this.minimumAmountDue = minAmountDue;
    return this;
  }
}

module.exports = PartialPayment;
