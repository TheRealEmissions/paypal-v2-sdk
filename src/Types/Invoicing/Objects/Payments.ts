import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { Money, TMoney } from "./Money.js";
import { PaymentDetail, TPaymentDetail } from "./PaymentDetail.js";

export type TPayments = {
  readonly paid_amount?: TMoney;
  readonly transactions?: TPaymentDetail[];
};

export class Payments extends Utility implements Static<IUtility, typeof Payments> {
  private paidAmount?: Money;
  private transactions?: PaymentDetail[];

  public setPaidAmount(paidAmount: Money): this;
  public setPaidAmount(paidAmount: (money: OnlySetters<Money>) => void): this;
  public setPaidAmount(paidAmount: Money | ((money: OnlySetters<Money>) => void)) {
    if (paidAmount instanceof Money) this.paidAmount = paidAmount;
    else {
      const money = new Money();
      paidAmount(money);
      this.paidAmount = money;
    }
    return this;
  }
  public getPaidAmount() {
    return this.paidAmount;
  }

  public setTransactions(...transactions: PaymentDetail[]): this;
  public setTransactions(...transactions: ((paymentDetail: OnlySetters<PaymentDetail>) => void)[]): this;
  public setTransactions(...transactions: (PaymentDetail | ((paymentDetail: OnlySetters<PaymentDetail>) => void))[]) {
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
  public getTransactions() {
    return this.transactions;
  }

  public override getFields<T extends TPayments>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TPayments) {
    const payments = new Payments();
    if (obj.paid_amount) payments.setPaidAmount(Money.fromObject(obj.paid_amount));
    if (obj.transactions) payments.setTransactions(...obj.transactions.map((x) => PaymentDetail.fromObject(x)));
    return payments;
  }
}
