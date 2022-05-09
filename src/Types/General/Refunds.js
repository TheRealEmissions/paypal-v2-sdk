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

  toJson() {
    return JSON.stringify(this.toAttributeObject());
  }

  toAttributeObject() {
    const obj = {};
    for (const entry of Object.keys(this)) {
      obj[entry.replace(/[A-Z]/g, (x) => `_${x.toLowerCase()}`)] =
        this[entry] instanceof Object
          ? this[entry].toAttributeObject()
          : this[entry];
    }
    return obj;
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
