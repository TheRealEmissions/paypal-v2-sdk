const PayPalClass = require("../../PayPal");

class Name {
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
