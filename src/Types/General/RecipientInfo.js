const PayPalClass = require("../../PayPal");

const BillingInfo = require("../General/BillingInfo");
const ContactInfo = require("../General/ContactInfo");

class RecipientInfo {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
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
