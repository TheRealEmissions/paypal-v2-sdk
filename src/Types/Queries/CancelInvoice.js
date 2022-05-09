const PayPalClass = require("../../PayPal");

class CancelInvoiceQuery {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} subject
   * @returns
   */
  setSubject(subject) {
    this.subject = subject;
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
   * @param {Boolean} boolean
   * @returns
   */
  setSendToInvoicer(boolean) {
    this.sendToInvoicer = boolean;
    return this;
  }

  /**
   *
   * @param {Boolean} boolean
   * @returns
   */
  setSendToRecipient(boolean) {
    this.sendToRecipient = boolean;
    return this;
  }

  /**
   *
   * @param {Array<String>} emails
   * @returns
   */
  setAdditionalRecipients(emails) {
    this.additionalRecipients = emails.map((x) => {
      return { email_address: x };
    });
    return this;
  }
}

module.exports = CancelInvoiceQuery;
