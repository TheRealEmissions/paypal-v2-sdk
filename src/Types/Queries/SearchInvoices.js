const PayPalClass = require("../../PayPal");
const AmountRange = require("../General/AmountRange");
const DateRange = require("../General/DateRange");
const Field = require("../General/Field");

class SearchInvoicesQuery {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
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
   * @param {Number} num
   * @returns {SearchInvoicesQuery}
   */
  setPage(num) {
    this.page = num;
    return this;
  }

  /**
   *
   * @param {Number} size
   * @returns {SearchInvoicesQuery}
   */
  setPageSize(size) {
    this.pageSize = size;
    return this;
  }

  /**
   *
   * @param {Boolean} bool
   * @returns {SearchInvoicesQuery}
   */
  setTotalRequired(bool) {
    this.totalRequired = bool;
    return this;
  }

  /**
   *
   * @param {String} email
   * @returns {SearchInvoicesQuery}
   */
  setRecipientEmail(email) {
    this.recipientEmail = email;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns {SearchInvoicesQuery}
   */
  setRecipientFirstName(name) {
    this.recipientFirstName = name;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns {SearchInvoicesQuery}
   */
  setRecipientLastName(name) {
    this.recipientLastName = name;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns {SearchInvoicesQuery}
   */
  setRecipientBusinessName(name) {
    this.recipientBusinessName = name;
    return this;
  }

  /**
   *
   * @param {String} num
   * @returns {SearchInvoicesQuery}
   */
  setInvoiceNumber(num) {
    this.invoiceNumber = num;
    return this;
  }

  /**
   *
   * @param {Array<String>} statuses
   * @returns {SearchInvoicesQuery}
   */
  setStatus(statuses) {
    this.status = statuses;
    return this;
  }

  /**
   *
   * @param {String} ref
   * @returns {SearchInvoicesQuery}
   */
  setReference(ref) {
    this.reference = ref;
    return this;
  }

  /**
   *
   * @param {String} code
   * @returns {SearchInvoicesQuery}
   */
  setCurrencyCode(code) {
    this.currencyCode = code;
    return this;
  }

  /**
   *
   * @param {String} memo
   * @returns {SearchInvoicesQuery}
   */
  setMemo(memo) {
    this.memo = memo;
    return this;
  }

  /**
   *
   * @param {AmountRange} range
   * @returns {SearchInvoicesQuery}
   */
  setTotalAmountRange(range) {
    this.totalAmountRange = range;
    return this;
  }

  /**
   *
   * @param {DateRange} range
   * @returns {SearchInvoicesQuery}
   */
  setInvoiceDateRange(range) {
    this.invoiceDateRange = range;
    return this;
  }

  /**
   *
   * @param {DateRange} range
   * @returns {SearchInvoicesQuery}
   */
  setDueDateRange(range) {
    this.dueDateRange = range;
    return this;
  }

  /**
   *
   * @param {DateRange} range
   * @returns {SearchInvoicesQuery}
   */
  setPaymentDateRange(range) {
    this.paymentDateRange = range;
    return this;
  }

  /**
   *
   * @param {DateRange} range
   * @returns {SearchInvoicesQuery}
   */
  setCreationDateRange(range) {
    this.creationDateRange = range;
    return this;
  }

  /**
   *
   * @param {Boolean} bool
   * @returns {SearchInvoicesQuery}
   */
  setArchived(bool) {
    this.archived = bool;
    return this;
  }

  /**
   *
   * @param {Array<Field>} fields
   * @returns {SearchInvoicesQuery}
   */
  setFields(fields) {
    this.fields = fields;
    return this;
  }
}

module.exports = SearchInvoicesQuery;
