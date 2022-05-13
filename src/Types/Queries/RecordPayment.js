const PayPalClass = require("../../PayPal");
const ContactInfo = require("../General/ContactInfo");
const Money = require("../General/Money");

class RecordPaymentQuery {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
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
