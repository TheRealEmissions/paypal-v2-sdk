const PayPalClass = require("../../PayPal");

class NotificationQuery {
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

module.exports = NotificationQuery;
