const PayPalClass = require("../../PayPal");

class InvoiceNumber {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
    this.number = 0;
  }

  async request() {
    const response = await this.PayPal.post(
      "/v2/invoicing/generate-next-invoice-number",
      {}
    );
    this.setNumber(response.data.invoice_number);
    return this;
  }

  /**
   *
   * @param {Number} number
   * @returns {InvoiceNumber}
   */
  setNumber(number) {
    this.number = number;
    return this;
  }
}

module.exports = InvoiceNumber;
