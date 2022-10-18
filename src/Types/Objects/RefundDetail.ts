import { PaymentDetailMethod } from "../Enums/PaymentDetailMethod.js";
import { PaymentDetailType } from "../Enums/PaymentDetailType.js";
import Types from "../Types.js";
import Money, { TMoney } from "./Money.js";

export type TRefundDetail = {
  method: string;
  amount?: TMoney;
  refund_date?: string;
  readonly refund_id?: string;
  readonly type?: string;
};

class RefundDetail extends Types {
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

  override fromObject(obj: TRefundDetail) {
    this.method = PaymentDetailMethod[obj.method as keyof typeof PaymentDetailMethod];
    this.amount = obj.amount ? new Money().fromObject(obj.amount) : undefined;
    this.refundDate = obj.refund_date;
    this.refundId = obj.refund_id;
    this.type = PaymentDetailType[obj.type as keyof typeof PaymentDetailType];
    return this;
  }
}

export default RefundDetail;
