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
