import { MoneyMovementReason } from "../Enums/MoneyMovementReason.js";
import { IUtility, OnlySetters, Static, Utility } from "../../Utility.js";
import { Cryptocurrency, TCryptocurrency } from "./Cryptocurrency.js";
import { Money, TMoney } from "./Money.js";
import { MoneyMovementAffectedParty } from "../Enums/MoneyMovementAffectedParty.js";
import { MoneyMovementType } from "../Enums/MoneyMovementType.js";

export type TMoneyMovement = {
  affected_party?: keyof typeof MoneyMovementAffectedParty;
  amount?: TMoney;
  asset?: TCryptocurrency;
  initiated_time?: string;
  reason?: keyof typeof MoneyMovementReason;
  type?: keyof typeof MoneyMovementType;
};

export class MoneyMovement extends Utility implements Static<IUtility, typeof MoneyMovement> {
  private affectedParty?: MoneyMovementAffectedParty;
  private amount?: Money;
  private asset?: Cryptocurrency;
  private initiatedTime?: string;
  private reason?: MoneyMovementReason;
  private type?: MoneyMovementType;

  public setAffectedParty(affectedParty: MoneyMovementAffectedParty): this;
  public setAffectedParty(
    affectedParty: (affectedParty: typeof MoneyMovementAffectedParty) => MoneyMovementAffectedParty
  ): this;
  public setAffectedParty(
    affectedParty:
      | MoneyMovementAffectedParty
      | ((affectedParty: typeof MoneyMovementAffectedParty) => MoneyMovementAffectedParty)
  ) {
    if (typeof affectedParty === "function") this.affectedParty = affectedParty(MoneyMovementAffectedParty);
    else this.affectedParty = affectedParty;
    return this;
  }
  public getAffectedParty() {
    return this.affectedParty;
  }

  public setAmount(amount: Money): this;
  public setAmount(amount: (amount: OnlySetters<Money>) => void): this;
  public setAmount(amount: Money | ((amount: OnlySetters<Money>) => void)) {
    if (amount instanceof Money) this.amount = amount;
    else amount((this.amount = new Money()));
    return this;
  }
  public getAmount() {
    return this.amount;
  }

  public setAsset(asset: Cryptocurrency): this;
  public setAsset(asset: (asset: OnlySetters<Cryptocurrency>) => void): this;
  public setAsset(asset: Cryptocurrency | ((asset: OnlySetters<Cryptocurrency>) => void)) {
    if (asset instanceof Cryptocurrency) this.asset = asset;
    else asset((this.asset = new Cryptocurrency()));
    return this;
  }
  public getAsset() {
    return this.asset;
  }

  public setInitiatedTime(initiatedTime: string) {
    this.initiatedTime = initiatedTime;
    return this;
  }
  public getInitiatedTime() {
    return this.initiatedTime;
  }

  public setReason(reason: MoneyMovementReason): this;
  public setReason(reason: (reason: typeof MoneyMovementReason) => MoneyMovementReason): this;
  public setReason(reason: MoneyMovementReason | ((reason: typeof MoneyMovementReason) => MoneyMovementReason)) {
    if (typeof reason === "function") this.reason = reason(MoneyMovementReason);
    else this.reason = reason;
    return this;
  }
  public getReason() {
    return this.reason;
  }

  public setType(type: MoneyMovementType): this;
  public setType(type: (type: typeof MoneyMovementType) => MoneyMovementType): this;
  public setType(type: MoneyMovementType | ((type: typeof MoneyMovementType) => MoneyMovementType)) {
    if (typeof type === "function") this.type = type(MoneyMovementType);
    else this.type = type;
    return this;
  }
  public getType() {
    return this.type;
  }

  public override getFields<T extends TMoneyMovement>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TMoneyMovement) {
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
