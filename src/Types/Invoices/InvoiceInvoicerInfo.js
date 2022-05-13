const PayPalClass = require("../../PayPal");

const PhoneDetail = require("../General/PhoneDetail");

class InvoiceInvoicerInfo {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal = null) {
    this.PayPal = PayPal;
  }

  toJson() {
    return JSON.stringify(this.toAttributeObject());
  }

  toAttributeObject() {
    const obj = {};
    for (const entry of Object.keys(this)) {
      obj[entry.replace(/[A-Z]/g, (x) => `_${x.toLowerCase()}`)] =
        this[entry] instanceof Object
          ? this[entry] instanceof Array
            ? this[entry].map((x) =>
                x instanceof Object ? x.toAttributeObject() : x
              )
            : this[entry].toAttributeObject()
          : this[entry];
    }
    return obj;
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
