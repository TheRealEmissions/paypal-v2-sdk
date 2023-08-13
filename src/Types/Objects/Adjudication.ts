import { AdjudicationReason } from "../Enums/AdjudicationReason";
import { AdjudicationType } from "../Enums/AdjudicationType";
import { DisputeLifeCycleStage } from "../Enums/DisputeLifeCycleStage";
import Types, { ITypes, Static } from "../Types";

export type TAdjudication = {
  adjudication_time: string;
  type: keyof typeof AdjudicationType;
  dispute_life_cycle_stage?: keyof typeof DisputeLifeCycleStage;
  reason?: keyof typeof AdjudicationReason;
};

export class Adjudication extends Types implements Static<ITypes, typeof Adjudication> {
  adjudicationTime!: string;
  type!: AdjudicationType;
  disputeLifeCycleStage?: DisputeLifeCycleStage;
  reason?: AdjudicationReason;

  setAdjudicationTime(adjudicationTime: string) {
    this.adjudicationTime = adjudicationTime;
    return this;
  }

  setType(type: AdjudicationType): this;
  setType(type: (type: typeof AdjudicationType) => AdjudicationType): this;
  setType(type: AdjudicationType | ((type: typeof AdjudicationType) => AdjudicationType)) {
    if (typeof type === "function") this.type = type(AdjudicationType);
    else this.type = type;
    return this;
  }

  setDisputeLifeCycleStage(disputeLifeCycleStage: DisputeLifeCycleStage): this;
  setDisputeLifeCycleStage(disputeLifeCycleStage: (type: typeof DisputeLifeCycleStage) => DisputeLifeCycleStage): this;
  setDisputeLifeCycleStage(
    disputeLifeCycleStage: DisputeLifeCycleStage | ((type: typeof DisputeLifeCycleStage) => DisputeLifeCycleStage)
  ) {
    if (typeof disputeLifeCycleStage === "function")
      this.disputeLifeCycleStage = disputeLifeCycleStage(DisputeLifeCycleStage);
    else this.disputeLifeCycleStage = disputeLifeCycleStage;
    return this;
  }

  setReason(reason: AdjudicationReason): this;
  setReason(reason: (type: typeof AdjudicationReason) => AdjudicationReason): this;
  setReason(reason: AdjudicationReason | ((type: typeof AdjudicationReason) => AdjudicationReason)) {
    if (typeof reason === "function") this.reason = reason(AdjudicationReason);
    else this.reason = reason;
    return this;
  }

  static fromObject(obj: TAdjudication) {
    const adjudication = new Adjudication();
    adjudication.setAdjudicationTime(obj.adjudication_time);
    adjudication.setType(AdjudicationType[obj.type]);
    if (obj.dispute_life_cycle_stage)
      adjudication.setDisputeLifeCycleStage(DisputeLifeCycleStage[obj.dispute_life_cycle_stage]);
    if (obj.reason) adjudication.setReason(AdjudicationReason[obj.reason]);
    return adjudication;
  }
}
