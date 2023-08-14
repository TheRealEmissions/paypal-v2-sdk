import { Utility, IUtility, Static } from "../Utility.js";
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

export class AmountWithBreakdown extends Utility implements Static<IUtility, typeof AmountWithBreakdown> {
  private custom?: CustomAmount;
  private discount?: AggregatedDiscount;
  private itemTotal?: Money;
  private shipping?: ShippingCost;
  private taxTotal?: Money;

  public setCustom(custom: CustomAmount): this;
  public setCustom(custom: (custom: CustomAmount) => void): this;
  public setCustom(custom: CustomAmount | ((custom: CustomAmount) => void)): this {
    if (custom instanceof CustomAmount) {
      this.custom = custom;
    } else {
      const customInstance = new CustomAmount();
      custom(customInstance);
      this.custom = customInstance;
    }
    return this;
  }
  public getCustom() {
    return this.custom;
  }

  public setDiscount(discount: AggregatedDiscount): this;
  public setDiscount(discount: (discount: AggregatedDiscount) => void): this;
  public setDiscount(discount: AggregatedDiscount | ((discount: AggregatedDiscount) => void)): this {
    if (discount instanceof AggregatedDiscount) {
      this.discount = discount;
    } else {
      const discountInstance = new AggregatedDiscount();
      discount(discountInstance);
      this.discount = discountInstance;
    }
    return this;
  }
  public getDiscount() {
    return this.discount;
  }

  public setItemTotal(itemTotal: Money): this;
  public setItemTotal(itemTotal: (itemTotal: Money) => void): this;
  public setItemTotal(itemTotal: Money | ((itemTotal: Money) => void)): this {
    if (itemTotal instanceof Money) {
      this.itemTotal = itemTotal;
    } else {
      const itemTotalInstance = new Money();
      itemTotal(itemTotalInstance);
      this.itemTotal = itemTotalInstance;
    }
    return this;
  }
  public getItemTotal() {
    return this.itemTotal;
  }

  public setShipping(shipping: ShippingCost): this;
  public setShipping(shipping: (shipping: ShippingCost) => void): this;
  public setShipping(shipping: ShippingCost | ((shipping: ShippingCost) => void)): this {
    if (shipping instanceof ShippingCost) {
      this.shipping = shipping;
    } else {
      const shippingInstance = new ShippingCost();
      shipping(shippingInstance);
      this.shipping = shippingInstance;
    }
    return this;
  }
  public getShipping() {
    return this.shipping;
  }

  public setTaxTotal(taxTotal: Money): this;
  public setTaxTotal(taxTotal: (taxTotal: Money) => void): this;
  public setTaxTotal(taxTotal: Money | ((taxTotal: Money) => void)): this {
    if (taxTotal instanceof Money) {
      this.taxTotal = taxTotal;
    } else {
      const taxTotalInstance = new Money();
      taxTotal(taxTotalInstance);
      this.taxTotal = taxTotalInstance;
    }
    return this;
  }
  public getTaxTotal() {
    return this.taxTotal;
  }

  public override getFields<T extends Partial<TAmountWithBreakdown>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TAmountWithBreakdown) {
    const amountWithBreakdown = new AmountWithBreakdown();
    if (obj.custom) amountWithBreakdown.setCustom(CustomAmount.fromObject(obj.custom));
    if (obj.discount) amountWithBreakdown.setDiscount(AggregatedDiscount.fromObject(obj.discount));
    if (obj.item_total) amountWithBreakdown.setItemTotal(Money.fromObject(obj.item_total));
    if (obj.shipping) amountWithBreakdown.setShipping(ShippingCost.fromObject(obj.shipping));
    if (obj.tax_total) amountWithBreakdown.setTaxTotal(Money.fromObject(obj.tax_total));
    return amountWithBreakdown;
  }
}
