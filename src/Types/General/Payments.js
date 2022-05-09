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
