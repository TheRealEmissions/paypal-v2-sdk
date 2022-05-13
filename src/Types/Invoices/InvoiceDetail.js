const PayPalClass = require("../../PayPal");

const FileReference = require("../General/FileReference");
const Metadata = require("../General/Metadata");
const InvoicePaymentTerm = require("./InvoicePaymentTerm");

class InvoiceDetail {
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
   * @param {String} ref
   * @returns {InvoiceDetail}
   */
  setReference(ref) {
    this.reference = ref;
    return this;
  }

  /**
   *
   * @param {String} code
   * @returns {InvoiceDetail}
   */
  setCurrencyCode(code) {
    this.currencyCode = code;
    return this;
  }

  /**
   *
   * @param {String} note
   * @returns {InvoiceDetail}
   */
  setNote(note) {
    this.note = note;
    return this;
  }

  /**
   *
   * @param {String} tac
   * @returns {InvoiceDetail}
   */
  setTermsAndConditions(tac) {
    this.termsAndConditions = tac;
    return this;
  }

  /**
   *
   * @param {String} memo
   * @returns {InvoiceDetail}
   */
  setMemo(memo) {
    this.memo = memo;
    return this;
  }

  /**
   *
   * @param {Array<FileReference>} attachments
   * @returns {InvoiceDetail}
   */
  setAttachments(attachments) {
    this.attachments = attachments;
    return this;
  }

  /**
   *
   * @param {Number|String} num
   * @returns {InvoiceDetail}
   */
  setInvoiceNumber(num) {
    this.invoiceNumber = typeof num === "number" ? num.toString() : num;
    return this;
  }

  /**
   *
   * @param {String} date
   * @returns {InvoiceDetail}
   */
  setInvoiceDate(date) {
    this.invoiceDate = date;
    return this;
  }

  /**
   *
   * @param {InvoicePaymentTerm} term
   * @returns {InvoiceDetail}
   */
  setPaymentTerm(term) {
    this.paymentTerm = term;
    return this;
  }

  /**
   *
   * @param {Metadata} metadata
   * @returns {InvoiceDetail}
   */
  setMetadata(metadata) {
    this.metadata = metadata;
    return this;
  }
}

module.exports = InvoiceDetail;
