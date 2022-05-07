class InvoiceNumber {
  constructor() {
    this.number = 0;
  }

  async request() {
    const response = await this.Axios.post(
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
