import Types from "../Types";
import Discount, { TDiscount } from "./Discount";
import Money, { TMoney } from "./Money";

export type TAggregatedDiscount = {
  invoice_discount: TDiscount;
  item_discount: TMoney;
};

class AggregatedDiscount extends Types {
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

  override fromObject(obj: TAggregatedDiscount) {
    this.invoiceDiscount = new Discount().fromObject(obj.invoice_discount);
    this.itemDiscount = new Money().fromObject(obj.item_discount);
    return this;
  }
}

export default AggregatedDiscount;
