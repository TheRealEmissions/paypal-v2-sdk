const PayPalClass = require("../../../PayPal");
const Types = require("../../Types");

class RecordRefundResponse extends Types {
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
   * @returns {RecordRefundResponse}
   */
  setRefundId(id) {
    this.refundId = id;
    return this;
  }
}

module.exports = RecordRefundResponse;
