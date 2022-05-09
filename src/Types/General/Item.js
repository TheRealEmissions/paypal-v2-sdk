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
          ? this[entry].toAttributeObject()
          : this[entry];
    }
    return obj;
  }

  /**
   *
   * @param {String} id
   * @returns
   */
  setId(id) {
    this.id = id;
    return this;
  }

  /**
   *
   * @param {String} name
   * @returns
   */
  setName(name) {
    this.name = name;
    return this;
  }

  /**
   *
   * @param {String} desc
   * @returns
   */
  setDescription(desc) {
    this.description = desc;
    return this;
  }

  /**
   *
   * @param {String} num
   * @returns
   */
  setQuantity(quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   *
   * @param {Money} unitAmount
   * @returns
   */
  setUnitAmount(unitAmount) {
    this.unitAmount = unitAmount;
    return this;
  }

  /**
   *
   * @param {Tax} tax
   * @returns
   */
  setTax(tax) {
    this.tax = tax;
    return this;
  }

  /**
   *
   * @param {Date|String} date
   * @returns
   */
  setItemDate(date) {
    this.itemDate = date instanceof Date ? date : new Date(date);
    return this;
  }

  /**
   *
   * @param {Discount} discount
   * @returns
   */
  setDiscount(discount) {
    this.discount = discount;
    return this;
  }

  /**
   *
   * @param {String} unit
   * @returns
   */
  setUnitOfMeasure(unit) {
    this.unitOfMeasure = unit;
    return this;
  }
}

module.exports = Item;
