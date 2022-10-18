import Types from "../Types.js";
import Money, { TMoney } from "./Money.js";
import PaymentDetail, { TPaymentDetail } from "./PaymentDetail.js";

export type TPayments = {
  readonly paid_amount?: TMoney;
  readonly transactions?: TPaymentDetail[];
};

class Payments extends Types {
  paidAmount?: Money;
  transactions?: PaymentDetail[];
  constructor() {
    super();
  }

  setPaidAmount(paidAmount: Money) {
    this.paidAmount = paidAmount;
    return this;
  }

  setTransactions(transactions: PaymentDetail[]) {
    this.transactions = transactions;
    return this;
  }

  override fromObject(obj: TPayments) {
    this.paidAmount = obj.paid_amount ? new Money().fromObject(obj.paid_amount) : undefined;
    this.transactions = obj.transactions?.map((transaction) => new PaymentDetail().fromObject(transaction));
    return this;
  }
}

export default Payments;
