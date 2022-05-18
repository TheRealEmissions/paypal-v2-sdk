const PayPalClass = require("../../PayPal");
const Types = require("../Types");
const Discount = require("./Discount");
const Money = require("./Money");

class AggregatedDiscount extends Types {
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
   * @param {Discount} invoiceDiscount
   * @returns {AggregatedDiscount}
   */
  setInvoiceDiscount(invoiceDiscount) {
    this.invoiceDiscount = invoiceDiscount;
    return this;
  }

  /**
   *
   * @param {Money} itemDiscount
   * @returns {AggregatedDiscount}
   */
  setItemDiscount(itemDiscount) {
    this.itemDiscount = itemDiscount;
    return this;
  }
}

module.exports = AggregatedDiscount;
