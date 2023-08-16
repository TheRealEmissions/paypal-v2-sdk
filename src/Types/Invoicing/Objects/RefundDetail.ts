import { PaymentMethod } from "../Enums/PaymentMethod.js";
import { PaymentType } from "../Enums/PaymentType.js";
import { Utility, IUtility, Static } from "../../Utility.js";
import { Money, TMoney } from "./Money.js";

export type TRefundDetail = {
  method: keyof typeof PaymentMethod;
  amount?: TMoney;
  refund_date?: string;
  readonly refund_id?: string;
  readonly type?: keyof typeof PaymentType;
};

export class RefundDetail extends Utility implements Static<IUtility, typeof RefundDetail> {
  private method?: PaymentMethod;
  private amount?: Money;
  private refundDate?: string;
  private refundId?: string;
  private type?: PaymentType;

  public setMethod(method: PaymentMethod): this;
  public setMethod(method: (method: typeof PaymentMethod) => PaymentMethod): this;
  public setMethod(method: PaymentMethod | ((method: typeof PaymentMethod) => PaymentMethod)) {
    if (typeof method === "function") this.method = method(PaymentMethod);
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

  public setType(type: PaymentType): this;
  public setType(type: (type: typeof PaymentType) => PaymentType): this;
  public setType(type: PaymentType | ((type: typeof PaymentType) => PaymentType)) {
    if (typeof type === "function") this.type = type(PaymentType);
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
    refundDetail.setMethod(PaymentMethod[obj.method]);
    if (obj.amount) refundDetail.setAmount(Money.fromObject(obj.amount));
    if (obj.refund_date) refundDetail.setRefundDate(obj.refund_date);
    if (obj.refund_id) refundDetail.setRefundId(obj.refund_id);
    if (obj.type) refundDetail.setType(PaymentType[obj.type]);
    return refundDetail;
  }
}
