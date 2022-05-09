const PayPalClass = require("../../PayPal");

class RecordRefundResponse {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  setRefundId(id) {
    this.refundId = id;
    return this;
  }
}

module.exports = RecordRefundResponse;
