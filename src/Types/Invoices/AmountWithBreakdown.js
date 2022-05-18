const PayPalClass = require("../../PayPal");
const Types = require("../Types");
const AggregatedDiscount = require("./AggregatedDiscount");
const CustomAmount = require("./CustomAmount");
const Money = require("./Money");
const ShippingCost = require("./ShippingCost");

class AmountWithBreakdown extends Types {
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
   * @param {Money} itemTotal
   * @returns {AmountWithBreakdown}
   */
  setItemTotal(itemTotal) {
    this.itemTotal = itemTotal;
    return this;
  }

  /**
   *
   * @param {AggregatedDiscount} discount
   * @returns {AmountWithBreakdown}
   */
  setDiscount(discount) {
    this.discount = discount;
    return this;
  }

  /**
   *
   * @param {Money} tax
   * @returns {AmountWithBreakdown}
   */
  setTaxTotal(tax) {
    this.taxTotal = tax;
    return this;
  }

  /**
   *
   * @param {ShippingCost} shipping
   * @returns {AmountWithBreakdown}
   */
  setShipping(shipping) {
    this.shipping = shipping;
    return this;
  }

  /**
   *
   * @param {CustomAmount} custom
   * @returns {AmountWithBreakdown}
   */
  setCustom(custom) {
    this.custom = custom;
    return this;
  }
}

module.exports = AmountWithBreakdown;
