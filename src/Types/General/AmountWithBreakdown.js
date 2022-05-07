const PayPalClass = require("../../PayPal");
const AggregatedDiscount = require("./AggregatedDiscount");
const CustomAmount = require("./CustomAmount");
const Money = require("./Money");
const ShippingCost = require("./ShippingCost");

class AmountWithBreakdown {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {Money} itemTotal
   * @returns
   */
  setItemTotal(itemTotal) {
    this.itemTotal = itemTotal;
    return this;
  }

  /**
   *
   * @param {AggregatedDiscount} discount
   * @returns
   */
  setDiscount(discount) {
    this.discount = discount;
    return this;
  }

  /**
   *
   * @param {Money} tax
   * @returns
   */
  setTaxTotal(tax) {
    this.taxTotal = tax;
    return this;
  }

  /**
   *
   * @param {ShippingCost} shipping
   * @returns
   */
  setShipping(shipping) {
    this.shipping = shipping;
    return this;
  }

  /**
   *
   * @param {CustomAmount} custom
   * @returns
   */
  setCustom(custom) {
    this.custom = custom;
    return this;
  }
}

module.exports = AmountWithBreakdown;
