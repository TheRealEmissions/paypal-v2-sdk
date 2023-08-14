import { IUtility, Static, Utility } from "../Utility.js";

export type TRefundId = {
  refund_id?: string;
};

export class RefundId extends Utility implements Static<IUtility, typeof RefundId> {
  private refundId!: string;

  public setRefundId(refundId: string) {
    this.refundId = refundId;
    return this;
  }
  public getRefundId() {
    return this.refundId;
  }

  public override getFields<T extends TRefundId>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TRefundId) {
    const refundId = new RefundId();
    if (obj.refund_id) refundId.setRefundId(obj.refund_id);
    return refundId;
  }
}
