import { IUtility, OnlySetters, Static, Utility } from "../../Utility.js";
import { TransactionInfo, TTransactionInfo } from "./TransactionInfo.js";

export type TDuplicationTransaction = {
  original_transaction?: TTransactionInfo;
  received_duplicate?: boolean;
};

export class DuplicationTransaction extends Utility implements Static<IUtility, typeof DuplicationTransaction> {
  private originalTransaction?: TransactionInfo;
  private receivedDuplicate?: boolean;

  public setOriginalTransaction(originalTransaction: TransactionInfo): this;
  public setOriginalTransaction(originalTransaction: (t: OnlySetters<TransactionInfo>) => void): this;
  public setOriginalTransaction(originalTransaction: TransactionInfo | ((t: OnlySetters<TransactionInfo>) => void)) {
    if (originalTransaction instanceof TransactionInfo) this.originalTransaction = originalTransaction;
    else originalTransaction((this.originalTransaction = new TransactionInfo()));
    return this;
  }
  public getOriginalTransaction() {
    return this.originalTransaction;
  }

  public setReceivedDuplicate(receivedDuplicate: boolean) {
    this.receivedDuplicate = receivedDuplicate;
    return this;
  }
  public getReceivedDuplicate() {
    return this.receivedDuplicate;
  }

  public override getFields<T extends TDuplicationTransaction>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TDuplicationTransaction) {
    const duplicationTransaction = new DuplicationTransaction();
    if (obj.original_transaction)
      duplicationTransaction.setOriginalTransaction(TransactionInfo.fromObject(obj.original_transaction));
    if (obj.received_duplicate) duplicationTransaction.setReceivedDuplicate(obj.received_duplicate);
    return duplicationTransaction;
  }
}
