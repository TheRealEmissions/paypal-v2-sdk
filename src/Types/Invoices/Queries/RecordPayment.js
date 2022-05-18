const PayPalClass = require("../../../PayPal");
const Types = require("../../Types");
const ContactInfo = require("../ContactInfo");
const Money = require("../Money");

class RecordPaymentQuery extends Types {
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
   * @returns {RecordPaymentQuery}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   *
   * @param {String} id
   * @returns {RecordPaymentQuery}
   */
  setPaymentId(id) {
    this.paymentId = id;
    return this;
  }

  /**
   *
   * @param {String} date
   * @returns {RecordPaymentQuery}
   */
  setPaymentDate(date) {
    this.paymentDate = date;
    return this;
  }

  /**
   *
   * @param {String} method
   * @returns {RecordPaymentQuery}
   */
  setMethod(method) {
    this.method = method;
    return this;
  }

  /**
   *
   * @param {String} note
   * @returns {RecordPaymentQuery}
   */
  setNote(note) {
    this.note = note;
    return this;
  }

  /**
   *
   * @param {Money} amount
   * @returns {RecordPaymentQuery}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   *
   * @param {ContactInfo} info
   * @returns {RecordPaymentQuery}
   */
  setShippingInfo(info) {
    this.shippingInfo = info;
    return this;
  }
}

module.exports = RecordPaymentQuery;
