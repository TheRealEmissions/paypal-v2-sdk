import Types, { ITypes, Static } from "../Types";
import TransactionInfo, { TTransactionInfo } from "./TransactionInfo";

export type TDuplicationTransaction = {
  original_transaction?: TTransactionInfo;
  received_duplicate?: boolean;
};

class DuplicationTransaction extends Types implements Static<ITypes, typeof DuplicationTransaction> {
  originalTransaction?: TransactionInfo;
  receivedDuplicate?: boolean;

  constructor() {
    super();
  }

  setOriginalTransaction(originalTransaction: TransactionInfo | ((t: TransactionInfo) => void)) {
    if (originalTransaction instanceof TransactionInfo) this.originalTransaction = originalTransaction;
    else originalTransaction((this.originalTransaction = new TransactionInfo()));
    return this;
  }

  setReceivedDuplicate(receivedDuplicate: boolean) {
    this.receivedDuplicate = receivedDuplicate;
    return this;
  }

  static fromObject(obj: TDuplicationTransaction) {
    const duplicationTransaction = new DuplicationTransaction();
    if (obj.original_transaction)
      duplicationTransaction.setOriginalTransaction(TransactionInfo.fromObject(obj.original_transaction));
    if (obj.received_duplicate) duplicationTransaction.setReceivedDuplicate(obj.received_duplicate);
    return duplicationTransaction;
  }
}

export default DuplicationTransaction;
