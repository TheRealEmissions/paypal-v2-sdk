import Types, { Static, ITypes } from "../Types";

export type TResponseAgreedRefundDetails = {
  merchant_agreed_refund?: boolean;
  merchant_agreed_refund_time?: string;
};

class ResponseAgreedRefundDetails extends Types implements Static<ITypes, typeof ResponseAgreedRefundDetails> {
  merchantAgreedRefund?: boolean;
  merchantAgreedRefundTime?: string;

  constructor() {
    super();
  }

  setMerchantAgreedRefund(merchantAgreedRefund: boolean) {
    this.merchantAgreedRefund = merchantAgreedRefund;
    return this;
  }

  setMerchantAgreedRefundTime(merchantAgreedRefundTime: string) {
    this.merchantAgreedRefundTime = merchantAgreedRefundTime;
    return this;
  }

  static fromObject(obj: TResponseAgreedRefundDetails) {
    const responseAgreedRefundDetails = new ResponseAgreedRefundDetails();
    if (obj.merchant_agreed_refund) responseAgreedRefundDetails.setMerchantAgreedRefund(obj.merchant_agreed_refund);
    if (obj.merchant_agreed_refund_time)
      responseAgreedRefundDetails.setMerchantAgreedRefundTime(obj.merchant_agreed_refund_time);
    return responseAgreedRefundDetails;
  }
}

export default ResponseAgreedRefundDetails;
