import Types, { ITypes, Static } from "../Types.js";
import Discount, { TDiscount } from "./Discount.js";
import Money, { TMoney } from "./Money.js";

export type TAggregatedDiscount = {
  invoice_discount: TDiscount;
  item_discount: TMoney;
};

class AggregatedDiscount extends Types implements Static<ITypes, typeof AggregatedDiscount> {
  invoiceDiscount?: Discount;
  itemDiscount?: Money;
  constructor() {
    super();
  }

  setInvoiceDiscount(invoiceDiscount: Discount) {
    this.invoiceDiscount = invoiceDiscount;
    return this;
  }

  setItemDiscount(itemDiscount: Money) {
    this.itemDiscount = itemDiscount;
    return this;
  }

  static fromObject(obj: TAggregatedDiscount) {
    const aggregatedDiscount = new AggregatedDiscount();
    if (obj.invoice_discount) aggregatedDiscount.setInvoiceDiscount(Discount.fromObject(obj.invoice_discount));
    if (obj.item_discount) aggregatedDiscount.setItemDiscount(Money.fromObject(obj.item_discount));
    return aggregatedDiscount;
  }
}

export default AggregatedDiscount;
