const PayPalClass = require("../../PayPal");

const AddressDetails = require("../General/AddressDetails");

class AddressPortable {
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
   * @param {Array<String>} address
   * @returns {AddressPortable}
   */
  setAddressLines(address) {
    this.addressLines = address;
    return this;
  }

  /**
   *
   * @param {String} address
   * @returns {AddressPortable}
   */
  setAddressLine1(address) {
    if (!this.addressLines) this.addressLines = [];
    this.addressLines[0] = address;
    return this;
  }

  /**
   *
   * @param {String} address
   * @returns {AddressPortable}
   */
  setAddressLine2(address) {
    if (!this.addressLines) this.addressLines = [];
    this.addressLines[1] = address;
    return this;
  }

  /**
   *
   * @param {String} address
   * @returns {AddressPortable}
   */
  setAddressLine3(address) {
    if (!this.addressLines) this.addressLines = [];
    this.addressLines[2] = address;
    return this;
  }

  /**
   *
   * @param {Array<String>} areas
   * @returns {AddressPortable}
   */
  setAdminArea(areas) {
    this.adminArea = areas;
    return this;
  }

  /**
   *
   * @param {String} area
   * @returns {AddressPortable}
   */
  setAdminArea4(area) {
    if (!this.adminArea) this.adminArea = [];
    this.adminArea[0] = area;
    return this;
  }

  /**
   *
   * @param {String} area
   * @returns {AddressPortable}
   */
  setAdminArea3(area) {
    if (!this.adminArea) this.adminArea = [];
    this.adminArea[1] = area;
    return this;
  }

  /**
   *
   * @param {String} area
   * @returns {AddressPortable}
   */
  setAdminArea2(area) {
    if (!this.adminArea) this.adminArea = [];
    this.adminArea[2] = area;
    return this;
  }

  /**
   *
   * @param {String} area
   * @returns {AddressPortable}
   */
  setAdminArea1(area) {
    if (!this.adminArea) this.adminArea = [];
    this.adminArea[3] = area;
    return this;
  }

  /**
   *
   * @param {String} code
   * @returns {AddressPortable}
   */
  setPostalCode(code) {
    this.postalCode = code;
    return this;
  }

  /**
   *
   * @param {String} code
   * @returns {AddressPortable}
   */
  setCountryCode(code) {
    this.countryCode = code;
    return this;
  }

  /**
   *
   * @param {AddressDetails} addressDetails
   * @returns {AddressPortable}
   */
  setAddressDetails(addressDetails) {
    this.addressDetails = addressDetails;
    return this;
  }
}

module.exports = AddressPortable;
