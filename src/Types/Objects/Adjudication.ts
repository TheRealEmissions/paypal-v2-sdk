import { AdjudicationReason } from "../Enums/AdjudicationReason";
import { AdjudicationType } from "../Enums/AdjudicationType";
import { DisputeLifeCycleStage } from "../Enums/DisputeLifeCycleStage";
import Types, { ITypes, StaticImplements } from "../Types";

export type TAdjudication = {
  adjudication_time: string;
  type: keyof typeof AdjudicationType;
  dispute_life_cycle_stage?: keyof typeof DisputeLifeCycleStage;
  reason?: keyof typeof AdjudicationReason;
};

class Adjudication extends Types implements StaticImplements<ITypes, typeof Adjudication> {
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

export default Adjudication;
