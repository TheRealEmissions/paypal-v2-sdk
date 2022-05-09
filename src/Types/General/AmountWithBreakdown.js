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
