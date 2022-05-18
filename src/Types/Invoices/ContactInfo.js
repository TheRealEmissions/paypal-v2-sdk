const PayPalClass = require("../../PayPal");

const Name = require("./Name");
const AddressPortable = require("./AddressPortable");
const Types = require("../Types");

class ContactInfo extends Types {
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
   * @param {String} name
   * @returns {ContactInfo}
   */
  setBusinessName(name) {
    this.businessName = name;
    return this;
  }

  /**
   *
   * @param {Name} name
   * @returns {ContactInfo}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   *
   * @param {AddressPortable} address
   * @returns {ContactInfo}
   */
  setAddress(address) {
    this.address = address;
    return this;
  }
}

module.exports = ContactInfo;
