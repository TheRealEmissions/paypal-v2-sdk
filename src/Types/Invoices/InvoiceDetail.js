const PayPalClass = require("../../PayPal");

const FileReference = require("../General/FileReference");
const Metadata = require("../General/Metadata");
const InvoicePaymentTerm = require("./InvoicePaymentTerm");

class InvoiceDetail {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} ref
   * @returns
   */
  setReference(ref) {
    this.reference = ref;
    return this;
  }

  /**
   *
   * @param {String} code
   * @returns
   */
  setCurrencyCode(code) {
    this.currencyCode = code;
    return this;
  }

  /**
   *
   * @param {String} note
   * @returns
   */
  setNote(note) {
    this.note = note;
    return this;
  }

  /**
   *
   * @param {String} tac
   * @returns
   */
  setTermsAndConditions(tac) {
    this.termsAndConditions = tac;
    return this;
  }

  /**
   *
   * @param {String} memo
   * @returns
   */
  setMemo(memo) {
    this.memo = memo;
    return this;
  }

  /**
   *
   * @param {Array<FileReference>} attachments
   * @returns
   */
  setAttachments(attachments) {
    this.attachments = attachments;
    return this;
  }

  /**
   *
   * @param {Number|String} num
   * @returns
   */
  setInvoiceNumber(num) {
    this.invoiceNumber = typeof num === "string" ? parseInt(num) : num;
    return this;
  }

  /**
   *
   * @param {Date|String} date
   * @returns
   */
  setInvoiceDate(date) {
    this.invoiceDate = date instanceof Date ? date : new Date(date);
    return this;
  }

  /**
   *
   * @param {InvoicePaymentTerm} term
   */
  setPaymentTerm(term) {
    this.paymentTerm = term;
    return this;
  }

  /**
   *
   * @param {Metadata} metadata
   * @returns
   */
  setMetadata(metadata) {
    this.metadata = metadata;
    return this;
  }
}

module.exports = InvoiceDetail;
