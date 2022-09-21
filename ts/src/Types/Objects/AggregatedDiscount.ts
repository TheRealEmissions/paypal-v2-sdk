import PayPal from "../../PayPal";
import Types from "../Types";
import Discount from "./Discount";
import Money from "./Money";

class AggregatedDiscount extends Types {
  invoiceDiscount: Discount;
  itemDiscount: Money;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setInvoiceDiscount(invoiceDiscount: Discount) {
    this.invoiceDiscount = invoiceDiscount;
    return this;
  }

  setItemDiscount(itemDiscount: Money) {
    this.itemDiscount = itemDiscount;
    return this;
  }
}

export default AggregatedDiscount;
