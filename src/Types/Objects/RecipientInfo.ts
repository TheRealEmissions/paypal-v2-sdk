import Types, { ITypes, Static } from "../Types.js";
import BillingInfo, { TBillingInfo } from "./BillingInfo.js";
import ContactInformation, { TContactInformation } from "./ContactInformation.js";

export type TRecipientInfo = {
  billing_info?: TBillingInfo;
  shipping_info?: TContactInformation;
};

class RecipientInfo extends Types implements Static<ITypes, typeof RecipientInfo> {
  billingInfo?: BillingInfo;
  shippingInfo?: ContactInformation;
  constructor() {
    super();
  }

  setBillingInfo(billingInfo: BillingInfo | ((billingInfo: BillingInfo) => void)) {
    if (billingInfo instanceof BillingInfo) this.billingInfo = billingInfo;
    else {
      const info = new BillingInfo();
      billingInfo(info);
      this.billingInfo = info;
    }
    return this;
  }

  setShippingInfo(shippingInfo: ContactInformation | ((contactInformation: ContactInformation) => void)) {
    if (shippingInfo instanceof ContactInformation) this.shippingInfo = shippingInfo;
    else {
      const info = new ContactInformation();
      shippingInfo(info);
      this.shippingInfo = info;
    }
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
