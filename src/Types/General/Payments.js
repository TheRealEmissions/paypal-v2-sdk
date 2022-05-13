const PayPalClass = require("../../PayPal");
const Money = require("./Money");
const PaymentDetail = require("./PaymentDetail");

class Payments {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal = null) {
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
          ? this[entry] instanceof Array
            ? this[entry].map((x) =>
                x instanceof Object ? x.toAttributeObject() : x
              )
            : this[entry].toAttributeObject()
          : this[entry];
    }
    return obj;
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
