const PayPalClass = require("../../PayPal");
const Types = require("../Types");

class InvoicePaymentTerm extends Types {
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
   * @param {String} type
   * @returns {InvoicePaymentTerm}
   */
  setTermType(type) {
    this.termType = type;
    return this;
  }

  /**
   *
   * @param {String} date
   * @returns {InvoicePaymentTerm}
   */
  setDueDate(date) {
    this.dueDate = date;
    return this;
  }
}

module.exports = InvoicePaymentTerm;
