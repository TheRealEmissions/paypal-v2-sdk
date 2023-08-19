import { IUtility, OnlySetters, Static, Utility } from "../../Utility";
import { OutcomeCode } from "../Enums/OutcomeCode";
import { Cryptocurrency, TCryptocurrency } from "./Cryptocurrency";
import { Money, TMoney } from "./Money";

export type TDisputeOutcome = {
  amount_refunded?: TMoney;
  asset_refunded?: TCryptocurrency;
  outcome_code?: keyof typeof OutcomeCode;
};

type DisputeOutcomeFields = {
  readonly amountRefunded?: Money;
  readonly assetRefunded?: Cryptocurrency;
  readonly outcomeCode: OutcomeCode;
};

export class DisputeOutcome extends Utility implements Static<IUtility, typeof DisputeOutcome> {
  private amountRefunded?: Money;
  private assetRefunded?: Cryptocurrency;
  private outcomeCode!: OutcomeCode;

  public setAmountRefunded(amountRefunded: Money): this;
  public setAmountRefunded(amountRefunded: (type: OnlySetters<Money>) => void): this;
  public setAmountRefunded(amountRefunded: Money | ((type: OnlySetters<Money>) => void)) {
    if (amountRefunded instanceof Money) this.amountRefunded = amountRefunded;
    else amountRefunded((this.amountRefunded = new Money()));
    return this;
  }
  public getAmountRefunded() {
    return this.amountRefunded;
  }

  public setAssetRefunded(assetRefunded: Cryptocurrency): this;
  public setAssetRefunded(assetRefunded: (type: OnlySetters<Cryptocurrency>) => void): this;
  public setAssetRefunded(assetRefunded: Cryptocurrency | ((type: OnlySetters<Cryptocurrency>) => void)) {
    if (assetRefunded instanceof Cryptocurrency) this.assetRefunded = assetRefunded;
    else assetRefunded((this.assetRefunded = new Cryptocurrency()));
    return this;
  }
  public getAssetRefunded() {
    return this.assetRefunded;
  }

  public setOutcomeCode(outcomeCode: OutcomeCode): this;
  public setOutcomeCode(outcomeCode: (type: typeof OutcomeCode) => OutcomeCode): this;
  public setOutcomeCode(outcomeCode: OutcomeCode | ((type: typeof OutcomeCode) => OutcomeCode)) {
    if (typeof outcomeCode === "function") this.outcomeCode = outcomeCode(OutcomeCode);
    else this.outcomeCode = outcomeCode;
    return this;
  }
  public getOutcomeCode() {
    return this.outcomeCode;
  }

  public override getFields<T extends Partial<DisputeOutcomeFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TDisputeOutcome) {
    const disputeOutcome = new DisputeOutcome();
    if (obj.amount_refunded) disputeOutcome.setAmountRefunded(Money.fromObject(obj.amount_refunded));
    if (obj.asset_refunded) disputeOutcome.setAssetRefunded(Cryptocurrency.fromObject(obj.asset_refunded));
    if (obj.outcome_code) disputeOutcome.setOutcomeCode(OutcomeCode[obj.outcome_code]);
    return disputeOutcome;
  }
}
