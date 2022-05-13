const PayPalClass = require("../../PayPal");
const Money = require("./Money");

class AmountRange {
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
   * @param {Money} amount
   * @returns {AmountRange}
   */
  setLowerAmount(amount) {
    this.lowerAmount = amount;
    return this;
  }

  /**
   *
   * @param {Money} amount
   * @returns {AmountRange}
   */
  setUpperAmount(amount) {
    this.upperAmount = amount;
    return this;
  }
}

module.exports = AmountRange;
