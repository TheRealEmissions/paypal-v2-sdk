import { IUtility, Static, Utility } from "../Utility.js";

export type TResponseAgreedRefundDetails = {
  merchant_agreed_refund?: boolean;
  merchant_agreed_refund_time?: string;
};

export class ResponseAgreedRefundDetails
  extends Utility
  implements Static<IUtility, typeof ResponseAgreedRefundDetails>
{
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

  public override getFields<T extends TResponseAgreedRefundDetails>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TResponseAgreedRefundDetails) {
    const responseAgreedRefundDetails = new ResponseAgreedRefundDetails();
    if (obj.merchant_agreed_refund) responseAgreedRefundDetails.setMerchantAgreedRefund(obj.merchant_agreed_refund);
    if (obj.merchant_agreed_refund_time)
      responseAgreedRefundDetails.setMerchantAgreedRefundTime(obj.merchant_agreed_refund_time);
    return responseAgreedRefundDetails;
  }
}
