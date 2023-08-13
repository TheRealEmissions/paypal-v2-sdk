import Types, { ITypes, Static } from "../Types.js";
import { Discount, TDiscount } from "./Discount.js";
import { Money, TMoney } from "./Money.js";

export type TAggregatedDiscount = {
  invoice_discount: TDiscount;
  item_discount: TMoney;
};

export class AggregatedDiscount extends Types implements Static<ITypes, typeof AggregatedDiscount> {
  invoiceDiscount?: Discount;
  itemDiscount?: Money;

  setInvoiceDiscount(invoiceDiscount: Discount): this;
  setInvoiceDiscount(invoiceDiscount: (invoiceDiscount: Discount) => void): this;
  setInvoiceDiscount(invoiceDiscount: Discount | ((invoiceDiscount: Discount) => void)) {
    if (invoiceDiscount instanceof Discount) {
      this.invoiceDiscount = invoiceDiscount;
    } else {
      const invoiceDiscountInstance = new Discount();
      invoiceDiscount(invoiceDiscountInstance);
      this.invoiceDiscount = invoiceDiscountInstance;
    }
    return this;
  }

  setItemDiscount(itemDiscount: Money): this;
  setItemDiscount(itemDiscount: (itemDiscount: Money) => void): this;
  setItemDiscount(itemDiscount: Money | ((itemDiscount: Money) => void)): this {
    if (itemDiscount instanceof Money) {
      this.itemDiscount = itemDiscount;
    } else {
      const itemDiscountInstance = new Money();
      itemDiscount(itemDiscountInstance);
      this.itemDiscount = itemDiscountInstance;
    }
    return this;
  }

  static fromObject(obj: TAggregatedDiscount) {
    const aggregatedDiscount = new AggregatedDiscount();
    if (obj.invoice_discount) aggregatedDiscount.setInvoiceDiscount(Discount.fromObject(obj.invoice_discount));
    if (obj.item_discount) aggregatedDiscount.setItemDiscount(Money.fromObject(obj.item_discount));
    return aggregatedDiscount;
  }
}
