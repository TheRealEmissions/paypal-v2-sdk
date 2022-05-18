const PayPalClass = require("../../PayPal");

const BillingInfo = require("./BillingInfo");
const ContactInfo = require("../General/ContactInfo");
const Types = require("../Types");

class RecipientInfo extends Types {
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
