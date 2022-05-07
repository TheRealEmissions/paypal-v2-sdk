const PayPalClass = require("../../PayPal");
const Money = require("./Money");
const PaymentDetail = require("./PaymentDetail");

class Payments {
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
  setPaidAmount(amount) {
    this.paidAmount = amount;
    return this;
  }

  /**
   *
   * @param {Array<PaymentDetail>} transactions
   * @returns
   */
  setTransactions(transactions) {
    this.transactions = transactions;
    return this;
  }
}

module.exports = Payments;
