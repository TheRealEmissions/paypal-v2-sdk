import Types, { ITypes, Static } from "../Types";

export type TRefundId = {
  refund_id?: string;
};

class RefundId extends Types implements Static<ITypes, typeof RefundId> {
  refundId!: string;

  constructor() {
    super();
  }

  setRefundId(refundId: string) {
    this.refundId = refundId;
    return this;
  }

  static fromObject(obj: TRefundId) {
    const refundId = new RefundId();
    if (obj.refund_id) refundId.setRefundId(obj.refund_id);
    return refundId;
  }
}

export default RefundId;
