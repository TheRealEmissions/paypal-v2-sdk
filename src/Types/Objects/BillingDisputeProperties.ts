import { IUtility, Static, Utility } from "../Utility.js";
import { CanceledRecurringBilling, TCanceledRecurringBilling } from "./CanceledRecurringBilling.js";
import { CreditNotProcessed, TCreditNotProcessed } from "./CreditNotProcessed.js";
import { DuplicationTransaction, TDuplicationTransaction } from "./DuplicationTransaction.js";
import { IncorrectTransactionAmount, TIncorrectTransactionAmount } from "./IncorrectTransactionAmount.js";
import { PaymentByOtherMeans, TPaymentByOtherMeans } from "./PaymentByOtherMeans.js";

export type TBillingDisputeProperties = {
  canceled_recurring_billing?: TCanceledRecurringBilling;
  credit_not_processed?: TCreditNotProcessed;
  duplicate_transaction?: TDuplicationTransaction;
  incorrect_transaction_amount?: TIncorrectTransactionAmount;
  payment_by_other_means?: TPaymentByOtherMeans;
};

export class BillingDisputeProperties extends Utility implements Static<IUtility, typeof BillingDisputeProperties> {
  private canceledRecurringBilling?: CanceledRecurringBilling;
  private creditNotProcessed?: CreditNotProcessed;
  private duplicateTransaction?: DuplicationTransaction;
  private incorrectTransactionAmount?: IncorrectTransactionAmount;
  private paymentByOtherMeans?: PaymentByOtherMeans;

  public setCanceledRecurringBilling(canceledRecurringBilling: CanceledRecurringBilling): this;
  public setCanceledRecurringBilling(
    canceledRecurringBilling: (canceledRecurringBilling: CanceledRecurringBilling) => void
  ): this;
  public setCanceledRecurringBilling(
    canceledRecurringBilling: CanceledRecurringBilling | ((canceledRecurringBilling: CanceledRecurringBilling) => void)
  ) {
    if (canceledRecurringBilling instanceof CanceledRecurringBilling)
      this.canceledRecurringBilling = canceledRecurringBilling;
    else canceledRecurringBilling((this.canceledRecurringBilling = new CanceledRecurringBilling()));
    return this;
  }
  public getCanceledRecurringBilling() {
    return this.canceledRecurringBilling;
  }

  public setCreditNotProcessed(creditNotProcessed: CreditNotProcessed): this;
  public setCreditNotProcessed(creditNotProcessed: (creditNotProcessed: CreditNotProcessed) => void): this;
  public setCreditNotProcessed(
    creditNotProcessed: CreditNotProcessed | ((creditNotProcessed: CreditNotProcessed) => void)
  ) {
    if (creditNotProcessed instanceof CreditNotProcessed) this.creditNotProcessed = creditNotProcessed;
    else creditNotProcessed((this.creditNotProcessed = new CreditNotProcessed()));
    return this;
  }
  public getCreditNotProcessed() {
    return this.creditNotProcessed;
  }

  public setDuplicateTransaction(duplicateTransaction: DuplicationTransaction): this;
  public setDuplicateTransaction(duplicateTransaction: (duplicateTransaction: DuplicationTransaction) => void): this;
  public setDuplicateTransaction(
    duplicateTransaction: DuplicationTransaction | ((duplicateTransaction: DuplicationTransaction) => void)
  ) {
    if (duplicateTransaction instanceof DuplicationTransaction) this.duplicateTransaction = duplicateTransaction;
    else duplicateTransaction((this.duplicateTransaction = new DuplicationTransaction()));
    return this;
  }
  public getDuplicateTransaction() {
    return this.duplicateTransaction;
  }

  public setIncorrectTransactionAmount(incorrectTransactionAmount: IncorrectTransactionAmount): this;
  public setIncorrectTransactionAmount(
    incorrectTransactionAmount: (incorrectTransactionAmount: IncorrectTransactionAmount) => void
  ): this;
  public setIncorrectTransactionAmount(
    incorrectTransactionAmount:
      | IncorrectTransactionAmount
      | ((incorrectTransactionAmount: IncorrectTransactionAmount) => void)
  ) {
    if (incorrectTransactionAmount instanceof IncorrectTransactionAmount)
      this.incorrectTransactionAmount = incorrectTransactionAmount;
    else incorrectTransactionAmount((this.incorrectTransactionAmount = new IncorrectTransactionAmount()));
    return this;
  }
  public getIncorrectTransactionAmount() {
    return this.incorrectTransactionAmount;
  }

  public setPaymentByOtherMeans(paymentByOtherMeans: PaymentByOtherMeans): this;
  public setPaymentByOtherMeans(paymentByOtherMeans: (paymentByOtherMeans: PaymentByOtherMeans) => void): this;
  public setPaymentByOtherMeans(
    paymentByOtherMeans: PaymentByOtherMeans | ((paymentByOtherMeans: PaymentByOtherMeans) => void)
  ) {
    if (paymentByOtherMeans instanceof PaymentByOtherMeans) this.paymentByOtherMeans = paymentByOtherMeans;
    else paymentByOtherMeans((this.paymentByOtherMeans = new PaymentByOtherMeans()));
    return this;
  }
  public getPaymentByOtherMeans() {
    return this.paymentByOtherMeans;
  }

  public override getFields<T extends Partial<TBillingDisputeProperties>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TBillingDisputeProperties) {
    const billingDisputeProperties = new BillingDisputeProperties();
    if (obj.canceled_recurring_billing)
      billingDisputeProperties.setCanceledRecurringBilling(
        CanceledRecurringBilling.fromObject(obj.canceled_recurring_billing)
      );
    if (obj.credit_not_processed)
      billingDisputeProperties.setCreditNotProcessed(CreditNotProcessed.fromObject(obj.credit_not_processed));
    if (obj.duplicate_transaction)
      billingDisputeProperties.setDuplicateTransaction(DuplicationTransaction.fromObject(obj.duplicate_transaction));
    if (obj.incorrect_transaction_amount)
      billingDisputeProperties.setIncorrectTransactionAmount(
        IncorrectTransactionAmount.fromObject(obj.incorrect_transaction_amount)
      );
    if (obj.payment_by_other_means)
      billingDisputeProperties.setPaymentByOtherMeans(PaymentByOtherMeans.fromObject(obj.payment_by_other_means));
    return billingDisputeProperties;
  }
}
