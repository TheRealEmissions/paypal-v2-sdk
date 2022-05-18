const PayPalClass = require("../../PayPal");
const Money = require("../General/Money");
const Types = require("../Types");
const Tax = require("./Tax");

class ShippingCost extends Types {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal = null) {
    super();
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {Money} amount
   * @returns {ShippingCost}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   *
   * @param {Tax} tax
   * @returns {ShippingCost}
   */
  setTax(tax) {
    this.tax = tax;
    return this;
  }
}

module.exports = ShippingCost;
