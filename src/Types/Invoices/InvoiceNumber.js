const PayPalClass = require("../../PayPal");
const InvoiceNumberAPI = require("../../API/Invoices/InvoiceNumber");

class InvoiceNumber extends InvoiceNumberAPI {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    super(PayPal.token);
    this.PayPal = PayPal;
  }

  async generate() {
    const response = await this.request();
    return response.number;
  }
}

module.exports = InvoiceNumber;
