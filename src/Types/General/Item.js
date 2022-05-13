const PayPalClass = require("../../PayPal");

const Money = require("../General/Money");
const Tax = require("./Tax");
const Discount = require("./Discount");

class Item {
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
   * @returns {Item}
   */
  setId(id) {
    this.id = id;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns {Item}
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   *
   * @param {String} desc
   * @returns {Item}
   */
  setDescription(desc) {
    this.description = desc;
    return this;
  }

  /**
   *
   * @param {String} num
   * @returns {Item}
   */
  setQuantity(quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   *
   * @param {Money} unitAmount
   * @returns {Item}
   */
  setUnitAmount(unitAmount) {
    this.unitAmount = unitAmount;
    return this;
  }

  /**
   *
   * @param {Tax} tax
   * @returns {Item}
   */
  setTax(tax) {
    this.tax = tax;
    return this;
  }

  /**
   *
   * @param {String} date
   * @returns {Item}
   */
  setItemDate(date) {
    this.itemDate = date;
    return this;
  }

  /**
   *
   * @param {Discount} discount
   * @returns {Item}
   */
  setDiscount(discount) {
    this.discount = discount;
    return this;
  }

  /**
   *
   * @param {String} unit
   * @returns {Item}
   */
  setUnitOfMeasure(unit) {
    this.unitOfMeasure = unit;
    return this;
  }
}

module.exports = Item;
