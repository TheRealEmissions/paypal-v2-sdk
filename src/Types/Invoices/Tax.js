const PayPalClass = require("../../PayPal");
const Types = require("../Types");

const Money = require("./Money");

class Tax extends Types {
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
   * @returns {Tax}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   *
   * @param {String} percent - from 0 to 100
   * @returns {Tax}
   */
  setPercent(percent) {
    this.percent = percent;
    return this;
  }

  /**
   *
   * @param {Money} amount
   * @returns {Tax}
   */
  setAmount(amount) {
    this.amount = amount;
    return this;
  }
}

module.exports = Tax;
