const PayPalClass = require("../../PayPal");

class DeleteExternalPaymentQuery {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} id
   * @returns
   */
  setInvoiceId(id) {
    this.invoiceId = id;
    return this;
  }

  /**
   *
   * @param {String} id
   * @returns
   */
  setTransactionId(id) {
    this.transactionId = id;
    return this;
  }
}

module.exports = DeleteExternalPaymentQuery;
