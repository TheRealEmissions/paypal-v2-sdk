const PayPalClass = require("../../PayPal");
const Types = require("../Types");

class FileReference extends Types {
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
