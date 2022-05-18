const PayPalClass = require("../../PayPal");
const Types = require("../Types");

class DateRange extends Types {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    super();
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} start
   * @returns {DateRange}
   */
  setStart(start) {
    this.start = start;
    return this;
  }

  /**
   *
   * @param {String} end
   * @returns {DateRange}
   */
  setEnd(end) {
    this.end = end;
    return this;
  }
}

module.exports = DateRange;
