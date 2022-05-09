const PayPalClass = require("../../PayPal");

class FileReference {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
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

  setId(id) {
    this.id = id;
    return this;
  }

  setReferenceUrl(url) {
    this.referenceUrl = url;
    return this;
  }

  setContentType(type) {
    this.contentType = type;
    return this;
  }

  setCreateTime(date) {
    this.createTime = new Date(date);
    return this;
  }

  setSize(size) {
    this.size = size;
    return this;
  }
}

module.exports = FileReference;
