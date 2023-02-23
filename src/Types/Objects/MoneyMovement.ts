import { MoneyMovementAffectedParty } from "../Enums/MoneyMovementAffectedParty";
import { MoneyMovementReason } from "../Enums/MoneyMovementReason";
import { MoneyMovementType } from "../Enums/MoneyMovementType";
import Types, { ITypes, Static } from "../Types";
import Cryptocurrency, { TCryptocurrency } from "./Cryptocurrency";
import Money, { TMoney } from "./Money";

export type TMoneyMovement = {
  affected_party?: keyof typeof MoneyMovementAffectedParty;
  amount?: TMoney;
  asset?: TCryptocurrency;
  initiated_time?: string;
  reason?: keyof typeof MoneyMovementReason;
  type?: keyof typeof MoneyMovementType;
};

class MoneyMovement extends Types implements Static<ITypes, typeof MoneyMovement> {
  affectedParty?: MoneyMovementAffectedParty;
  amount?: Money;
  asset?: Cryptocurrency;
  initiatedTime?: string;
  reason?: MoneyMovementReason;
  type?: MoneyMovementType;

  constructor() {
    super();
  }

  setAffectedParty(
    affectedParty:
      | MoneyMovementAffectedParty
      | ((affectedParty: typeof MoneyMovementAffectedParty) => MoneyMovementAffectedParty)
  ) {
    if (typeof affectedParty === "function") this.affectedParty = affectedParty(MoneyMovementAffectedParty);
    else this.affectedParty = affectedParty;
    return this;
  }

  setAmount(amount: Money | ((amount: Money) => void)) {
    if (amount instanceof Money) this.amount = amount;
    else amount((this.amount = new Money()));
    return this;
  }

  setAsset(asset: Cryptocurrency | ((asset: Cryptocurrency) => void)) {
    if (asset instanceof Cryptocurrency) this.asset = asset;
    else asset((this.asset = new Cryptocurrency()));
    return this;
  }

  setInitiatedTime(initiatedTime: string) {
    this.initiatedTime = initiatedTime;
    return this;
  }

  setReason(reason: MoneyMovementReason | ((reason: typeof MoneyMovementReason) => MoneyMovementReason)) {
    if (typeof reason === "function") this.reason = reason(MoneyMovementReason);
    else this.reason = reason;
    return this;
  }

  setType(type: MoneyMovementType | ((type: typeof MoneyMovementType) => MoneyMovementType)) {
    if (typeof type === "function") this.type = type(MoneyMovementType);
    else this.type = type;
    return this;
  }

  static fromObject(obj: TMoneyMovement) {
    const moneyMovement = new MoneyMovement();
    if (obj.affected_party) moneyMovement.setAffectedParty(MoneyMovementAffectedParty[obj.affected_party]);
    if (obj.amount) moneyMovement.setAmount(Money.fromObject(obj.amount));
    if (obj.asset) moneyMovement.setAsset(Cryptocurrency.fromObject(obj.asset));
    if (obj.initiated_time) moneyMovement.setInitiatedTime(obj.initiated_time);
    if (obj.reason) moneyMovement.setReason(MoneyMovementReason[obj.reason]);
    if (obj.type) moneyMovement.setType(MoneyMovementType[obj.type]);
    return moneyMovement;
  }
}

export default MoneyMovement;
