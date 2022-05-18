const PayPalClass = require("../../../PayPal");
const Types = require("../../Types");

class DeleteExternalPaymentQuery extends Types {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    super();
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} id
   * @returns {DeleteExternalPaymentQuery}
   */
  setInvoiceId(id) {
    this.invoiceId = id;
    return this;
  }

  /**
   *
   * @param {String} id
   * @returns {DeleteExternalPaymentQuery}
   */
  setTransactionId(id) {
    this.transactionId = id;
    return this;
  }
}

module.exports = DeleteExternalPaymentQuery;
