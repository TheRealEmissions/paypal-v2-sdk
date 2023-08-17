import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { BillingInfo, TBillingInfo } from "./BillingInfo.js";
import { ContactInformation, TContactInformation } from "./ContactInformation.js";

export type TRecipientInfo = {
  billing_info?: TBillingInfo;
  shipping_info?: TContactInformation;
};

export class RecipientInfo extends Utility implements Static<IUtility, typeof RecipientInfo> {
  private billingInfo?: BillingInfo;
  private shippingInfo?: ContactInformation;

  public setBillingInfo(billingInfo: BillingInfo): this;
  public setBillingInfo(billingInfo: (billingInfo: OnlySetters<BillingInfo>) => void): this;
  public setBillingInfo(billingInfo: BillingInfo | ((billingInfo: OnlySetters<BillingInfo>) => void)) {
    if (billingInfo instanceof BillingInfo) this.billingInfo = billingInfo;
    else {
      const info = new BillingInfo();
      billingInfo(info);
      this.billingInfo = info;
    }
    return this;
  }
  public getBillingInfo() {
    return this.billingInfo;
  }

  public setShippingInfo(shippingInfo: ContactInformation): this;
  public setShippingInfo(shippingInfo: (contactInformation: OnlySetters<ContactInformation>) => void): this;
  public setShippingInfo(
    shippingInfo: ContactInformation | ((contactInformation: OnlySetters<ContactInformation>) => void)
  ) {
    if (shippingInfo instanceof ContactInformation) this.shippingInfo = shippingInfo;
    else {
      const info = new ContactInformation();
      shippingInfo(info);
      this.shippingInfo = info;
    }
    return this;
  }
  public getShippingInfo() {
    return this.shippingInfo;
  }

  public override getFields<T extends TRecipientInfo>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TRecipientInfo) {
    const recipientInfo = new RecipientInfo();
    if (obj.billing_info) recipientInfo.setBillingInfo(BillingInfo.fromObject(obj.billing_info));
    if (obj.shipping_info) recipientInfo.setShippingInfo(ContactInformation.fromObject(obj.shipping_info));
    return recipientInfo;
  }
}
