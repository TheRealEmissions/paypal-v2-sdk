const PayPalClass = require("../../../PayPal");
const Types = require("../../Types");

class NotificationQuery extends Types {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    super();
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} subject
   * @returns {NotificationQuery}
   */
  setSubject(subject) {
    this.subject = subject;
    return this;
  }

  /**
   *
   * @param {String} note
   * @returns {NotificationQuery}
   */
  setNote(note) {
    this.note = note;
    return this;
  }

  /**
   *
   * @param {Boolean} boolean
   * @returns {NotificationQuery}
   */
  setSendToInvoicer(boolean) {
    this.sendToInvoicer = boolean;
    return this;
  }

  /**
   *
   * @param {Boolean} boolean
   * @returns {NotificationQuery}
   */
  setSendToRecipient(boolean) {
    this.sendToRecipient = boolean;
    return this;
  }

  /**
   *
   * @param {Array<String>} emails
   * @returns {NotificationQuery}
   */
  setAdditionalRecipients(emails) {
    this.additionalRecipients = emails.map((x) => {
      return { email_address: x };
    });
    return this;
  }
}

module.exports = NotificationQuery;
