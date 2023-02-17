import Types, { ITypes, StaticImplements } from "../Types.js";
import BillingInfo, { TBillingInfo } from "./BillingInfo.js";
import ContactInformation, { TContactInformation } from "./ContactInformation.js";

export type TRecipientInfo = {
  billing_info?: TBillingInfo;
  shipping_info?: TContactInformation;
};

class RecipientInfo extends Types implements StaticImplements<ITypes, typeof RecipientInfo> {
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

  static fromObject(obj: TRecipientInfo) {
    const recipientInfo = new RecipientInfo();
    if (obj.billing_info) recipientInfo.setBillingInfo(BillingInfo.fromObject(obj.billing_info));
    if (obj.shipping_info) recipientInfo.setShippingInfo(ContactInformation.fromObject(obj.shipping_info));
    return recipientInfo;
  }
}

export default RecipientInfo;
