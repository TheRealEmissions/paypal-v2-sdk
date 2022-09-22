import Types from "../Types";
import Money, { TMoney } from "./Money";
import RefundDetail, { TRefundDetail } from "./RefundDetail";

export type TRefunds = {
  readonly refund_amount?: TMoney;
  readonly transactions?: TRefundDetail[];
};

class Refunds extends Types {
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

  override fromObject(obj: TRefunds) {
    this.refundAmount = obj.refund_amount ? new Money().fromObject(obj.refund_amount) : undefined;
    this.transactions = obj.transactions?.map((transaction) => new RefundDetail().fromObject(transaction));
    return this;
  }
}

export default Refunds;
