import Types, { ITypes, StaticImplements } from "../Types.js";
import PartialPayment, { TPartialPayment } from "./PartialPayment.js";

export type TConfiguration = {
  allow_tip?: boolean;
  partial_payment?: TPartialPayment;
  tax_calculated_after_discount?: boolean;
  tax_inclusive?: boolean;
  template_id?: string;
};

class Configuration extends Types implements StaticImplements<ITypes, typeof Configuration> {
  allowTip?: boolean;
  partialPayment?: PartialPayment;
  taxCalculatedAfterDiscount?: boolean;
  taxInclusive?: boolean;
  templateId?: string;

  constructor() {
    super();
  }

  setAllowTip(allowTip: boolean) {
    this.allowTip = allowTip;
    return this;
  }

  setPartialPayment(partialPayment: PartialPayment) {
    this.partialPayment = partialPayment;
    return this;
  }

  setTaxCalculatedAfterDiscount(taxCalculatedAfterDiscount: boolean) {
    this.taxCalculatedAfterDiscount = taxCalculatedAfterDiscount;
    return this;
  }

  setTaxInclusive(taxInclusive: boolean) {
    this.taxInclusive = taxInclusive;
    return this;
  }

  setTemplateId(templateId: string) {
    this.templateId = templateId;
    return this;
  }

  static fromObject(obj: TConfiguration) {
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

export default Configuration;
