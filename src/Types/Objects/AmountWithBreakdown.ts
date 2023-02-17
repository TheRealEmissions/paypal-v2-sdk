import Types, { ITypes, StaticImplements } from "../Types.js";
import AggregatedDiscount, { TAggregatedDiscount } from "./AggregatedDiscount.js";
import CustomAmount, { TCustomAmount } from "./CustomAmount.js";
import Money, { TMoney } from "./Money.js";
import ShippingCost, { TShippingCost } from "./ShippingCost.js";

export type TAmountWithBreakdown = {
  custom?: TCustomAmount;
  discount?: TAggregatedDiscount;
  item_total?: TMoney;
  shipping?: TShippingCost;
  tax_total?: TMoney;
};

class AmountWithBreakdown extends Types implements StaticImplements<ITypes, typeof AmountWithBreakdown> {
  custom?: CustomAmount;
  discount?: AggregatedDiscount;
  itemTotal?: Money;
  shipping?: ShippingCost;
  taxTotal?: Money;
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

  static fromObject(obj: TAmountWithBreakdown) {
    const amountWithBreakdown = new AmountWithBreakdown();
    if (obj.custom) amountWithBreakdown.setCustom(CustomAmount.fromObject(obj.custom));
    if (obj.discount) amountWithBreakdown.setDiscount(AggregatedDiscount.fromObject(obj.discount));
    if (obj.item_total) amountWithBreakdown.setItemTotal(Money.fromObject(obj.item_total));
    if (obj.shipping) amountWithBreakdown.setShipping(ShippingCost.fromObject(obj.shipping));
    if (obj.tax_total) amountWithBreakdown.setTaxTotal(Money.fromObject(obj.tax_total));
    return amountWithBreakdown;
  }
}

export default AmountWithBreakdown;
