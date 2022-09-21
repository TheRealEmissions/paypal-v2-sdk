import PayPal from "../../PayPal";
import Types from "../Types";
import AggregatedDiscount, { TAggregatedDiscount } from "./AggregatedDiscount";
import CustomAmount, { TCustomAmount } from "./CustomAmount";
import Money, { TMoney } from "./Money";
import ShippingCost, { TShippingCost } from "./ShippingCost";

export type TAmountWithBreakdown = {
  custom: TCustomAmount;
  discount: TAggregatedDiscount;
  item_total: TMoney;
  shipping: TShippingCost;
  tax_total: TMoney;
};

class AmountWithBreakdown extends Types {
  custom: CustomAmount;
  discount: AggregatedDiscount;
  itemTotal: Money;
  shipping: ShippingCost;
  taxTotal: Money;
  constructor() {
    super();
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

  override fromObject(obj: TAmountWithBreakdown) {
    this.custom = new CustomAmount().fromObject(obj.custom);
    this.discount = new AggregatedDiscount().fromObject(obj.discount);
    this.itemTotal = new Money().fromObject(obj.item_total);
    this.shipping = new ShippingCost().fromObject(obj.shipping);
    this.taxTotal = new Money().fromObject(obj.tax_total);
    return this;
  }
}

export default AmountWithBreakdown;
