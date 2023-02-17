import Types, { ITypes, Static } from "../Types.js";
import Money, { TMoney } from "./Money.js";
import RefundDetail, { TRefundDetail } from "./RefundDetail.js";

export type TRefunds = {
  readonly refund_amount?: TMoney;
  readonly transactions?: TRefundDetail[];
};

class Refunds extends Types implements Static<ITypes, typeof Refunds> {
  refundAmount?: Money;
  transactions?: RefundDetail[];
  constructor() {
    super();
  }

  setRefundAmount(refundAmount: Money) {
    this.refundAmount = refundAmount;
    return this;
  }

  setTransactions(transactions: RefundDetail[]) {
    this.transactions = transactions;
    return this;
  }

  static fromObject(obj: TRefunds) {
    const refunds = new Refunds();
    if (obj.refund_amount) refunds.setRefundAmount(Money.fromObject(obj.refund_amount));
    if (obj.transactions) refunds.setTransactions(obj.transactions.map((x) => RefundDetail.fromObject(x)));
    return refunds;
  }
}

export default Refunds;
