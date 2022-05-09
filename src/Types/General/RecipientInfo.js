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
          ? this[entry].toAttributeObject()
          : this[entry];
    }
    return obj;
  }

  /**
   *
   * @param {BillingInfo} billingInfo
   * @returns
   */
  setBillingInfo(billingInfo) {
    this.billingInfo = billingInfo;
    return this;
  }

  /**
   *
   * @param {ContactInfo} shippingInfo
   * @returns
   */
  setShippingInfo(shippingInfo) {
    this.shippingInfo = shippingInfo;
    return this;
  }
}

module.exports = RecipientInfo;
