const PayPalClass = require("../../../PayPal");
const LinkDescription = require("../LinkDescription");
const Invoice = require("../Invoice");
const Types = require("../../Types");

class ListInvoicesResponse extends Types {
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
   * @param {Number} num
   * @returns {ListInvoicesResponse}
   */
  setTotalPages(num) {
    this.totalPages = num;
    return this;
  }

  /**
   *
   * @param {Number} num
   * @returns {ListInvoicesResponse}
   */
  setTotalItems(num) {
    this.totalItems = num;
    return this;
  }

  /**
   *
   * @param {Array<Invoice>} items
   * @returns {ListInvoicesResponse}
   */
  setItems(items) {
    this.items = items;
    return this;
  }

  /**
   *
   * @param {LinkDescription} links
   * @returns {ListInvoicesResponse}
   */
  setLinks(links) {
    this.links = links;
    return this;
  }
}

module.exports = ListInvoicesResponse;
