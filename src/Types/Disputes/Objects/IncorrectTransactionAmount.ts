import { IUtility, Utility, Static, OnlySetters } from "../../Utility.js";
import { Cryptocurrency, TCryptocurrency } from "./Cryptocurrency.js";
import { Money, TMoney } from "./Money.js";

export type TIncorrectTransactionAmount = {
  correct_transaction_amount?: TMoney;
  correct_transaction_asset?: TCryptocurrency;
  correct_transaction_time?: string;
};

type IncorrectTransactionAmountFields = {
  readonly correctTransactionAmount?: Money;
  readonly correctTransactionAsset?: Cryptocurrency;
  readonly correctTransactionTime?: string;
};

export class IncorrectTransactionAmount extends Utility implements Static<IUtility, typeof IncorrectTransactionAmount> {
  private correctTransactionAmount?: Money;
  private correctTransactionAsset?: Cryptocurrency;
  private correctTransactionTime?: string;

  public setCorrectTransactionAmount(correctTransactionAmount: Money): this;
  public setCorrectTransactionAmount(
    correctTransactionAmount: (correctTransactionAmount: OnlySetters<Money>) => void
  ): this;
  public setCorrectTransactionAmount(
    correctTransactionAmount: Money | ((correctTransactionAmount: OnlySetters<Money>) => void)
  ) {
    if (correctTransactionAmount instanceof Money) this.correctTransactionAmount = correctTransactionAmount;
    else correctTransactionAmount((this.correctTransactionAmount = new Money()));
    return this;
  }
  public getCorrectTransactionAmount() {
    return this.correctTransactionAmount;
  }

  public setCorrectTransactionAsset(correctTransactionAsset: Cryptocurrency): this;
  public setCorrectTransactionAsset(
    correctTransactionAsset: (correctTransactionAsset: OnlySetters<Cryptocurrency>) => void
  ): this;
  public setCorrectTransactionAsset(
    correctTransactionAsset: Cryptocurrency | ((correctTransactionAsset: OnlySetters<Cryptocurrency>) => void)
  ) {
    if (correctTransactionAsset instanceof Cryptocurrency) this.correctTransactionAsset = correctTransactionAsset;
    else correctTransactionAsset((this.correctTransactionAsset = new Cryptocurrency()));
    return this;
  }
  public getCorrectTransactionAsset() {
    return this.correctTransactionAsset;
  }

  public setCorrectTransactionTime(correctTransactionTime: string) {
    this.correctTransactionTime = correctTransactionTime;
    return this;
  }
  public getCorrectTransactionTime() {
    return this.correctTransactionTime;
  }

  public override getFields<T extends IncorrectTransactionAmountFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TIncorrectTransactionAmount) {
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
