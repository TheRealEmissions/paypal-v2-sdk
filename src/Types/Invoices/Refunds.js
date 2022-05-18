const PayPalClass = require("../../PayPal");
const Types = require("../Types");
const Money = require("./Money");
const RefundDetail = require("./RefundDetail");

class Refunds extends Types {
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
   * @param {Money} amount
   * @returns {Refunds}
   */
  setRefundAmount(amount) {
    this.refundAmount = amount;
    return this;
  }

  /**
   *
   * @param {Array<RefundDetail>} transactions
   * @returns {Refunds}
   */
  setTransactions(transactions) {
    this.transactions = transactions;
    return this;
  }
}

module.exports = Refunds;
