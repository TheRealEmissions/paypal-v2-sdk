import Types, { Static, ITypes } from "../Types";
import Cryptocurrency, { TCryptocurrency } from "./Cryptocurrency";
import Money, { TMoney } from "./Money";
import { DisputeOutcome as DisputeOutcomeEnum } from "../Enums/DisputeOutcome";

export type TDisputeOutcome = {
  amount_refunded?: TMoney;
  asset_refunded?: TCryptocurrency;
  outcome_code?: keyof typeof DisputeOutcomeEnum;
};

class DisputeOutcome extends Types implements Static<ITypes, typeof DisputeOutcome> {
  amountRefunded?: Money;
  assetRefunded?: Cryptocurrency;
  outcomeCode!: DisputeOutcomeEnum;

  constructor() {
    super();
  }

  setAmountRefunded(amountRefunded: Money | ((type: Money) => void)) {
    if (amountRefunded instanceof Money) this.amountRefunded = amountRefunded;
    else amountRefunded((this.amountRefunded = new Money()));
    return this;
  }

  setAssetRefunded(assetRefunded: Cryptocurrency | ((type: Cryptocurrency) => void)) {
    if (assetRefunded instanceof Cryptocurrency) this.assetRefunded = assetRefunded;
    else assetRefunded((this.assetRefunded = new Cryptocurrency()));
    return this;
  }

  setOutcomeCode(outcomeCode: DisputeOutcomeEnum | ((type: typeof DisputeOutcomeEnum) => DisputeOutcomeEnum)) {
    if (typeof outcomeCode === "function") this.outcomeCode = outcomeCode(DisputeOutcomeEnum);
    else this.outcomeCode = outcomeCode;
    return this;
  }

  static fromObject(obj: TDisputeOutcome) {
    const disputeOutcome = new DisputeOutcome();
    if (obj.amount_refunded) disputeOutcome.setAmountRefunded(Money.fromObject(obj.amount_refunded));
    if (obj.asset_refunded) disputeOutcome.setAssetRefunded(Cryptocurrency.fromObject(obj.asset_refunded));
    if (obj.outcome_code) disputeOutcome.setOutcomeCode(DisputeOutcomeEnum[obj.outcome_code]);
    return disputeOutcome;
  }
}

export default DisputeOutcome;
