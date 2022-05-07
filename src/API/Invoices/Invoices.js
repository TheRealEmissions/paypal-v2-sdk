const PayPalClass = require("../../PayPal");

class Invoices {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  async get(id) {
    const response = await this.PayPal.Axios.get(
      `https://api.paypal.com/v2/invoicing/invoices/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  }
}

module.exports = Invoices;
