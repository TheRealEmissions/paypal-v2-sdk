import { UnitOfMeasure } from "../Enums/UnitOfMeasure.js";
import Types, { ITypes, Static } from "../Types.js";
import { Discount, TDiscount } from "./Discount.js";
import { Money, TMoney } from "./Money.js";
import { Tax, TTax } from "./Tax.js";

export type TItem = {
  name: string;
  quantity: string;
  unit_amount: TMoney;
  description?: string;
  discount?: TDiscount;
  readonly id?: string;
  item_date?: string;
  tax?: TTax;
  unit_of_measure?: keyof typeof UnitOfMeasure;
};

export class Item extends Types implements Static<ITypes, typeof Item> {
  name?: string;
  quantity?: string;
  unitAmount?: Money;
  description?: string;
  discount?: Discount;
  id?: string;
  itemDate?: string;
  tax?: Tax;
  unitOfMeasure?: UnitOfMeasure;

  public setItemName(name: string): this {
    this.name = name;
    return this;
  }

  public setItemQuantity(quantity: string): this {
    this.quantity = quantity;
    return this;
  }

  public setItemUnitAmount(unitAmount: Money): this;
  public setItemUnitAmount(unitAmount: (unitAmount: Money) => void): this;
  public setItemUnitAmount(unitAmount: Money | ((unitAmount: Money) => void)): this {
    if (unitAmount instanceof Money) {
      this.unitAmount = unitAmount;
    } else {
      const unitAmountInstance = new Money();
      unitAmount(unitAmountInstance);
      this.unitAmount = unitAmountInstance;
    }
    return this;
  }

  public setItemDescription(description: string): this {
    this.description = description;
    return this;
  }

  public setItemDiscount(discount: Discount): this;
  public setItemDiscount(discount: (discount: Discount) => void): this;
  public setItemDiscount(discount: Discount | ((discount: Discount) => void)): this {
    if (discount instanceof Discount) {
      this.discount = discount;
    } else {
      const discountInstance = new Discount();
      discount(discountInstance);
      this.discount = discountInstance;
    }
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

  public setItemTax(tax: Tax): this;
  public setItemTax(tax: (tax: Tax) => void): this;
  public setItemTax(tax: Tax | ((tax: Tax) => void)): this {
    if (tax instanceof Tax) {
      this.tax = tax;
    } else {
      const taxInstance = new Tax();
      tax(taxInstance);
      this.tax = taxInstance;
    }
    return this;
  }

  public setItemUnitOfMeasure(unitOfMeasure: UnitOfMeasure): this;
  public setItemUnitOfMeasure(unitOfMeasure: (unitOfMeasure: typeof UnitOfMeasure) => UnitOfMeasure): this;
  public setItemUnitOfMeasure(
    unitOfMeasure: UnitOfMeasure | ((unitOfMeasure: typeof UnitOfMeasure) => UnitOfMeasure)
  ): this {
    if (typeof unitOfMeasure === "function") {
      this.unitOfMeasure = unitOfMeasure(UnitOfMeasure);
    } else {
      this.unitOfMeasure = unitOfMeasure;
    }
    return this;
  }

  static fromObject(obj: TItem): Item {
    const item = new Item();
    item.setItemName(obj.name);
    item.setItemQuantity(obj.quantity);
    item.setItemUnitAmount(Money.fromObject(obj.unit_amount));
    if (obj.description) item.setItemDescription(obj.description);
    if (obj.discount) item.setItemDiscount(Discount.fromObject(obj.discount));
    if (obj.id) item.setItemId(obj.id);
    if (obj.item_date) item.setItemDate(obj.item_date);
    if (obj.tax) item.setItemTax(Tax.fromObject(obj.tax));
    if (obj.unit_of_measure) item.setItemUnitOfMeasure(UnitOfMeasure[obj.unit_of_measure]);
    return item;
  }
}
