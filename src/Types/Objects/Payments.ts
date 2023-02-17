import Types, { ITypes, Static } from "../Types.js";
import Money, { TMoney } from "./Money.js";
import PaymentDetail, { TPaymentDetail } from "./PaymentDetail.js";

export type TPayments = {
  readonly paid_amount?: TMoney;
  readonly transactions?: TPaymentDetail[];
};

class Payments extends Types implements Static<ITypes, typeof Payments> {
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

  static fromObject(obj: TPayments) {
    const payments = new Payments();
    if (obj.paid_amount) payments.setPaidAmount(Money.fromObject(obj.paid_amount));
    if (obj.transactions) payments.setTransactions(obj.transactions.map((x) => PaymentDetail.fromObject(x)));
    return payments;
  }
}

export default Payments;
