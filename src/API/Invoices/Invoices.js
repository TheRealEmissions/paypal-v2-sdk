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
    const response = await this.PayPal.get(`/v2/invoicing/invoices/${id}`, {});
    return response.data;
  }

  /**
   *
   * @param {Object} query
   */
  async list(query) {
    const response = await this.PayPal.get("/v2/invoicing/invoices", {
      params: query,
    });
    return response.data;
  }

  /**
   *
   * @param {Object|JSON} json
   * @returns
   */
  async create(json) {
    const response = await this.PayPal.post(`/v2/invoicing/invoices`, {
      data: json,
    });
    return response.data;
  }

  /**
   *
   * @param {String} id
   * @returns
   */
  async delete(id) {
    const response = await this.PayPal.delete(
      `/v2/invoicing/invoices/${id}`,
      {}
    );
    return response.status === 204;
  }

  /**
   *
   * @param {String} id
   * @param {Object} query
   * @returns
   */
  async cancel(id, query) {
    const response = await this.PayPal.post(
      `/v2/invoicing/invoices/${id}/cancel`,
      {
        data: query,
      }
    );
    return response.status === 204;
  }

  /**
   *
   * @param {String} id
   * @param {Object} query
   */
  async generateQrCode(id, query) {
    const response = await this.PayPal.post(
      `/v2/invoicing/invoices/${id}/generate-qr-code`,
      {
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
    const response = await this.PayPal.post(
      `/v2/invoicing/invoices/${id}/payments`,
      {
        data: query,
      }
    );
    return response.data;
  }

  /**
   *
   * @param {String} id
   * @param {Object} query
   * @returns
   */
  async recordRefund(id, query) {
    const response = await this.PayPal.post(
      `/v2/invoicing/invoices/${id}/refunds`,
      {
        data: query,
      }
    );
    return response.data;
  }

  async deleteExternalPayment(invoiceId, transactionId) {
    const response = await this.PayPal.delete(
      `/v2/invoicing/invoices/${invoiceId}/payments/${transactionId}`,
      {}
    );
    return response.status === 204 ? true : false;
  }

  async deleteExternalRefund(invoiceId, transactionId) {
    const response = await this.PayPal.delete(
      `/v2/invoicing/invoices/${invoiceId}/refunds/${transactionId}`,
      {}
    );
    return response.status === 204;
  }

  /**
   *
   * @param {String} id
   * @param {Object} query
   */
  async sendReminder(id, query) {
    const response = await this.PayPal.post(
      `/v2/invoicing/invoices/${id}/remind`,
      {
        data: query,
      }
    );
    return response.status === 204;
  }

  async send(id, query) {
    const response = await this.PayPal.post(
      `/v2/invoicing/invoices/${id}/send`,
      {
        data: query,
      }
    );
    return response.data;
  }

  async find(query) {
    const response = await this.PayPal.post("/v2/invoicing/search-invoices", {
      params: {
        page: query.page,
        page_size: query.pageSize,
        total_required: query.totalRequired,
      },
      data: Object.keys(query)
        .filter((x) => !["page", "pageSize", "totalRequired"].includes(x))
        .reduce((a, b) => Object.assign(a, { b: query[b] }), {}),
    });
    return response.data;
  }
}

module.exports = Invoices;
