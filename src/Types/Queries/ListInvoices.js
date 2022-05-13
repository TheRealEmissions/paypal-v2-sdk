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
   * @returns {ListInvoicesQuery}
   */
  setPage(page) {
    this.page = page;
    return this;
  }

  /**
   *
   * @param {Number} size
   * @returns {ListInvoicesQuery}
   */
  setPageSize(size) {
    this.pageSize = size;
    return this;
  }

  /**
   *
   * @param {Boolean} boolean
   * @returns {ListInvoicesQuery}
   */
  setTotalRequired(boolean) {
    this.totalRequired = boolean;
    return this;
  }

  /**
   *
   * @param {String} fields
   * @returns {ListInvoicesQuery}
   */
  setFields(fields) {
    this.fields = fields;
    return this;
  }
}

module.exports = ListInvoicesQuery;
