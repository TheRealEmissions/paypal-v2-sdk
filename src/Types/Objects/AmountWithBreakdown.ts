import Types, { ITypes, Static } from "@Types/Types.js";
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

class AmountWithBreakdown extends Types implements Static<ITypes, typeof AmountWithBreakdown> {
  custom?: CustomAmount;
  discount?: AggregatedDiscount;
  itemTotal?: Money;
  shipping?: ShippingCost;
  taxTotal?: Money;
  constructor() {
    super();
  }

  setCustom(custom: CustomAmount | ((custom: CustomAmount) => void)) {
    if (custom instanceof CustomAmount) this.custom = custom;
    else {
      const customAmount = new CustomAmount();
      custom(customAmount);
      this.custom = customAmount;
    }
    return this;
  }

  setDiscount(discount: AggregatedDiscount | ((discount: AggregatedDiscount) => void)) {
    if (discount instanceof AggregatedDiscount) this.discount = discount;
    else {
      const aggregatedDiscount = new AggregatedDiscount();
      discount(aggregatedDiscount);
      this.discount = aggregatedDiscount;
    }
    return this;
  }

  setItemTotal(itemTotal: Money | ((money: Money) => void)) {
    if (itemTotal instanceof Money) this.itemTotal = itemTotal;
    else {
      const money = new Money();
      itemTotal(money);
      this.itemTotal = money;
    }
    return this;
  }

  setShipping(shipping: ShippingCost | ((shipping: ShippingCost) => void)) {
    if (shipping instanceof ShippingCost) this.shipping = shipping;
    else {
      const shippingCost = new ShippingCost();
      shipping(shippingCost);
      this.shipping = shippingCost;
    }
    return this;
  }

  setTaxTotal(taxTotal: Money | ((money: Money) => void)) {
    if (taxTotal instanceof Money) this.taxTotal = taxTotal;
    else {
      const money = new Money();
      taxTotal(money);
      this.taxTotal = money;
    }
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
