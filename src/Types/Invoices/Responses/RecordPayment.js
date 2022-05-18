const PayPalClass = require("../../../PayPal");
const Types = require("../../Types");

class RecordPaymentResponse extends Types {
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
   * @returns {RecordPaymentResponse}
   */
  setPaymentId(id) {
    this.paymentId = id;
    return this;
  }
}

module.exports = RecordPaymentResponse;
