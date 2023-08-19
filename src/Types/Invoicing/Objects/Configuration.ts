import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { PartialPayment, TPartialPayment } from "./PartialPayment.js";

export type TConfiguration = {
  allow_tip?: boolean;
  partial_payment?: TPartialPayment;
  tax_calculated_after_discount?: boolean;
  tax_inclusive?: boolean;
  template_id?: string;
};

type ConfigurationFields = {
  readonly allowTip?: boolean;
  readonly partialPayment?: PartialPayment;
  readonly taxCalculatedAfterDiscount?: boolean;
  readonly taxInclusive?: boolean;
  readonly templateId?: string;
};

export class Configuration extends Utility implements Static<IUtility, typeof Configuration> {
  private allowTip?: boolean;
  private partialPayment?: PartialPayment;
  private taxCalculatedAfterDiscount?: boolean;
  private taxInclusive?: boolean;
  private templateId?: string;

  public setAllowTip(allowTip: boolean) {
    this.allowTip = allowTip;
    return this;
  }
  public getAllowTip() {
    return this.allowTip;
  }

  public setPartialPayment(partialPayment: PartialPayment): this;
  public setPartialPayment(partialPayment: (partialPayment: OnlySetters<PartialPayment>) => void): this;
  public setPartialPayment(
    partialPayment: PartialPayment | ((partialPayment: OnlySetters<PartialPayment>) => void)
  ): this {
    if (partialPayment instanceof PartialPayment) {
      this.partialPayment = partialPayment;
    } else {
      const partialPaymentInstance = new PartialPayment();
      partialPayment(partialPaymentInstance);
      this.partialPayment = partialPaymentInstance;
    }
    return this;
  }
  public getPartialPayment() {
    return this.partialPayment;
  }

  public setTaxCalculatedAfterDiscount(taxCalculatedAfterDiscount: boolean) {
    this.taxCalculatedAfterDiscount = taxCalculatedAfterDiscount;
    return this;
  }
  public getTaxCalculatedAfterDiscount() {
    return this.taxCalculatedAfterDiscount;
  }

  public setTaxInclusive(taxInclusive: boolean) {
    this.taxInclusive = taxInclusive;
    return this;
  }
  public getTaxInclusive() {
    return this.taxInclusive;
  }

  public setTemplateId(templateId: string) {
    this.templateId = templateId;
    return this;
  }
  public getTemplateId() {
    return this.templateId;
  }

  public override getFields<T extends ConfigurationFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TConfiguration) {
    const configuration = new Configuration();
    if (obj.allow_tip) configuration.setAllowTip(obj.allow_tip);
    if (obj.partial_payment) configuration.setPartialPayment(PartialPayment.fromObject(obj.partial_payment));
    if (obj.tax_calculated_after_discount)
      configuration.setTaxCalculatedAfterDiscount(obj.tax_calculated_after_discount);
    if (obj.tax_inclusive) configuration.setTaxInclusive(obj.tax_inclusive);
    if (obj.template_id) configuration.setTemplateId(obj.template_id);
    return configuration;
  }
}
