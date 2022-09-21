import Types from "../Types";
import Money, { TMoney } from "./Money";
import PaymentDetail, { TPaymentDetail } from "./PaymentDetail";

export type TPayments = {
  paid_amount: TMoney;
  transactions: TPaymentDetail[];
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
    this.paidAmount = new Money().fromObject(obj.paid_amount);
    this.transactions = obj.transactions.map((transaction) =>
      new PaymentDetail().fromObject(transaction)
    );
    return this;
  }
}

export default Payments;
