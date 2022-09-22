import Types from "../Types";
import AggregatedDiscount, { TAggregatedDiscount } from "./AggregatedDiscount";
import CustomAmount, { TCustomAmount } from "./CustomAmount";
import Money, { TMoney } from "./Money";
import ShippingCost, { TShippingCost } from "./ShippingCost";

export type TAmountWithBreakdown = {
  custom?: TCustomAmount;
  discount?: TAggregatedDiscount;
  item_total?: TMoney;
  shipping?: TShippingCost;
  tax_total?: TMoney;
};

class AmountWithBreakdown extends Types {
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

  override fromObject(obj: TAmountWithBreakdown) {
    this.custom = obj.custom ? new CustomAmount().fromObject(obj.custom) : undefined;
    this.discount = obj.discount ? new AggregatedDiscount().fromObject(obj.discount) : undefined;
    this.itemTotal = obj.item_total ? new Money().fromObject(obj.item_total) : undefined;
    this.shipping = obj.shipping ? new ShippingCost().fromObject(obj.shipping) : undefined;
    this.taxTotal = obj.tax_total ? new Money().fromObject(obj.tax_total) : undefined;
    return this;
  }
}

export default AmountWithBreakdown;
