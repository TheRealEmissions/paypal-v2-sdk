const PayPalClass = require("../../PayPal");

const Name = require("../General/Name");
const AddressPortable = require("../General/AddressPortable");

class ContactInfo {
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
