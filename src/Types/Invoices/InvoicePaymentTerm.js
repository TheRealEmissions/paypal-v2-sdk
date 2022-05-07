const PayPalClass = require("../../PayPal");

class InvoicePaymentTerm {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} type
   */
  setTermType(type) {
    this.termType = type;
    return this;
  }

  /**
   *
   * @param {Date|String} date
   * @returns
   */
  setDueDate(date) {
    this.dueDate = date instanceof Date ? date : new Date(date);
    return this;
  }
}

module.exports = InvoicePaymentTerm;
