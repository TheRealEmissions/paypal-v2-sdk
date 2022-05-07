const PayPalClass = require("../../PayPal");

const Name = require("../General/Name");
const AddressPortable = require("../General/AddressPortable");

class ContactInfo {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} name
   * @returns
   */
  setBusinessName(name) {
    this.businessName = name;
    return this;
  }

  /**
   *
   * @param {Name} name
   * @returns
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   *
   * @param {AddressPortable} address
   * @returns
   */
  setAddress(address) {
    this.address = address;
    return this;
  }
}

module.exports = ContactInfo;
