const PayPalClass = require("../../PayPal");

const BillingInfo = require("../General/BillingInfo");
const ContactInfo = require("../General/ContactInfo");

class RecipientInfo {
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
   * @param {BillingInfo} billingInfo
   * @returns {RecipientInfo}
   */
  setBillingInfo(billingInfo) {
    this.billingInfo = billingInfo;
    return this;
  }

  /**
   *
   * @param {ContactInfo} shippingInfo
   * @returns {RecipientInfo}
   */
  setShippingInfo(shippingInfo) {
    this.shippingInfo = shippingInfo;
    return this;
  }
}

module.exports = RecipientInfo;
