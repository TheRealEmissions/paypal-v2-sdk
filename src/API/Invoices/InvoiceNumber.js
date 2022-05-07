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
    const response = await this.PayPal.Axios.post(
      "https://api.paypal.com/v2/invoicing/generate-next-invoice-number",
      null,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    this.setNumber(response.data.invoice_number);
    return this;
  }

  setNumber(number) {
    this.number = number;
  }
}

module.exports = InvoiceNumber;
