const PayPalClass = require("../../PayPal");
const InvoiceNumberAPI = require("../../API/Invoices/InvoiceNumber");

class InvoiceNumber {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
    this.number = 0;
  }

  async generate() {
    const invoiceNumber = await new InvoiceNumberAPI(
      this.PayPal.token
    ).request();
    this.number = invoiceNumber.number;
    return this;
  }
}

module.exports = InvoiceNumber;
