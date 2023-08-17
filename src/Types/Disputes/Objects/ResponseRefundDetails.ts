import { IUtility, OnlySetters, Static, Utility } from "../../Utility.js";
import { Money, TMoney } from "./Money.js";

export type TResponseRefundDetails = {
  allowed_refund_amount?: TMoney;
};

export class ResponseRefundDetails extends Utility implements Static<IUtility, typeof ResponseRefundDetails> {
  private allowedRefundAmount?: Money;

  public setAllowedRefundAmount(allowedRefundAmount: Money): this;
  public setAllowedRefundAmount(allowedRefundAmount: (type: OnlySetters<Money>) => void): this;
  public setAllowedRefundAmount(allowedRefundAmount: Money | ((type: OnlySetters<Money>) => void)) {
    if (allowedRefundAmount instanceof Money) this.allowedRefundAmount = allowedRefundAmount;
    else allowedRefundAmount((this.allowedRefundAmount = new Money()));
    return this;
  }
  public getAllowedRefundAmount() {
    return this.allowedRefundAmount;
  }

  public override getFields<T extends TResponseRefundDetails>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TResponseRefundDetails) {
    const responseRefundDetails = new ResponseRefundDetails();
    if (obj.allowed_refund_amount)
      responseRefundDetails.setAllowedRefundAmount(Money.fromObject(obj.allowed_refund_amount));
    return responseRefundDetails;
  }
}
