const PayPalClass = require("../../PayPal");

class ListInvoicesQuery {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
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
   * @param {Number} page
   * @returns
   */
  setPage(page) {
    this.page = page;
    return this;
  }

  /**
   *
   * @param {Number} size
   * @returns
   */
  setPageSize(size) {
    this.pageSize = size;
    return this;
  }

  /**
   *
   * @param {Boolean} boolean
   * @returns
   */
  setTotalRequired(boolean) {
    this.totalRequired = boolean;
    return this;
  }

  /**
   *
   * @param {String} fields
   * @returns
   */
  setFields(fields) {
    this.fields = fields;
    return this;
  }
}

module.exports = ListInvoicesQuery;
