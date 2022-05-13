const PayPalClass = require("../../PayPal");

class RecordPaymentResponse {
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
   * @returns {RecordPaymentResponse}
   */
  setPaymentId(id) {
    this.paymentId = id;
    return this;
  }
}

module.exports = RecordPaymentResponse;
