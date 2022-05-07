const PayPalClass = require("../../PayPal");
const InvoiceNumberAPI = require("../../API/Invoices/InvoiceNumber");

class InvoiceNumber {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  async generate() {
    const invoiceNumber = await new InvoiceNumberAPI(
      this.PayPal.token
    ).request();
    return invoiceNumber.number;
  }
}

module.exports = InvoiceNumber;
