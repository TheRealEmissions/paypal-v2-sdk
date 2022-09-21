import PayPal from "../../PayPal";
import Types from "../Types";
import AggregatedDiscount from "./AggregatedDiscount";
import CustomAmount from "./CustomAmount";
import Money from "./Money";
import ShippingCost from "./ShippingCost";

class AmountWithBreakdown extends Types {
  custom: CustomAmount;
  discount: AggregatedDiscount;
  itemTotal: Money;
  shipping: ShippingCost;
  taxTotal: Money;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setCustom(custom: CustomAmount) {
    this.custom = custom;
    return this;
  }

  setDiscount(discount: AggregatedDiscount) {
    this.discount = discount;
    return this;
  }

  setItemTotal(itemTotal: Money) {
    this.itemTotal = itemTotal;
    return this;
  }

  setShipping(shipping: ShippingCost) {
    this.shipping = shipping;
    return this;
  }

  setTaxTotal(taxTotal: Money) {
    this.taxTotal = taxTotal;
    return this;
  }
}

export default AmountWithBreakdown;
