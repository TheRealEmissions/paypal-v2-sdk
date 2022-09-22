import Types from "../Types";
import PartialPayment, { TPartialPayment } from "./PartialPayment";

export type TConfiguration = {
  allow_tip?: boolean;
  partial_payment?: TPartialPayment;
  tax_calculated_after_discount?: boolean;
  tax_inclusive?: boolean;
  template_id?: string;
};

class Configuration extends Types {
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

  override fromObject(obj: TConfiguration) {
    this.allowTip = obj.allow_tip;
    this.partialPayment = obj.partial_payment ? new PartialPayment().fromObject(obj.partial_payment) : undefined;
    this.taxCalculatedAfterDiscount = obj.tax_calculated_after_discount;
    this.taxInclusive = obj.tax_inclusive;
    this.templateId = obj.template_id;
    return this;
  }
}

export default Configuration;
