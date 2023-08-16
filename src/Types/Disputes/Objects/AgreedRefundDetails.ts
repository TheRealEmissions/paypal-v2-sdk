import { IUtility, Static, Utility } from "../../Utility";

export type TAgreedRefundDetails = {
  merchant_agreed_refund?: boolean;
  merchant_agreed_refund_time?: string;
};

export class AgreedRefundDetails extends Utility implements Static<IUtility, typeof AgreedRefundDetails> {
  private merchantAgreedRefund?: boolean;
  private merchantAgreedRefundTime?: string;

  public setMerchantAgreedRefund(merchantAgreedRefund: boolean) {
    this.merchantAgreedRefund = merchantAgreedRefund;
    return this;
  }
  public getMerchantAgreedRefund() {
    return this.merchantAgreedRefund;
  }

  public setMerchantAgreedRefundTime(merchantAgreedRefundTime: string) {
    this.merchantAgreedRefundTime = merchantAgreedRefundTime;
    return this;
  }
  public getMerchantAgreedRefundTime() {
    return this.merchantAgreedRefundTime;
  }

  public override getFields<T extends TAgreedRefundDetails>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TAgreedRefundDetails) {
    const agreedRefundDetails = new AgreedRefundDetails();
    if (obj.merchant_agreed_refund !== undefined)
      agreedRefundDetails.setMerchantAgreedRefund(obj.merchant_agreed_refund);
    if (obj.merchant_agreed_refund_time !== undefined)
      agreedRefundDetails.setMerchantAgreedRefundTime(obj.merchant_agreed_refund_time);
    return agreedRefundDetails;
  }
}
