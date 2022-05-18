const PayPalClass = require("../../../PayPal");
const Types = require("../../Types");

class ListInvoicesQuery extends Types {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    super();
    this.PayPal = PayPal;
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
