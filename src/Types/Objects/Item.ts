import PayPal from "../../PayPal";
import { UnitOfMeasure } from "../Enums/UnitOfMeasure";
import Types from "../Types";
import Discount, { TDiscount } from "./Discount";
import Money, { TMoney } from "./Money";
import Tax, { TTax } from "./Tax";

export type TItem = {
  name: string;
  quantity: string;
  unit_amount: TMoney;
  description: string;
  discount: TDiscount;
  id: string;
  item_date: string;
  tax: TTax;
  unit_of_measure: string;
};

class Item extends Types {
  name: string;
  quantity: string;
  unitAmount: Money;
  description: string;
  discount: Discount;
  id: string;
  itemDate: string;
  tax: Tax;
  unitOfMeasure: UnitOfMeasure;
  constructor() {
    super();
  }

  public setItemName(name: string): this {
    this.name = name;
    return this;
  }

  public setItemQuantity(quantity: string): this {
    this.quantity = quantity;
    return this;
  }

  public setItemUnitAmount(unitAmount: Money): this {
    this.unitAmount = unitAmount;
    return this;
  }

  public setItemDescription(description: string): this {
    this.description = description;
    return this;
  }

  public setItemDiscount(discount: Discount): this {
    this.discount = discount;
    return this;
  }

  public setItemId(id: string): this {
    this.id = id;
    return this;
  }

  public setItemDate(itemDate: string): this {
    this.itemDate = itemDate;
    return this;
  }

  public setItemTax(tax: Tax): this {
    this.tax = tax;
    return this;
  }

  public setItemUnitOfMeasure(unitOfMeasure: UnitOfMeasure): this {
    this.unitOfMeasure = unitOfMeasure;
    return this;
  }

  public override fromObject(obj: TItem): this {
    this.name = obj.name;
    this.quantity = obj.quantity;
    this.unitAmount = new Money().fromObject(obj.unit_amount);
    this.description = obj.description;
    this.discount = new Discount().fromObject(obj.discount);
    this.id = obj.id;
    this.itemDate = obj.item_date;
    this.tax = new Tax().fromObject(obj.tax);
    this.unitOfMeasure =
      UnitOfMeasure[obj.unit_of_measure as keyof typeof UnitOfMeasure];
    return this;
  }
}

export default Item;
