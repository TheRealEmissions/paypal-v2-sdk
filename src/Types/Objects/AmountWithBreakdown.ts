import Types, { ITypes, Static } from "../Types.js";
import { AggregatedDiscount, TAggregatedDiscount } from "./AggregatedDiscount.js";
import { CustomAmount, TCustomAmount } from "./CustomAmount.js";
import { Money, TMoney } from "./Money.js";
import { ShippingCost, TShippingCost } from "./ShippingCost.js";

export type TAmountWithBreakdown = {
  custom?: TCustomAmount;
  discount?: TAggregatedDiscount;
  item_total?: TMoney;
  shipping?: TShippingCost;
  tax_total?: TMoney;
};

export class AmountWithBreakdown extends Types implements Static<ITypes, typeof AmountWithBreakdown> {
  custom?: CustomAmount;
  discount?: AggregatedDiscount;
  itemTotal?: Money;
  shipping?: ShippingCost;
  taxTotal?: Money;

  setCustom(custom: CustomAmount): this;
  setCustom(custom: (custom: CustomAmount) => void): this;
  setCustom(custom: CustomAmount | ((custom: CustomAmount) => void)): this {
    if (custom instanceof CustomAmount) {
      this.custom = custom;
    } else {
      const customInstance = new CustomAmount();
      custom(customInstance);
      this.custom = customInstance;
    }
    return this;
  }

  setDiscount(discount: AggregatedDiscount): this;
  setDiscount(discount: (discount: AggregatedDiscount) => void): this;
  setDiscount(discount: AggregatedDiscount | ((discount: AggregatedDiscount) => void)): this {
    if (discount instanceof AggregatedDiscount) {
      this.discount = discount;
    } else {
      const discountInstance = new AggregatedDiscount();
      discount(discountInstance);
      this.discount = discountInstance;
    }
    return this;
  }

  setItemTotal(itemTotal: Money): this;
  setItemTotal(itemTotal: (itemTotal: Money) => void): this;
  setItemTotal(itemTotal: Money | ((itemTotal: Money) => void)): this {
    if (itemTotal instanceof Money) {
      this.itemTotal = itemTotal;
    } else {
      const itemTotalInstance = new Money();
      itemTotal(itemTotalInstance);
      this.itemTotal = itemTotalInstance;
    }
    return this;
  }

  setShipping(shipping: ShippingCost): this;
  setShipping(shipping: (shipping: ShippingCost) => void): this;
  setShipping(shipping: ShippingCost | ((shipping: ShippingCost) => void)): this {
    if (shipping instanceof ShippingCost) {
      this.shipping = shipping;
    } else {
      const shippingInstance = new ShippingCost();
      shipping(shippingInstance);
      this.shipping = shippingInstance;
    }
    return this;
  }

  setTaxTotal(taxTotal: Money): this;
  setTaxTotal(taxTotal: (taxTotal: Money) => void): this;
  setTaxTotal(taxTotal: Money | ((taxTotal: Money) => void)): this {
    if (taxTotal instanceof Money) {
      this.taxTotal = taxTotal;
    } else {
      const taxTotalInstance = new Money();
      taxTotal(taxTotalInstance);
      this.taxTotal = taxTotalInstance;
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
