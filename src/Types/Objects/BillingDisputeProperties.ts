import Types, { ITypes, Static } from "../Types";
import CanceledRecurringBilling, { TCanceledRecurringBilling } from "./CanceledRecurringBilling";
import CreditNotProcessed, { TCreditNotProcessed } from "./CreditNotProcessed";
import DuplicationTransaction, { TDuplicationTransaction } from "./DuplicationTransaction";
import IncorrectTransactionAmount, { TIncorrectTransactionAmount } from "./IncorrectTransactionAmount";
import PaymentByOtherMeans, { TPaymentByOtherMeans } from "./PaymentByOtherMeans";

export type TBillingDisputeProperties = {
  canceled_recurring_billing?: TCanceledRecurringBilling;
  credit_not_processed?: TCreditNotProcessed;
  duplicate_transaction?: TDuplicationTransaction;
  incorrect_transaction_amount?: TIncorrectTransactionAmount;
  payment_by_other_means?: TPaymentByOtherMeans;
};

class BillingDisputeProperties extends Types implements Static<ITypes, typeof BillingDisputeProperties> {
  canceledRecurringBilling?: CanceledRecurringBilling;
  creditNotProcessed?: CreditNotProcessed;
  duplicateTransaction?: DuplicationTransaction;
  incorrectTransactionAmount?: IncorrectTransactionAmount;
  paymentByOtherMeans?: PaymentByOtherMeans;

  constructor() {
    super();
  }

  setCanceledRecurringBilling(
    canceledRecurringBilling: CanceledRecurringBilling | ((canceledRecurringBilling: CanceledRecurringBilling) => void)
  ) {
    if (canceledRecurringBilling instanceof CanceledRecurringBilling)
      this.canceledRecurringBilling = canceledRecurringBilling;
    else canceledRecurringBilling((this.canceledRecurringBilling = new CanceledRecurringBilling()));
    return this;
  }

  setCreditNotProcessed(creditNotProcessed: CreditNotProcessed | ((creditNotProcessed: CreditNotProcessed) => void)) {
    if (creditNotProcessed instanceof CreditNotProcessed) this.creditNotProcessed = creditNotProcessed;
    else creditNotProcessed((this.creditNotProcessed = new CreditNotProcessed()));
    return this;
  }

  setDuplicateTransaction(
    duplicateTransaction: DuplicationTransaction | ((duplicateTransaction: DuplicationTransaction) => void)
  ) {
    if (duplicateTransaction instanceof DuplicationTransaction) this.duplicateTransaction = duplicateTransaction;
    else duplicateTransaction((this.duplicateTransaction = new DuplicationTransaction()));
    return this;
  }

  setIncorrectTransactionAmount(
    incorrectTransactionAmount:
      | IncorrectTransactionAmount
      | ((incorrectTransactionAmount: IncorrectTransactionAmount) => void)
  ) {
    if (incorrectTransactionAmount instanceof IncorrectTransactionAmount)
      this.incorrectTransactionAmount = incorrectTransactionAmount;
    else incorrectTransactionAmount((this.incorrectTransactionAmount = new IncorrectTransactionAmount()));
    return this;
  }

  setPaymentByOtherMeans(
    paymentByOtherMeans: PaymentByOtherMeans | ((paymentByOtherMeans: PaymentByOtherMeans) => void)
  ) {
    if (paymentByOtherMeans instanceof PaymentByOtherMeans) this.paymentByOtherMeans = paymentByOtherMeans;
    else paymentByOtherMeans((this.paymentByOtherMeans = new PaymentByOtherMeans()));
    return this;
  }

  static fromObject(obj: TBillingDisputeProperties) {
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

export default BillingDisputeProperties;
