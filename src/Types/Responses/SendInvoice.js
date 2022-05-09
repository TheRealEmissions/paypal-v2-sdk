const PayPalClass = require("../../PayPal");
const LinkDescription = require("../General/LinkDescription");

class SendInvoiceResponse {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {Array<LinkDescription>} links
   */
  setLinks(links) {
    this.links = links;
  }
}

module.exports = SendInvoiceResponse;
