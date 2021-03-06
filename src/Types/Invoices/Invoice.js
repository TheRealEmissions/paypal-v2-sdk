const PayPalClass = require("../../PayPal");

const InvoiceDetail = require("./InvoiceDetail");
const InvoiceInvoicerInfo = require("./InvoiceInvoicerInfo");
const RecipientInfo = require("./RecipientInfo");
const Item = require("./Item");
const Configuration = require("./Configuration");
const Money = require(".Money");
const AmountSummaryDetail = require("./AmountSummaryDetail");
const Payments = require(".Payments");
const Refunds = require("./Refunds");
const LinkDescription = require("./LinkDescription");

const QrCodeQuery = require("./Queries/QRCode");
const RecordPaymentQuery = require("./Queries/RecordPayment");
const RecordPaymentResponse = require("./Responses/RecordPayment");
const NotificationQuery = require("./Queries/NotificationQuery");
const SendInvoiceResponse = require("./Responses/SendInvoice");
const Types = require("../Types");

class Invoice extends Types {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal = null) {
    super();
    this.PayPal = PayPal;
  }

  /*

  Invoice methods

  */

  /**
   *
   * @returns {Promise<Boolean>}
   */
  async delete() {
    if (!["DRAFT", "SCHEDULED"].includes(this.status)) {
      throw new Error(
        "You can only cancel invoices in Draft or Scheduled state"
      );
    }

    const deleted = await this.PayPal.Handler.invoices.delete(this.id);

    return deleted;
  }

  /**
   *
   * @param {NotificationQuery} body
   * @returns {Promise<Boolean>}
   */
  async cancel(body) {
    const cancelled = await this.PayPal.Handler.invoices.cancel(this.id, body);

    return cancelled;
  }

  /**
   *
   * @param {QrCodeQuery} body
   * @returns {Promise<String>}
   */
  async generateQrCode(body) {
    const qrCode = await this.PayPal.Handler.invoices.generateQrCode(
      this.id,
      body
    );
    return qrCode;
  }

  /**
   *
   * @param {RecordPaymentQuery} body
   * @returns {Promise<RecordPaymentResponse>}
   */
  async recordPayment(body) {
    const response = await this.PayPal.Handler.invoices.recordPayment(
      this.id,
      body
    );
    return response;
  }

  /**
   *
   * @param {NotificationQuery} body
   * @returns {Promise<Boolean>}
   */
  async sendReminder(body) {
    const response = await this.PayPal.Handler.invoices.sendReminder(
      this.id,
      body
    );
    return response;
  }

  /**
   *
   * @param {Promise<Boolean>} body
   * @returns {Promise<SendInvoiceResponse>}
   */
  async send(body) {
    const response = await this.PayPal.Handler.invoices.send(this.id, body);
    return response;
  }

  /*

  Invoice methods

  */

  /**
   *
   * @param {String} id
   * @returns {Invoice}
   */
  setId(id) {
    this.id = id;
    return this;
  }

  /**
   *
   * @param {String} parentId
   * @returns {Invoice}
   */
  setParentId(parentId) {
    this.parentId = parentId;
    return this;
  }

  /**
   *
   * @param {String} status
   * @returns {Invoice}
   */
  setStatus(status) {
    this.status = status;
    return this;
  }

  /**
   *
   * @param {InvoiceDetail} detail
   * @returns {Invoice}
   */
  setDetail(detail) {
    this.detail = detail;
    return this;
  }

  /**
   *
   * @param {InvoiceInvoicerInfo} invoicer
   * @returns {Invoice}
   */
  setInvoicer(invoicer) {
    this.invoicer = invoicer;
    return this;
  }

  /**
   *
   * @param {RecipientInfo} recipients
   * @returns {Invoice}
   */
  setPrimaryRecipients(recipients) {
    this.primaryRecipients = recipients;
    return this;
  }

  /**
   *
   * @param {Array<String>} recipients - array of email addressses
   * @returns {Invoice}
   */
  setAdditionalRecipients(recipients) {
    this.additionalRecipients = recipients;
    return this;
  }

  /**
   *
   * @param {Array<Item>} items
   * @returns {Invoice}
   */
  setItems(items) {
    this.items = items;
    return this;
  }

  /**
   *
   * @param {Configuration} config
   * @returns {Invoice}
   */
  setConfiguration(config) {
    this.configuration = config;
    return this;
  }

  /**
   *
   * @param {AmountSummaryDetail} amount
   * @returns {Invoice}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }

  /**
   *
   * @param {Money} dueAmount
   * @returns {Invoice}
   */
  setDueAmount(dueAmount) {
    this.dueAmount = dueAmount;
    return this;
  }

  /**
   *
   * @param {Money} gratuity
   * @returns {Invoice}
   */
  setGratuity(gratuity) {
    this.gratuity = gratuity;
    return this;
  }

  /**
   *
   * @param {Payments} payments
   * @returns {Invoice}
   */
  setPayments(payments) {
    this.payments = payments;
    return this;
  }

  /**
   *
   * @param {Refunds} refunds
   * @returns {Invoice}
   */
  setRefunds(refunds) {
    this.refunds = refunds;
    return this;
  }

  /**
   *
   * @param {Array<LinkDescription>} links
   * @returns {Invoice}
   */
  setLinks(links) {
    this.links = links;
    return this;
  }
}

module.exports = Invoice;
