const PayPalClass = require("../../PayPal");

class RecordRefundResponse {
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
   * @returns {RecordRefundResponse}
   */
  setRefundId(id) {
    this.refundId = id;
    return this;
  }
}

module.exports = RecordRefundResponse;
