const PayPalClass = require("../../PayPal");
const Types = require("../Types");

const PhoneDetail = require("./PhoneDetail");

class InvoiceInvoicerInfo extends Types {
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
   * @param {String} email
   * @returns {InvoiceInvoicerInfo}
   */
  setEmailAddress(email) {
    this.email = email;
    return this;
  }

  /**
   *
   * @param {Array<PhoneDetail>} phones
   * @returns {InvoiceInvoicerInfo}
   */
  setPhones(phones) {
    this.phones = phones;
    return this;
  }

  /**
   *
   * @param {String} url
   * @returns {InvoiceInvoicerInfo}
   */
  setWebsite(url) {
    this.website = url;
    return this;
  }

  /**
   *
   * @param {String} id
   * @returns {InvoiceInvoicerInfo}
   */
  setTaxId(id) {
    this.taxId = id;
    return this;
  }

  /**
   *
   * @param {String} str
   * @returns {InvoiceInvoicerInfo}
   */
  setAdditionalNotes(str) {
    this.additionalNotes = str;
    return this;
  }

  /**
   *
   * @param {String} url
   * @returns {InvoiceInvoicerInfo}
   */
  setLogoUrl(url) {
    this.logoUrl = url;
    return this;
  }
}

module.exports = InvoiceInvoicerInfo;
