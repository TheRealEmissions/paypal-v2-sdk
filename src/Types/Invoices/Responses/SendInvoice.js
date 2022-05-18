const PayPalClass = require("../../../PayPal");
const Types = require("../../Types");
const LinkDescription = require("../LinkDescription");

class SendInvoiceResponse extends Types {
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
   * @param {Array<LinkDescription>} links
   * @returns {SendInvoiceResponse}
   */
  setLinks(links) {
    this.links = links;
    return this;
  }
}

module.exports = SendInvoiceResponse;
