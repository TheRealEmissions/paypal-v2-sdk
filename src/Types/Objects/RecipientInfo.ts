import Types from "../Types.js";
import BillingInfo, { TBillingInfo } from "./BillingInfo.js";
import ContactInformation, { TContactInformation } from "./ContactInformation.js";

export type TRecipientInfo = {
  billing_info?: TBillingInfo;
  shipping_info?: TContactInformation;
};

class RecipientInfo extends Types {
  billingInfo?: BillingInfo;
  shippingInfo?: ContactInformation;
  constructor() {
    super();
  }

  setBillingInfo(billingInfo: BillingInfo) {
    this.billingInfo = billingInfo;
    return this;
  }

  setShippingInfo(shippingInfo: ContactInformation) {
    this.shippingInfo = shippingInfo;
    return this;
  }

  override fromObject(obj: TRecipientInfo) {
    this.billingInfo = obj.billing_info ? new BillingInfo().fromObject(obj.billing_info) : undefined;
    this.shippingInfo = obj.shipping_info ? new ContactInformation().fromObject(obj.shipping_info) : undefined;
    return this;
  }
}

export default RecipientInfo;
