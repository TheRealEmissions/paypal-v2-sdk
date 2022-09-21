import PayPal from "../../PayPal";
import Types from "../Types";
import PartialPayment from "./PartialPayment";

class Configuration extends Types {
  allowTip: boolean;
  partialPayment: PartialPayment;
  taxCalculatedAfterDiscount: boolean;
  taxInclusive: boolean;
  templateId: string;

  constructor(PayPal: PayPal) {
    super(PayPal);
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
}

export default Configuration;
