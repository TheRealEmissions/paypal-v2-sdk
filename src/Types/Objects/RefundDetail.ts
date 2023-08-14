import { PaymentDetailMethod } from "../Enums/PaymentDetailMethod.js";
import { PaymentDetailType } from "../Enums/PaymentDetailType.js";
import { Utility, IUtility, Static } from "../Utility.js";
import { Money, TMoney } from "./Money.js";

export type TRefundDetail = {
  method: keyof typeof PaymentDetailMethod;
  amount?: TMoney;
  refund_date?: string;
  readonly refund_id?: string;
  readonly type?: keyof typeof PaymentDetailType;
};

export class RefundDetail extends Utility implements Static<IUtility, typeof RefundDetail> {
  private method?: PaymentDetailMethod;
  private amount?: Money;
  private refundDate?: string;
  private refundId?: string;
  private type?: PaymentDetailType;

  public setMethod(method: PaymentDetailMethod): this;
  public setMethod(method: (method: typeof PaymentDetailMethod) => PaymentDetailMethod): this;
  public setMethod(method: PaymentDetailMethod | ((method: typeof PaymentDetailMethod) => PaymentDetailMethod)) {
    if (typeof method === "function") this.method = method(PaymentDetailMethod);
    else this.method = method;
    return this;
  }
  public getMethod() {
    return this.method;
  }

  public setAmount(amount: Money): this;
  public setAmount(amount: (money: Money) => void): this;
  public setAmount(amount: Money | ((money: Money) => void)) {
    if (amount instanceof Money) this.amount = amount;
    else {
      const money = new Money();
      amount(money);
      this.amount = money;
    }
    return this;
  }
  public getAmount() {
    return this.amount;
  }

  public setRefundDate(refundDate: string) {
    this.refundDate = refundDate;
    return this;
  }
  public getRefundDate() {
    return this.refundDate;
  }

  public setRefundId(refundId: string) {
    this.refundId = refundId;
    return this;
  }
  public getRefundId() {
    return this.refundId;
  }

  public setType(type: PaymentDetailType): this;
  public setType(type: (type: typeof PaymentDetailType) => PaymentDetailType): this;
  public setType(type: PaymentDetailType | ((type: typeof PaymentDetailType) => PaymentDetailType)) {
    if (typeof type === "function") this.type = type(PaymentDetailType);
    else this.type = type;
    return this;
  }
  public getType() {
    return this.type;
  }

  public override getFields<T extends Partial<TRefundDetail>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TRefundDetail) {
    const refundDetail = new RefundDetail();
    refundDetail.setMethod(PaymentDetailMethod[obj.method]);
    if (obj.amount) refundDetail.setAmount(Money.fromObject(obj.amount));
    if (obj.refund_date) refundDetail.setRefundDate(obj.refund_date);
    if (obj.refund_id) refundDetail.setRefundId(obj.refund_id);
    if (obj.type) refundDetail.setType(PaymentDetailType[obj.type]);
    return refundDetail;
  }
}
