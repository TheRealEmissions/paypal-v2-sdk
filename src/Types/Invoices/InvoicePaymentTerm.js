const PayPalClass = require("../../PayPal");

class InvoicePaymentTerm {
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
   */
  setTermType(type) {
    this.termType = type;
    return this;
  }

  /**
   *
   * @param {Date|String} date
   * @returns
   */
  setDueDate(date) {
    this.dueDate = date instanceof Date ? date : new Date(date);
    return this;
  }
}

module.exports = InvoicePaymentTerm;
