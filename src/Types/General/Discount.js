const PayPalClass = require("../../PayPal");

const Money = require("./Money");

class Discount {
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
   * @param {String} percent
   * @returns
   */
  setPercent(percent) {
    this.percent = percent;
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
}

module.exports = Discount;
