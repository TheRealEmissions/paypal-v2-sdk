const PayPalClass = require("../../PayPal");

class Invoices {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} id
   * @returns
   */
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

  /**
   *
   * @param {Object|JSON} json
   * @returns
   */
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

  /**
   *
   * @param {String} id
   * @returns
   */
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

  /**
   *
   * @param {String} id
   * @param {Object} query
   * @returns
   */
  async cancel(id, query) {
    const response = await this.PayPal.Axios.post(
      `https://api.paypal.com/v2/invoicing/invoices/${id}/cancel`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        data: query,
      }
    );
    return response.status === 204 ? true : false;
  }

  /**
   *
   * @param {String} id
   * @param {Object} query
   */
  async generateQrCode(id, query) {
    const response = await this.PayPal.Axios.post(
      `https://api.paypal.com/v2/invoicing/invoices/${id}/generate-qr-code`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        data: query,
      }
    );
    return response.data;
  }

  /**
   *
   * @param {String} id
   * @param {Object} query
   */
  async recordPayment(id, query) {
    const response = await this.PayPal.Axios.post(
      `https://api.paypal.com/v2/invoicing/invoices/${id}/payments`,
      {
        headers: {
          "Content-Type": "application/json",
          data: query,
        },
      }
    );
    return response.data;
  }
}

module.exports = Invoices;
