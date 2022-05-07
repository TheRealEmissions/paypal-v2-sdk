const PayPalClass = require("../../PayPal");

const PhoneDetail = require("../General/PhoneDetail");

class InvoiceInvoicerInfo {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} email
   * @returns
   */
  setEmailAddress(email) {
    this.email = email;
    return this;
  }

  /**
   *
   * @param {Array<PhoneDetail>} phones
   * @returns
   */
  setPhones(phones) {
    this.phones = phones;
    return this;
  }

  /**
   *
   * @param {String} url
   * @returns
   */
  setWebsite(url) {
    this.website = url;
    return this;
  }

  /**
   *
   * @param {String} id
   * @returns
   */
  setTaxId(id) {
    this.taxId = id;
    return this;
  }

  /**
   *
   * @param {String} str
   * @returns
   */
  setAdditionalNotes(str) {
    this.additionalNotes = str;
    return this;
  }

  /**
   *
   * @param {String} url
   * @returns
   */
  setLogoUrl(url) {
    this.logoUrl = url;
    return this;
  }
}

module.exports = InvoiceInvoicerInfo;
