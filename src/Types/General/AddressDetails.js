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
   * @param {String} num
   * @returns {AddressDetails}
   */
  setStreetNumber(num) {
    this.streetNumber = num;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns {AddressDetails}
   */
  setStreetName(name) {
    this.streetName = name;
    return this;
  }

  /**
   *
   * @param {String} type
   * @returns {AddressDetails}
   */
  setStreetType(type) {
    this.streetType = type;
    return this;
  }

  /**
   *
   * @param {String} service
   * @returns {AddressDetails}
   */
  setDeliveryService(service) {
    this.deliveryService = service;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns {AddressDetails}
   */
  setBuildingName(name) {
    this.buildingName = name;
    return this;
  }

  /**
   *
   * @param {String} sub
   * @returns {AddressDetails}
   */
  setSubBuilding(sub) {
    this.subBuilding = sub;
    return this;
  }
}

module.exports = AddressDetails;
