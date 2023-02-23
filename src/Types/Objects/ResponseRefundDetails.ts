import Types, { Static, ITypes } from "../Types";
import Money, { TMoney } from "./Money";

export type TResponseRefundDetails = {
  allowed_refund_amount?: TMoney;
};

class ResponseRefundDetails extends Types implements Static<ITypes, typeof ResponseRefundDetails> {
  allowedRefundAmount?: Money;

  constructor() {
    super();
  }

  setAllowedRefundAmount(allowedRefundAmount: Money | ((type: Money) => void)) {
    if (allowedRefundAmount instanceof Money) this.allowedRefundAmount = allowedRefundAmount;
    else allowedRefundAmount((this.allowedRefundAmount = new Money()));
    return this;
  }

  static fromObject(obj: TResponseRefundDetails) {
    const responseRefundDetails = new ResponseRefundDetails();
    if (obj.allowed_refund_amount)
      responseRefundDetails.setAllowedRefundAmount(Money.fromObject(obj.allowed_refund_amount));
    return responseRefundDetails;
  }
}

export default ResponseRefundDetails;
