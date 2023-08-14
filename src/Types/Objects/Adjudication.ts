import { AdjudicationReason } from "../Enums/AdjudicationReason";
import { AdjudicationType } from "../Enums/AdjudicationType";
import { DisputeLifeCycleStage } from "../Enums/DisputeLifeCycleStage";
import { Utility, IUtility, Static } from "../Utility";

export type TAdjudication = {
  adjudication_time: string;
  type: keyof typeof AdjudicationType;
  dispute_life_cycle_stage?: keyof typeof DisputeLifeCycleStage;
  reason?: keyof typeof AdjudicationReason;
};

export class Adjudication extends Utility implements Static<IUtility, typeof Adjudication> {
  private adjudicationTime!: string;
  private type!: AdjudicationType;
  private disputeLifeCycleStage?: DisputeLifeCycleStage;
  private reason?: AdjudicationReason;

  public setAdjudicationTime(adjudicationTime: string) {
    this.adjudicationTime = adjudicationTime;
    return this;
  }
  public getAdjudicationTime() {
    return this.adjudicationTime;
  }

  public setType(type: AdjudicationType): this;
  public setType(type: (type: typeof AdjudicationType) => AdjudicationType): this;
  public setType(type: AdjudicationType | ((type: typeof AdjudicationType) => AdjudicationType)) {
    if (typeof type === "function") this.type = type(AdjudicationType);
    else this.type = type;
    return this;
  }
  public getType() {
    return this.type;
  }

  public setDisputeLifeCycleStage(disputeLifeCycleStage: DisputeLifeCycleStage): this;
  public setDisputeLifeCycleStage(
    disputeLifeCycleStage: (type: typeof DisputeLifeCycleStage) => DisputeLifeCycleStage
  ): this;
  public setDisputeLifeCycleStage(
    disputeLifeCycleStage: DisputeLifeCycleStage | ((type: typeof DisputeLifeCycleStage) => DisputeLifeCycleStage)
  ) {
    if (typeof disputeLifeCycleStage === "function")
      this.disputeLifeCycleStage = disputeLifeCycleStage(DisputeLifeCycleStage);
    else this.disputeLifeCycleStage = disputeLifeCycleStage;
    return this;
  }
  public getDisputeLifeCycleStage() {
    return this.disputeLifeCycleStage;
  }

  public setReason(reason: AdjudicationReason): this;
  public setReason(reason: (type: typeof AdjudicationReason) => AdjudicationReason): this;
  public setReason(reason: AdjudicationReason | ((type: typeof AdjudicationReason) => AdjudicationReason)) {
    if (typeof reason === "function") this.reason = reason(AdjudicationReason);
    else this.reason = reason;
    return this;
  }
  public getReason() {
    return this.reason;
  }

  public override getFields<T extends Partial<TAdjudication>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TAdjudication) {
    const adjudication = new Adjudication();
    adjudication.setAdjudicationTime(obj.adjudication_time);
    adjudication.setType(AdjudicationType[obj.type]);
    if (obj.dispute_life_cycle_stage)
      adjudication.setDisputeLifeCycleStage(DisputeLifeCycleStage[obj.dispute_life_cycle_stage]);
    if (obj.reason) adjudication.setReason(AdjudicationReason[obj.reason]);
    return adjudication;
  }
}
