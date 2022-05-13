const PayPalClass = require("../../PayPal");

class FileReference {
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
   * @param {String} id
   * @returns {FileReference}
   */
  setId(id) {
    this.id = id;
    return this;
  }

  /**
   *
   * @param {String} url
   * @returns {FileReference}
   */
  setReferenceUrl(url) {
    this.referenceUrl = url;
    return this;
  }

  /**
   *
   * @param {String} type
   * @returns {FileReference}
   */
  setContentType(type) {
    this.contentType = type;
    return this;
  }

  /**
   *
   * @param {String} date
   * @returns {FileReference}
   */
  setCreateTime(date) {
    this.createTime = date;
    return this;
  }

  /**
   *
   * @param {String} size
   * @returns {FileReference}
   */
  setSize(size) {
    this.size = size;
    return this;
  }
}

module.exports = FileReference;
