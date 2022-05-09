const PayPalClass = require("../../PayPal");

class AddressDetails {
  /**
   *
   * @param {PayPalClass|null} PayPal
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
   * @param {String} num
   * @returns
   */
  setStreetNumber(num) {
    this.streetNumber = num;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns
   */
  setStreetName(name) {
    this.streetName = name;
    return this;
  }

  /**
   *
   * @param {String} type
   * @returns
   */
  setStreetType(type) {
    this.streetType = type;
    return this;
  }

  /**
   *
   * @param {String} service
   * @returns
   */
  setDeliveryService(service) {
    this.deliveryService = service;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns
   */
  setBuildingName(name) {
    this.buildingName = name;
    return this;
  }

  /**
   *
   * @param {String} sub
   * @returns
   */
  setSubBuilding(sub) {
    this.subBuilding = sub;
    return this;
  }
}

module.exports = AddressDetails;
