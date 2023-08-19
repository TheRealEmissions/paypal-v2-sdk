import { IUtility, Static, Utility, OnlySetters } from "../../Utility.js";
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

type BillingDisputePropertiesFields = {
  readonly canceledRecurringBilling?: CanceledRecurringBilling;
  readonly creditNotProcessed?: CreditNotProcessed;
  readonly duplicateTransaction?: DuplicationTransaction;
  readonly incorrectTransactionAmount?: IncorrectTransactionAmount;
  readonly paymentByOtherMeans?: PaymentByOtherMeans;
};

export class BillingDisputeProperties extends Utility implements Static<IUtility, typeof BillingDisputeProperties> {
  private canceledRecurringBilling?: CanceledRecurringBilling;
  private creditNotProcessed?: CreditNotProcessed;
  private duplicateTransaction?: DuplicationTransaction;
  private incorrectTransactionAmount?: IncorrectTransactionAmount;
  private paymentByOtherMeans?: PaymentByOtherMeans;

  public setCanceledRecurringBilling(canceledRecurringBilling: CanceledRecurringBilling): OnlySetters<this>;
  public setCanceledRecurringBilling(
    canceledRecurringBilling: (canceledRecurringBilling: OnlySetters<CanceledRecurringBilling>) => void
  ): OnlySetters<this>;
  public setCanceledRecurringBilling(
    canceledRecurringBilling:
      | CanceledRecurringBilling
      | ((canceledRecurringBilling: OnlySetters<CanceledRecurringBilling>) => void)
  ): OnlySetters<this> {
    if (canceledRecurringBilling instanceof CanceledRecurringBilling)
      this.canceledRecurringBilling = canceledRecurringBilling;
    else canceledRecurringBilling((this.canceledRecurringBilling = new CanceledRecurringBilling()));
    return this;
  }
  public getCanceledRecurringBilling() {
    return this.canceledRecurringBilling;
  }

  public setCreditNotProcessed(creditNotProcessed: CreditNotProcessed): OnlySetters<this>;
  public setCreditNotProcessed(
    creditNotProcessed: (creditNotProcessed: OnlySetters<CreditNotProcessed>) => void
  ): OnlySetters<this>;
  public setCreditNotProcessed(
    creditNotProcessed: CreditNotProcessed | ((creditNotProcessed: OnlySetters<CreditNotProcessed>) => void)
  ): OnlySetters<this> {
    if (creditNotProcessed instanceof CreditNotProcessed) this.creditNotProcessed = creditNotProcessed;
    else creditNotProcessed((this.creditNotProcessed = new CreditNotProcessed()));
    return this;
  }
  public getCreditNotProcessed() {
    return this.creditNotProcessed;
  }

  public setDuplicateTransaction(duplicateTransaction: DuplicationTransaction): OnlySetters<this>;
  public setDuplicateTransaction(
    duplicateTransaction: (duplicateTransaction: OnlySetters<DuplicationTransaction>) => void
  ): OnlySetters<this>;
  public setDuplicateTransaction(
    duplicateTransaction: DuplicationTransaction | ((duplicateTransaction: OnlySetters<DuplicationTransaction>) => void)
  ): OnlySetters<this> {
    if (duplicateTransaction instanceof DuplicationTransaction) this.duplicateTransaction = duplicateTransaction;
    else duplicateTransaction((this.duplicateTransaction = new DuplicationTransaction()));
    return this;
  }
  public getDuplicateTransaction() {
    return this.duplicateTransaction;
  }

  public setIncorrectTransactionAmount(incorrectTransactionAmount: IncorrectTransactionAmount): OnlySetters<this>;
  public setIncorrectTransactionAmount(
    incorrectTransactionAmount: (incorrectTransactionAmount: OnlySetters<IncorrectTransactionAmount>) => void
  ): OnlySetters<this>;
  public setIncorrectTransactionAmount(
    incorrectTransactionAmount:
      | IncorrectTransactionAmount
      | ((incorrectTransactionAmount: OnlySetters<IncorrectTransactionAmount>) => void)
  ): OnlySetters<this> {
    if (incorrectTransactionAmount instanceof IncorrectTransactionAmount)
      this.incorrectTransactionAmount = incorrectTransactionAmount;
    else incorrectTransactionAmount((this.incorrectTransactionAmount = new IncorrectTransactionAmount()));
    return this;
  }
  public getIncorrectTransactionAmount() {
    return this.incorrectTransactionAmount;
  }

  public setPaymentByOtherMeans(paymentByOtherMeans: PaymentByOtherMeans): OnlySetters<this>;
  public setPaymentByOtherMeans(
    paymentByOtherMeans: (paymentByOtherMeans: OnlySetters<PaymentByOtherMeans>) => void
  ): OnlySetters<this>;
  public setPaymentByOtherMeans(
    paymentByOtherMeans: PaymentByOtherMeans | ((paymentByOtherMeans: OnlySetters<PaymentByOtherMeans>) => void)
  ): OnlySetters<this> {
    if (paymentByOtherMeans instanceof PaymentByOtherMeans) this.paymentByOtherMeans = paymentByOtherMeans;
    else paymentByOtherMeans((this.paymentByOtherMeans = new PaymentByOtherMeans()));
    return this;
  }
  public getPaymentByOtherMeans() {
    return this.paymentByOtherMeans;
  }

  public override getFields<T extends BillingDisputePropertiesFields>() {
    return super._getFields<T>();
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
