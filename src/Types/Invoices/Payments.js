const PayPalClass = require("../../PayPal");
const Types = require("../Types");
const Money = require("./Money");
const PaymentDetail = require("./PaymentDetail");

class Payments extends Types {
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
   * @returns {Payments}
   */
  setPaidAmount(amount) {
    this.paidAmount = amount;
    return this;
  }

  /**
   *
   * @param {Array<PaymentDetail>} transactions
   * @returns {Payments}
   */
  setTransactions(transactions) {
    this.transactions = transactions;
    return this;
  }
}

module.exports = Payments;
