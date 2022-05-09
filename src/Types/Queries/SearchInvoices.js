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
   * @returns
   */
  setPage(num) {
    this.page = num;
    return this;
  }

  /**
   *
   * @param {Number} size
   * @returns
   */
  setPageSize(size) {
    this.pageSize = size;
    return this;
  }

  /**
   *
   * @param {Boolean} bool
   * @returns
   */
  setTotalRequired(bool) {
    this.totalRequired = bool;
    return this;
  }

  /**
   *
   * @param {String} email
   * @returns
   */
  setRecipientEmail(email) {
    this.recipientEmail = email;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns
   */
  setRecipientFirstName(name) {
    this.recipientFirstName = name;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns
   */
  setRecipientLastName(name) {
    this.recipientLastName = name;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns
   */
  setRecipientBusinessName(name) {
    this.recipientBusinessName = name;
    return this;
  }

  /**
   *
   * @param {String} num
   * @returns
   */
  setInvoiceNumber(num) {
    this.invoiceNumber = num;
    return this;
  }

  /**
   *
   * @param {Array<String>} statuses
   * @returns
   */
  setStatus(statuses) {
    this.status = statuses;
    return this;
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

  setMemo(memo) {
    this.memo = memo;
    return this;
  }

  /**
   *
   * @param {AmountRange} range
   * @returns
   */
  setTotalAmountRange(range) {
    this.totalAmountRange = range;
    return this;
  }

  /**
   *
   * @param {DateRange} range
   * @returns
   */
  setInvoiceDateRange(range) {
    this.invoiceDateRange = range;
    return this;
  }

  /**
   *
   * @param {DateRange} range
   * @returns
   */
  setDueDateRange(range) {
    this.dueDateRange = range;
    return this;
  }

  /**
   *
   * @param {DateRange} range
   * @returns
   */
  setPaymentDateRange(range) {
    this.paymentDateRange = range;
    return this;
  }

  /**
   *
   * @param {DateRange} range
   * @returns
   */
  setCreationDateRange(range) {
    this.creationDateRange = range;
    return this;
  }

  /**
   *
   * @param {Boolean} bool
   * @returns
   */
  setArchived(bool) {
    this.archived = bool;
    return this;
  }

  /**
   *
   * @param {Array<Field>} fields
   * @returns
   */
  setFields(fields) {
    this.fields = fields;
    return this;
  }
}

module.exports = SearchInvoicesQuery;
