const PayPalClass = require("../../PayPal");
const ContactInfo = require("./ContactInfo");
const Money = require("./Money");

class PaymentDetail {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} type
   * @returns
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   *
   * @param {String} paymentId
   * @returns
   */
  setPaymentId(paymentId) {
    this.paymentId = paymentId;
    return this;
  }

  /**
   *
   * @param {Date|String} date
   * @returns
   */
  setPaymentDate(date) {
    this.paymentDate = date instanceof Date ? date : new Date(date);
    return this;
  }

  /**
   *
   * @param {String} method
   * @returns
   */
  setMethod(method) {
    this.method = method;
    return this;
  }

  /**
   *
   * @param {String} note
   * @returns
   */
  setNote(note) {
    this.note = note;
    return this;
  }

  /**
   *
   * @param {Money} amount
   * @returns
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   *
   * @param {ContactInfo} shippingInfo
   * @returns
   */
  setShippingInfo(shippingInfo) {
    this.shippingInfo = shippingInfo;
    return this;
  }
}

module.exports = PaymentDetail;
