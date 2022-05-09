const PayPalClass = require("../../PayPal");

class DateRange {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
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
   * @param {String} start
   * @returns
   */
  setStart(start) {
    this.start = start;
    return this;
  }

  /**
   *
   * @param {String} end
   * @returns
   */
  setEnd(end) {
    this.end = end;
    return this;
  }
}

module.exports = DateRange;
