const PayPalClass = require("../../PayPal");

const FileReference = require("./FileReference");
const Metadata = require("./Metadata");
const InvoicePaymentTerm = require("./InvoicePaymentTerm");
const Types = require("../Types");

class InvoiceDetail extends Types {
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
