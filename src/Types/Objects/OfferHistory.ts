import { DisputeLifeCycleStage } from "../Enums/DisputeLifeCycleStage";
import { OfferActor } from "../Enums/OfferActor";
import { OfferEventType } from "../Enums/OfferEventType";
import { OfferType } from "../Enums/OfferType";
import Types, { ITypes, Static } from "../Types";
import Money, { TMoney } from "./Money";

export type TOfferHistory = {
  actor?: keyof typeof OfferActor;
  dispute_life_cycle_stage?: keyof typeof DisputeLifeCycleStage;
  event_type?: keyof typeof OfferEventType;
  notes?: string;
  offer_amount?: TMoney;
  offer_time?: string;
  offer_type?: keyof typeof OfferType;
};

class OfferHistory extends Types implements Static<ITypes, typeof OfferHistory> {
  actor?: OfferActor;
  disputeLifeCycleStage?: DisputeLifeCycleStage;
  eventType?: OfferEventType;
  notes?: string;
  offerAmount?: Money;
  offerTime?: string;
  offerType?: OfferType;

  constructor() {
    super();
  }

  setActor(actor: OfferActor | ((type: typeof OfferActor) => OfferActor)) {
    if (typeof actor === "function") this.actor = actor(OfferActor);
    else this.actor = actor;
    return this;
  }

  setDisputeLifeCycleStage(
    disputeLifeCycleStage: DisputeLifeCycleStage | ((type: typeof DisputeLifeCycleStage) => DisputeLifeCycleStage)
  ) {
    if (typeof disputeLifeCycleStage === "function")
      this.disputeLifeCycleStage = disputeLifeCycleStage(DisputeLifeCycleStage);
    else this.disputeLifeCycleStage = disputeLifeCycleStage;
    return this;
  }

  setEventType(eventType: OfferEventType | ((type: typeof OfferEventType) => OfferEventType)) {
    if (typeof eventType === "function") this.eventType = eventType(OfferEventType);
    else this.eventType = eventType;
    return this;
  }

  setNotes(notes: string) {
    this.notes = notes;
    return this;
  }

  setOfferAmount(offerAmount: Money | ((type: Money) => void)) {
    if (offerAmount instanceof Money) this.offerAmount = offerAmount;
    else offerAmount((this.offerAmount = new Money()));
    return this;
  }

  setOfferTime(offerTime: string) {
    this.offerTime = offerTime;
    return this;
  }

  setOfferType(offerType: OfferType | ((type: typeof OfferType) => OfferType)) {
    if (typeof offerType === "function") this.offerType = offerType(OfferType);
    else this.offerType = offerType;
    return this;
  }

  static fromObject(obj: TOfferHistory) {
    const offerHistory = new OfferHistory();
    if (obj.actor) offerHistory.setActor(OfferActor[obj.actor]);
    if (obj.dispute_life_cycle_stage)
      offerHistory.setDisputeLifeCycleStage(DisputeLifeCycleStage[obj.dispute_life_cycle_stage]);
    if (obj.event_type) offerHistory.setEventType(OfferEventType[obj.event_type]);
    if (obj.notes) offerHistory.setNotes(obj.notes);
    if (obj.offer_amount) offerHistory.setOfferAmount(Money.fromObject(obj.offer_amount));
    if (obj.offer_time) offerHistory.setOfferTime(obj.offer_time);
    if (obj.offer_type) offerHistory.setOfferType(OfferType[obj.offer_type]);
    return offerHistory;
  }
}

export default OfferHistory;
