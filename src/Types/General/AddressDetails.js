const PayPalClass = require("../../PayPal");

class AddressDetails {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
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
