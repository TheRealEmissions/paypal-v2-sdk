const PayPalClass = require("../../PayPal");
const Types = require("../Types");

class Metadata extends Types {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal = null) {
    super();
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} date
   * @returns {Metadata}
   */
  setCreateTime(date) {
    this.createTime = date;
    return this;
  }

  /**
   *
   * @param {String} email
   * @returns {Metadata}
   */
  setCreatedBy(email) {
    this.createdBy = email;
    return this;
  }

  /**
   *
   * @param {String} date
   * @returns {Metadata}
   */
  setLastUpdateTime(date) {
    this.lastUpdateTime = date;
    return this;
  }

  /**
   *
   * @param {String} email
   * @returns {Metadata}
   */
  setLastUpdatedBy(email) {
    this.lastUpdatedBy = email;
    return this;
  }

  /**
   *
   * @param {String} date
   * @returns {Metadata}
   */
  setCancelTime(date) {
    this.cancelTime = date;
    return this;
  }

  /**
   *
   * @param {String} actor
   * @returns {Metadata}
   */
  setCancelledBy(actor) {
    this.cancelledBy = actor;
    return this;
  }

  /**
   *
   * @param {String} date
   * @returns {Metadata}
   */
  setFirstTimeSent(date) {
    this.firstTimeSent = date;
    return this;
  }

  /**
   *
   * @param {String} date
   * @returns {Metadata}
   */
  setLastTimeSent(date) {
    this.lastTimeSent = date;
    return this;
  }

  /**
   *
   * @param {String} email
   * @returns {Metadata}
   */
  setLastSentBy(email) {
    this.lastSentBy = email;
    return this;
  }

  /**
   *
   * @param {String} flow
   * @returns {Metadata}
   */
  setCreatedByFlow(flow) {
    this.createdByFlow = flow;
    return this;
  }

  /**
   *
   * @param {String} url
   * @returns {Metadata}
   */
  setRecipientViewUrl(url) {
    this.recipientViewUrl = url;
    return this;
  }

  /**
   *
   * @param {String} url
   * @returns {Metadata}
   */
  setInvoicerViewUrl(url) {
    this.invoicerViewUrl = url;
    return this;
  }
}

module.exports = Metadata;
