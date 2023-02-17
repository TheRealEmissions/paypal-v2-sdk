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

  setPaidAmount(paidAmount: Money | ((money: Money) => void)) {
    if (paidAmount instanceof Money) this.paidAmount = paidAmount;
    else {
      const money = new Money();
      paidAmount(money);
      this.paidAmount = money;
    }
    return this;
  }

  setTransactions(...transactions: (PaymentDetail | ((paymentDetail: PaymentDetail) => void))[]) {
    this.transactions = transactions.map((x) => {
      if (x instanceof PaymentDetail) return x;
      else {
        const paymentDetail = new PaymentDetail();
        x(paymentDetail);
        return paymentDetail;
      }
    });
    return this;
  }

  static fromObject(obj: TPayments) {
    const payments = new Payments();
    if (obj.paid_amount) payments.setPaidAmount(Money.fromObject(obj.paid_amount));
    if (obj.transactions) payments.setTransactions(...obj.transactions.map((x) => PaymentDetail.fromObject(x)));
    return payments;
  }
}

export default Payments;
