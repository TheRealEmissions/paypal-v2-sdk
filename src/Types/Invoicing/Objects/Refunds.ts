import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { Money, TMoney } from "./Money.js";
import { RefundDetail, TRefundDetail } from "./RefundDetail.js";

export type TRefunds = {
  readonly refund_amount?: TMoney;
  readonly transactions?: TRefundDetail[];
};

type RefundsFields = {
  readonly refundAmount?: Money;
  readonly transactions?: RefundDetail[];
};

export class Refunds extends Utility implements Static<IUtility, typeof Refunds> {
  private refundAmount?: Money;
  private transactions?: RefundDetail[];

  public setRefundAmount(refundAmount: Money): this;
  public setRefundAmount(refundAmount: (money: OnlySetters<Money>) => void): this;
  public setRefundAmount(refundAmount: Money | ((money: OnlySetters<Money>) => void)) {
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
  public setTransactions(...transactions: ((refundDetail: OnlySetters<RefundDetail>) => void)[]): this;
  public setTransactions(...transactions: (RefundDetail | ((refundDetail: OnlySetters<RefundDetail>) => void))[]) {
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

  public override getFields<T extends RefundsFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TRefunds) {
    const refunds = new Refunds();
    if (obj.refund_amount) refunds.setRefundAmount(Money.fromObject(obj.refund_amount));
    if (obj.transactions) refunds.setTransactions(...obj.transactions.map((x) => RefundDetail.fromObject(x)));
    return refunds;
  }
}
