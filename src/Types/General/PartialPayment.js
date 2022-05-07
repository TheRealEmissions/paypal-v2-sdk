const PayPalClass = require("../../PayPal");
const Money = require("./Money");

class PartialPayment {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {Boolean} boolean
   * @returns
   */
  setAllowPartialPayment(boolean) {
    this.allowPartialPayment = boolean;
    return this;
  }

  /**
   *
   * @param {Money} minAmountDue
   * @returns
   */
  setMinimumAmountDue(minAmountDue) {
    this.minimumAmountDue = minAmountDue;
    return this;
  }
}

module.exports = PartialPayment;
