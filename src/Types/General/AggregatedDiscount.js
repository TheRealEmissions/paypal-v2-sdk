const PayPalClass = require("../../PayPal");
const Discount = require("./Discount");
const Money = require("./Money");

class AggregatedDiscount {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {Discount} invoiceDiscount
   * @returns
   */
  setInvoiceDiscount(invoiceDiscount) {
    this.invoiceDiscount = invoiceDiscount;
    return this;
  }

  /**
   *
   * @param {Money} itemDiscount
   * @returns
   */
  setItemDiscount(itemDiscount) {
    this.itemDiscount = itemDiscount;
    return this;
  }
}

module.exports = AggregatedDiscount;
