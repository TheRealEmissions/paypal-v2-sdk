import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { Discount, TDiscount } from "./Discount.js";
import { Money, TMoney } from "./Money.js";

export type TAggregatedDiscount = {
  invoice_discount?: TDiscount;
  item_discount?: TMoney;
};

type AggregatedDiscountFields = {
  readonly invoiceDiscount?: Discount;
  readonly itemDiscount?: Money;
};

export class AggregatedDiscount extends Utility implements Static<IUtility, typeof AggregatedDiscount> {
  private invoiceDiscount?: Discount;
  private itemDiscount?: Money;

  public setInvoiceDiscount(invoiceDiscount: Discount): this;
  public setInvoiceDiscount(invoiceDiscount: (invoiceDiscount: OnlySetters<Discount>) => void): this;
  public setInvoiceDiscount(invoiceDiscount: Discount | ((invoiceDiscount: OnlySetters<Discount>) => void)) {
    if (invoiceDiscount instanceof Discount) {
      this.invoiceDiscount = invoiceDiscount;
    } else {
      const invoiceDiscountInstance = new Discount();
      invoiceDiscount(invoiceDiscountInstance);
      this.invoiceDiscount = invoiceDiscountInstance;
    }
    return this;
  }
  public getInvoiceDiscount() {
    return this.invoiceDiscount;
  }

  public setItemDiscount(itemDiscount: Money): this;
  public setItemDiscount(itemDiscount: (itemDiscount: OnlySetters<Money>) => void): this;
  public setItemDiscount(itemDiscount: Money | ((itemDiscount: OnlySetters<Money>) => void)): this {
    if (itemDiscount instanceof Money) {
      this.itemDiscount = itemDiscount;
    } else {
      const itemDiscountInstance = new Money();
      itemDiscount(itemDiscountInstance);
      this.itemDiscount = itemDiscountInstance;
    }
    return this;
  }
  public getItemDiscount() {
    return this.itemDiscount;
  }

  public override getFields<T extends Partial<AggregatedDiscountFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TAggregatedDiscount) {
    const aggregatedDiscount = new AggregatedDiscount();
    if (obj.invoice_discount) aggregatedDiscount.setInvoiceDiscount(Discount.fromObject(obj.invoice_discount));
    if (obj.item_discount) aggregatedDiscount.setItemDiscount(Money.fromObject(obj.item_discount));
    return aggregatedDiscount;
  }
}
