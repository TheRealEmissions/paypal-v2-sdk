const PayPalClass = require("../../PayPal");

class DeleteExternalPaymentQuery {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
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
