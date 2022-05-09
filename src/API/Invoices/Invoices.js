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

  /**
   *
   * @param {Object} query
   */
  async list(query) {
    const response = await this.PayPal.Axios.get(
      "https://api.paypal.com/v2/invoicing/invoices",
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: query,
      }
    );
    return response.data;
  }

  async create(json) {
    const response = await this.PayPal.Axios.post(
      `https://api.paypal.com/v2/invoicing/invoices`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        data: json,
      }
    );
    return response.data;
  }

  async delete(id) {
    const response = await this.PayPal.Axios.delete(
      `https://api.paypal.com/v2/invoicing/invoices/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.status === 204 ? true : false;
  }
}

module.exports = Invoices;
