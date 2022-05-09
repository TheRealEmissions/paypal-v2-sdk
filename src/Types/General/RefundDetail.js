const PayPalClass = require("../../PayPal");
const Money = require("./Money");

class RefundDetail {
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
          ? this[entry].toAttributeObject()
          : this[entry];
    }
    return obj;
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
   * @param {String} id
   * @returns
   */
  setRefundId(id) {
    this.refundId = id;
    return this;
  }

  /**
   *
   * @param {Date|String} date
   * @returns
   */
  setRefundDate(date) {
    this.refundDate = date instanceof Date ? date : new Date(date);
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
   * @param {String} method
   * @returns
   */
  setMethod(method) {
    this.method = method;
    return this;
  }
}

module.exports = RefundDetail;
