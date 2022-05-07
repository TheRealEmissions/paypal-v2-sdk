const PayPalClass = require("../../PayPal");

class Name {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param {String} prefix
   * @returns
   */
  setPrefix(prefix) {
    this.prefix = prefix;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns
   */
  setGivenName(name) {
    this.givenName = name;
    return this;
  }

  /**
   *
   * @param {String} surname
   * @returns
   */
  setSurname(surname) {
    this.surname = surname;
    return this;
  }

  /**
   *
   * @param {String} middleName
   * @returns
   */
  setMiddleName(middleName) {
    this.middleName = middleName;
    return this;
  }

  /**
   *
   * @param {String} suffix
   * @returns
   */
  setSuffix(suffix) {
    this.suffix = suffix;
    return this;
  }

  /**
   * @deprecated
   * @param {String} name
   * @returns
   */
  setAlternateFullName(name) {
    this.alternateFullName = name;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns
   */
  setFullName(name) {
    this.fullName = name;
    return this;
  }
}

module.exports = Name;
