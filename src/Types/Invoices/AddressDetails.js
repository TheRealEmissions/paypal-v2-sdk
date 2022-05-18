const PayPalClass = require("../../PayPal");
const Types = require("../Types");

class AddressDetails extends Types {
  /**
   *
   * @param {PayPalClass|null} PayPal
   */
  constructor(PayPal = null) {
    super();
    this.PayPal = PayPal;
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
