const PayPalClass = require("../../PayPal");
const Types = require("../Types");
const Money = require("./Money");

class RefundDetail extends Types {
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
   * @returns {RefundDetail}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   *
   * @param {String} id
   * @returns {RefundDetail}
   */
  setRefundId(id) {
    this.refundId = id;
    return this;
  }

  /**
   *
   * @param {String} date
   * @returns {RefundDetail}
   */
  setRefundDate(date) {
    this.refundDate = date;
    return this;
  }

  /**
   *
   * @param {Money} amount
   * @returns {RefundDetail}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   *
   * @param {String} method
   * @returns {RefundDetail}
   */
  setMethod(method) {
    this.method = method;
    return this;
  }
}

module.exports = RefundDetail;
