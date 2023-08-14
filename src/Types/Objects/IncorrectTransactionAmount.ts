import Types, { ITypes, Static } from "../Types";
import Cryptocurrency, { TCryptocurrency } from "./Cryptocurrency";
import Money, { TMoney } from "./Money";

export type TIncorrectTransactionAmount = {
  correct_transaction_amount?: TMoney;
  correct_transaction_asset?: TCryptocurrency;
  correct_transaction_time?: string;
};

class IncorrectTransactionAmount extends Types implements Static<ITypes, typeof IncorrectTransactionAmount> {
  correctTransactionAmount?: Money;
  correctTransactionAsset?: Cryptocurrency;
  correctTransactionTime?: string;

  constructor() {
    super();
  }

  setCorrectTransactionAmount(correctTransactionAmount: Money | ((correctTransactionAmount: Money) => void)) {
    if (correctTransactionAmount instanceof Money) this.correctTransactionAmount = correctTransactionAmount;
    else correctTransactionAmount((this.correctTransactionAmount = new Money()));
    return this;
  }

  setCorrectTransactionAsset(
    correctTransactionAsset: Cryptocurrency | ((correctTransactionAsset: Cryptocurrency) => void)
  ) {
    if (correctTransactionAsset instanceof Cryptocurrency) this.correctTransactionAsset = correctTransactionAsset;
    else correctTransactionAsset((this.correctTransactionAsset = new Cryptocurrency()));
    return this;
  }

  setCorrectTransactionTime(correctTransactionTime: string) {
    this.correctTransactionTime = correctTransactionTime;
    return this;
  }

  static fromObject(obj: TIncorrectTransactionAmount) {
    const incorrectTransactionAmount = new IncorrectTransactionAmount();
    if (obj.correct_transaction_amount)
      incorrectTransactionAmount.setCorrectTransactionAmount(Money.fromObject(obj.correct_transaction_amount));
    if (obj.correct_transaction_asset)
      incorrectTransactionAmount.setCorrectTransactionAsset(Cryptocurrency.fromObject(obj.correct_transaction_asset));
    if (obj.correct_transaction_time)
      incorrectTransactionAmount.setCorrectTransactionTime(obj.correct_transaction_time);
    return incorrectTransactionAmount;
  }
}

export default IncorrectTransactionAmount;
