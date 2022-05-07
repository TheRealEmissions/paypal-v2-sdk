const PayPalClass = require("../../PayPal");
const Money = require("./Money");
const RefundDetail = require("./RefundDetail");

class Refunds {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {Money} amount
   * @returns
   */
  setRefundAmount(amount) {
    this.refundAmount = amount;
    return this;
  }

  /**
   *
   * @param {Array<RefundDetail>} transactions
   * @returns
   */
  setTransactions(transactions) {
    this.transactions = transactions;
    return this;
  }
}

module.exports = Refunds;
