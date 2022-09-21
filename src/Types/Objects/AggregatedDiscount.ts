import PayPal from "../../PayPal";
import Types from "../Types";
import Discount, { TDiscount } from "./Discount";
import Money, { TMoney } from "./Money";

export type TAggregatedDiscount = {
  discount: TDiscount;
  amount: TMoney;
};

class AggregatedDiscount extends Types {
  invoiceDiscount: Discount;
  itemDiscount: Money;
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
    this.invoiceDiscount = new Discount().fromObject(obj.discount);
    this.itemDiscount = new Money().fromObject(obj.amount);
    return this;
  }
}

export default AggregatedDiscount;
