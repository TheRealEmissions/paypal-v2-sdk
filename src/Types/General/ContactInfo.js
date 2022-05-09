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
