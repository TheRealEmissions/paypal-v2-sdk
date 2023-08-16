import { Utility, IUtility, Static } from "../../Utility.js";
import { Money, TMoney } from "./Money.js";
import { RefundDetail, TRefundDetail } from "./RefundDetail.js";

export type TRefunds = {
  readonly refund_amount?: TMoney;
  readonly transactions?: TRefundDetail[];
};

export class Refunds extends Utility implements Static<IUtility, typeof Refunds> {
  private refundAmount?: Money;
  private transactions?: RefundDetail[];

  public setRefundAmount(refundAmount: Money): this;
  public setRefundAmount(refundAmount: (money: Money) => void): this;
  public setRefundAmount(refundAmount: Money | ((money: Money) => void)) {
    if (refundAmount instanceof Money) this.refundAmount = refundAmount;
    else {
      const money = new Money();
      refundAmount(money);
      this.refundAmount = money;
    }
    return this;
  }
  public getRefundAmount() {
    return this.refundAmount;
  }

  public setTransactions(...transactions: RefundDetail[]): this;
  public setTransactions(...transactions: ((refundDetail: RefundDetail) => void)[]): this;
  public setTransactions(...transactions: (RefundDetail | ((refundDetail: RefundDetail) => void))[]) {
    this.transactions = transactions.map((x) => {
      if (x instanceof RefundDetail) return x;
      else {
        const refundDetail = new RefundDetail();
        x(refundDetail);
        return refundDetail;
      }
    });
    return this;
  }
  public getTransactions() {
    return this.transactions;
  }

  public override getFields<T extends TRefunds>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TRefunds) {
    const refunds = new Refunds();
    if (obj.refund_amount) refunds.setRefundAmount(Money.fromObject(obj.refund_amount));
    if (obj.transactions) refunds.setTransactions(...obj.transactions.map((x) => RefundDetail.fromObject(x)));
    return refunds;
  }
}
