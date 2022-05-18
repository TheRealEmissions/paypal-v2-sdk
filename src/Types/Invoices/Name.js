const PayPalClass = require("../../PayPal");
const Types = require("../Types");

class Name extends Types {
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
   * @param {String} prefix
   * @returns {Name}
   */
  setPrefix(prefix) {
    this.prefix = prefix;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns {Name}
   */
  setGivenName(name) {
    this.givenName = name;
    return this;
  }

  /**
   *
   * @param {String} surname
   * @returns {Name}
   */
  setSurname(surname) {
    this.surname = surname;
    return this;
  }

  /**
   *
   * @param {String} middleName
   * @returns {Name}
   */
  setMiddleName(middleName) {
    this.middleName = middleName;
    return this;
  }

  /**
   *
   * @param {String} suffix
   * @returns {Name}
   */
  setSuffix(suffix) {
    this.suffix = suffix;
    return this;
  }

  /**
   * @deprecated
   * @param {String} name
   * @returns {Name}
   */
  setAlternateFullName(name) {
    this.alternateFullName = name;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns {Name}
   */
  setFullName(name) {
    this.fullName = name;
    return this;
  }
}

module.exports = Name;
