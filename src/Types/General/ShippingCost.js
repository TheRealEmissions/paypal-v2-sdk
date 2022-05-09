const PayPalClass = require("../../PayPal");
const Money = require("./Money");
const Tax = require("./Tax");

class ShippingCost {
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
          ? this[entry].toAttributeObject()
          : this[entry];
    }
    return obj;
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
   * @param {Tax} tax
   * @returns
   */
  setTax(tax) {
    this.tax = tax;
    return this;
  }
}

module.exports = ShippingCost;
