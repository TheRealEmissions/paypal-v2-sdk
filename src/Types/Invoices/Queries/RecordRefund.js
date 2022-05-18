const PayPalClass = require("../../../PayPal");
const Types = require("../../Types");
const Money = require("../Money");

class RecordRefundQuery extends Types {
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
   * @param {String} type
   * @returns {RecordRefundQuery}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   *
   * @param {String} id
   * @returns {RecordRefundQuery}
   */
  setRefundId(id) {
    this.refundId = id;
    return this;
  }

  /**
   *
   * @param {String} date
   * @returns {RecordRefundQuery}
   */
  setRefundDate(date) {
    this.refundDate = date;
    return this;
  }

  /**
   *
   * @param {Money} amount
   * @returns {RecordRefundQuery}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   *
   * @param {String} string
   * @returns {RecordRefundQuery}
   */
  setMethod(string) {
    this.method = string;
    return this;
  }
}

module.exports = RecordRefundQuery;
