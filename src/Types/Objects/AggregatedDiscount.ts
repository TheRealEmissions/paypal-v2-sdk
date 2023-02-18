import Types, { ITypes, Static } from "@Types/Types.js";
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

  setInvoiceDiscount(invoiceDiscount: Discount | ((discount: Discount) => void)) {
    if (invoiceDiscount instanceof Discount) this.invoiceDiscount = invoiceDiscount;
    else {
      const discount = new Discount();
      invoiceDiscount(discount);
      this.invoiceDiscount = discount;
    }
    return this;
  }

  setItemDiscount(itemDiscount: Money | ((money: Money) => void)) {
    if (itemDiscount instanceof Money) this.itemDiscount = itemDiscount;
    else {
      const money = new Money();
      itemDiscount(money);
      this.itemDiscount = money;
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

export default AggregatedDiscount;
