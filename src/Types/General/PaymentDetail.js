const PayPalClass = require("../../PayPal");
const ContactInfo = require("./ContactInfo");
const Money = require("./Money");

class PaymentDetail {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal = null) {
    this.PayPal = PayPal;
  }

  toJson() {
    return JSON.stringify(this.toAttributeObject());
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
   * @param {String} type
   * @returns {PaymentDetail}
   */
  setType(type) {
    this.type = type;
    return this;
  }

  /**
   *
   * @param {String} paymentId
   * @returns {PaymentDetail}
   */
  setPaymentId(paymentId) {
    this.paymentId = paymentId;
    return this;
  }

  /**
   *
   * @param {String} date
   * @returns {PaymentDetail}
   */
  setPaymentDate(date) {
    this.paymentDate = date;
    return this;
  }

  /**
   *
   * @param {String} method
   * @returns {PaymentDetail}
   */
  setMethod(method) {
    this.method = method;
    return this;
  }

  /**
   *
   * @param {String} note
   * @returns {PaymentDetail}
   */
  setNote(note) {
    this.note = note;
    return this;
  }

  /**
   *
   * @param {Money} amount
   * @returns {PaymentDetail}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   *
   * @param {ContactInfo} shippingInfo
   * @returns {PaymentDetail}
   */
  setShippingInfo(shippingInfo) {
    this.shippingInfo = shippingInfo;
    return this;
  }
}

module.exports = PaymentDetail;
