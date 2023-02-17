import { PaymentDetailMethod } from "../Enums/PaymentDetailMethod.js";
import { PaymentDetailType } from "../Enums/PaymentDetailType.js";
import Types, { ITypes, StaticImplements } from "../Types.js";
import Money, { TMoney } from "./Money.js";

export type TRefundDetail = {
  method: keyof typeof PaymentDetailMethod;
  amount?: TMoney;
  refund_date?: string;
  readonly refund_id?: string;
  readonly type?: keyof typeof PaymentDetailType;
};

class RefundDetail extends Types implements StaticImplements<ITypes, typeof RefundDetail> {
  method?: PaymentDetailMethod;
  amount?: Money;
  refundDate?: string;
  refundId?: string;
  type?: PaymentDetailType;
  constructor() {
    super();
  }

  setMethod(method: PaymentDetailMethod) {
    this.method = method;
    return this;
  }

  setAmount(amount: Money) {
    this.amount = amount;
    return this;
  }

  setRefundDate(refundDate: string) {
    this.refundDate = refundDate;
    return this;
  }

  setRefundId(refundId: string) {
    this.refundId = refundId;
    return this;
  }

  setType(type: PaymentDetailType) {
    this.type = type;
    return this;
  }

  static fromObject(obj: TRefundDetail) {
    const refundDetail = new RefundDetail();
    refundDetail.setMethod(PaymentDetailMethod[obj.method]);
    if (obj.amount) refundDetail.setAmount(Money.fromObject(obj.amount));
    if (obj.refund_date) refundDetail.setRefundDate(obj.refund_date);
    if (obj.refund_id) refundDetail.setRefundId(obj.refund_id);
    if (obj.type) refundDetail.setType(PaymentDetailType[obj.type]);
    return refundDetail;
  }
}

export default RefundDetail;
