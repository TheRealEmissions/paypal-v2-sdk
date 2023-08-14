import { Cryptocurrency, TCryptocurrency } from "./Cryptocurrency.js";
import { Money, TMoney } from "./Money.js";
import { DisputeOutcome as DisputeOutcomeEnum } from "../Enums/DisputeOutcome.js";
import { IUtility, Static, Utility } from "../Utility.js";

export type TDisputeOutcome = {
  amount_refunded?: TMoney;
  asset_refunded?: TCryptocurrency;
  outcome_code?: keyof typeof DisputeOutcomeEnum;
};

export class DisputeOutcome extends Utility implements Static<IUtility, typeof DisputeOutcome> {
  private amountRefunded?: Money;
  private assetRefunded?: Cryptocurrency;
  private outcomeCode!: DisputeOutcomeEnum;

  public setAmountRefunded(amountRefunded: Money): this;
  public setAmountRefunded(amountRefunded: (type: Money) => void): this;
  public setAmountRefunded(amountRefunded: Money | ((type: Money) => void)) {
    if (amountRefunded instanceof Money) this.amountRefunded = amountRefunded;
    else amountRefunded((this.amountRefunded = new Money()));
    return this;
  }
  public getAmountRefunded() {
    return this.amountRefunded;
  }

  public setAssetRefunded(assetRefunded: Cryptocurrency): this;
  public setAssetRefunded(assetRefunded: (type: Cryptocurrency) => void): this;
  public setAssetRefunded(assetRefunded: Cryptocurrency | ((type: Cryptocurrency) => void)) {
    if (assetRefunded instanceof Cryptocurrency) this.assetRefunded = assetRefunded;
    else assetRefunded((this.assetRefunded = new Cryptocurrency()));
    return this;
  }
  public getAssetRefunded() {
    return this.assetRefunded;
  }

  public setOutcomeCode(outcomeCode: DisputeOutcomeEnum): this;
  public setOutcomeCode(outcomeCode: (type: typeof DisputeOutcomeEnum) => DisputeOutcomeEnum): this;
  public setOutcomeCode(outcomeCode: DisputeOutcomeEnum | ((type: typeof DisputeOutcomeEnum) => DisputeOutcomeEnum)) {
    if (typeof outcomeCode === "function") this.outcomeCode = outcomeCode(DisputeOutcomeEnum);
    else this.outcomeCode = outcomeCode;
    return this;
  }
  public getOutcomeCode() {
    return this.outcomeCode;
  }

  public override getFields<T extends TDisputeOutcome>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TDisputeOutcome) {
    const disputeOutcome = new DisputeOutcome();
    if (obj.amount_refunded) disputeOutcome.setAmountRefunded(Money.fromObject(obj.amount_refunded));
    if (obj.asset_refunded) disputeOutcome.setAssetRefunded(Cryptocurrency.fromObject(obj.asset_refunded));
    if (obj.outcome_code) disputeOutcome.setOutcomeCode(DisputeOutcomeEnum[obj.outcome_code]);
    return disputeOutcome;
  }
}
