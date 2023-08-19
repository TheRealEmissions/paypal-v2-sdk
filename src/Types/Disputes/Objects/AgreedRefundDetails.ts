import { IUtility, OnlySetters, Static, Utility } from "../../Utility";

export type TAgreedRefundDetails = {
  merchant_agreed_refund?: boolean;
  merchant_agreed_refund_time?: string;
};

type AgreedRefundDetailsFields = {
  readonly merchantAgreedRefund?: boolean;
  readonly merchantAgreedRefundTime?: string;
};

export class AgreedRefundDetails extends Utility implements Static<IUtility, typeof AgreedRefundDetails> {
  private merchantAgreedRefund?: boolean;
  private merchantAgreedRefundTime?: string;

  public setMerchantAgreedRefund(merchantAgreedRefund: boolean): OnlySetters<this> {
    this.merchantAgreedRefund = merchantAgreedRefund;
    return this;
  }
  public getMerchantAgreedRefund() {
    return this.merchantAgreedRefund;
  }

  public setMerchantAgreedRefundTime(merchantAgreedRefundTime: string): OnlySetters<this> {
    this.merchantAgreedRefundTime = merchantAgreedRefundTime;
    return this;
  }
  public getMerchantAgreedRefundTime() {
    return this.merchantAgreedRefundTime;
  }

  public override getFields<T extends AgreedRefundDetailsFields>() {
    return super._getFields<T>();
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
