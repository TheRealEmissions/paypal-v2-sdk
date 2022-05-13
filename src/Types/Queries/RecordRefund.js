const PayPalClass = require("../../PayPal");
const Money = require("../General/Money");

class RecordRefundQuery {
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
