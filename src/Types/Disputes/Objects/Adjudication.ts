import { Utility, IUtility, Static, OnlySetters } from "../../Utility";
import { AdjudicationReason } from "../Enums/AdjudicationReason";
import { AdjudicationType } from "../Enums/AdjudicationType";
import { DisputeLifecycleStage } from "../Enums/DisputeLifecycleStage";

export type TAdjudication = {
  adjudication_time: string;
  type: keyof typeof AdjudicationType;
  dispute_life_cycle_stage?: keyof typeof DisputeLifecycleStage;
  reason?: keyof typeof AdjudicationReason;
};

type AdjudicationFields = {
  readonly adjudicationTime: string;
  readonly type: AdjudicationType;
  readonly disputeLifeCycleStage?: DisputeLifecycleStage;
  readonly reason?: AdjudicationReason;
};

export class Adjudication extends Utility implements Static<IUtility, typeof Adjudication> {
  private adjudicationTime!: string;
  private type!: AdjudicationType;
  private disputeLifeCycleStage?: DisputeLifecycleStage;
  private reason?: AdjudicationReason;

  public setAdjudicationTime(adjudicationTime: string): OnlySetters<this> {
    this.adjudicationTime = adjudicationTime;
    return this;
  }
  public getAdjudicationTime() {
    return this.adjudicationTime;
  }

  public setType(type: AdjudicationType): OnlySetters<this>;
  public setType(type: (type: typeof AdjudicationType) => AdjudicationType): OnlySetters<this>;
  public setType(type: AdjudicationType | ((type: typeof AdjudicationType) => AdjudicationType)): OnlySetters<this> {
    if (typeof type === "function") this.type = type(AdjudicationType);
    else this.type = type;
    return this;
  }
  public getType() {
    return this.type;
  }

  public setDisputeLifeCycleStage(disputeLifeCycleStage: DisputeLifecycleStage): OnlySetters<this>;
  public setDisputeLifeCycleStage(
    disputeLifeCycleStage: (type: typeof DisputeLifecycleStage) => DisputeLifecycleStage
  ): OnlySetters<this>;
  public setDisputeLifeCycleStage(
    disputeLifeCycleStage: DisputeLifecycleStage | ((type: typeof DisputeLifecycleStage) => DisputeLifecycleStage)
  ): OnlySetters<this> {
    if (typeof disputeLifeCycleStage === "function")
      this.disputeLifeCycleStage = disputeLifeCycleStage(DisputeLifecycleStage);
    else this.disputeLifeCycleStage = disputeLifeCycleStage;
    return this;
  }
  public getDisputeLifeCycleStage() {
    return this.disputeLifeCycleStage;
  }

  public setReason(reason: AdjudicationReason): OnlySetters<this>;
  public setReason(reason: (type: typeof AdjudicationReason) => AdjudicationReason): OnlySetters<this>;
  public setReason(
    reason: AdjudicationReason | ((type: typeof AdjudicationReason) => AdjudicationReason)
  ): OnlySetters<this> {
    if (typeof reason === "function") this.reason = reason(AdjudicationReason);
    else this.reason = reason;
    return this;
  }
  public getReason() {
    return this.reason;
  }

  public override getFields<T extends Partial<AdjudicationFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TAdjudication) {
    const adjudication = new Adjudication();
    adjudication.setAdjudicationTime(obj.adjudication_time);
    adjudication.setType(AdjudicationType[obj.type]);
    if (obj.dispute_life_cycle_stage)
      adjudication.setDisputeLifeCycleStage(DisputeLifecycleStage[obj.dispute_life_cycle_stage]);
    if (obj.reason) adjudication.setReason(AdjudicationReason[obj.reason]);
    return adjudication;
  }
}
