const PayPalClass = require("../../PayPal");
const LinkDescription = require("../General/LinkDescription");
const Invoice = require("../Invoices/Invoice");

class ListInvoicesResponse {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {Number} num
   * @returns
   */
  setTotalPages(num) {
    this.totalPages = num;
    return this;
  }

  setTotalItems(num) {
    this.totalItems = num;
    return this;
  }

  /**
   *
   * @param {Array<Invoice>} items
   * @returns
   */
  setItems(items) {
    this.items = items;
    return this;
  }

  /**
   *
   * @param {LinkDescription} links
   * @returns
   */
  setLinks(links) {
    this.links = links;
    return this;
  }
}

module.exports = ListInvoicesResponse;
