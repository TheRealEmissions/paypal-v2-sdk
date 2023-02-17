import { AdjudicationReason } from "../Enums/AdjudicationReason";
import { AdjudicationType } from "../Enums/AdjudicationType";
import { DisputeLifeCycleStage } from "../Enums/DisputeLifeCycleStage";
import Types from "../Types";

export type TAdjudication = {
  adjudication_time: string;
  type: keyof typeof AdjudicationType;
  dispute_life_cycle_stage?: keyof typeof DisputeLifeCycleStage;
  reason?: keyof typeof AdjudicationReason;
};

class Adjudication extends Types {
  adjudicationTime!: string;
  type!: AdjudicationType;
  disputeLifeCycleStage?: DisputeLifeCycleStage;
  reason?: AdjudicationReason;
  constructor() {
    super();
  }

  setAdjudicationTime(adjudicationTime: string) {
    this.adjudicationTime = adjudicationTime;
    return this;
  }

  setType(type: AdjudicationType) {
    this.type = type;
    return this;
  }

  setDisputeLifeCycleStage(disputeLifeCycleStage: DisputeLifeCycleStage) {
    this.disputeLifeCycleStage = disputeLifeCycleStage;
    return this;
  }

  setReason(reason: AdjudicationReason) {
    this.reason = reason;
    return this;
  }

  override fromObject(obj: TAdjudication) {
    this.adjudicationTime = obj.adjudication_time;
    this.type = AdjudicationType[obj.type as keyof typeof AdjudicationType];
    this.disputeLifeCycleStage =
      DisputeLifeCycleStage[obj.dispute_life_cycle_stage as keyof typeof DisputeLifeCycleStage];
    this.reason = AdjudicationReason[obj.reason as keyof typeof AdjudicationReason];
    return this;
  }
}

export default Adjudication;
