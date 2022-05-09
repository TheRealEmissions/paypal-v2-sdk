const PayPalClass = require("../../PayPal");
const Discount = require("./Discount");
const Money = require("./Money");

class AggregatedDiscount {
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
