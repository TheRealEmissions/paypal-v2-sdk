const PayPalClass = require("../../PayPal");
const Types = require("../Types");
const AmountWithBreakdown = require("./AmountWithBreakdown");

class AmountSummaryDetail extends Types {
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
   * @returns {AmountSummaryDetail}
   */
  setCurrencyCode(code) {
    this.currencyCode = code;
    return this;
  }

  /**
   *
   * @param {String} value
   * @returns {AmountSummaryDetail}
   */
  setValue(value) {
    this.value = value;
    return this;
  }

  /**
   *
   * @param {AmountWithBreakdown} breakdown
   * @returns {AmountSummaryDetail}
   */
  setBreakdown(breakdown) {
    this.breakdown = breakdown;
    return this;
  }
}

module.exports = AmountSummaryDetail;
