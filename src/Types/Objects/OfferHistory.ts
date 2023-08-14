import { DisputeLifeCycleStage } from "../Enums/DisputeLifeCycleStage.js";
import { OfferActor } from "../Enums/OfferActor.js";
import { OfferEventType } from "../Enums/OfferEventType.js";
import { OfferType } from "../Enums/OfferType.js";
import { IUtility, Static, Utility } from "../Utility.js";
import { Money, TMoney } from "./Money.js";

export type TOfferHistory = {
  actor?: keyof typeof OfferActor;
  dispute_life_cycle_stage?: keyof typeof DisputeLifeCycleStage;
  event_type?: keyof typeof OfferEventType;
  notes?: string;
  offer_amount?: TMoney;
  offer_time?: string;
  offer_type?: keyof typeof OfferType;
};

export class OfferHistory extends Utility implements Static<IUtility, typeof OfferHistory> {
  private actor?: OfferActor;
  private disputeLifeCycleStage?: DisputeLifeCycleStage;
  private eventType?: OfferEventType;
  private notes?: string;
  private offerAmount?: Money;
  private offerTime?: string;
  private offerType?: OfferType;

  public setActor(actor: OfferActor): this;
  public setActor(actor: (type: typeof OfferActor) => OfferActor): this;
  public setActor(actor: OfferActor | ((type: typeof OfferActor) => OfferActor)) {
    if (typeof actor === "function") this.actor = actor(OfferActor);
    else this.actor = actor;
    return this;
  }
  public getActor() {
    return this.actor;
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

  public setEventType(eventType: OfferEventType): this;
  public setEventType(eventType: (type: typeof OfferEventType) => OfferEventType): this;
  public setEventType(eventType: OfferEventType | ((type: typeof OfferEventType) => OfferEventType)) {
    if (typeof eventType === "function") this.eventType = eventType(OfferEventType);
    else this.eventType = eventType;
    return this;
  }
  public getEventType() {
    return this.eventType;
  }

  public setNotes(notes: string) {
    this.notes = notes;
    return this;
  }
  public getNotes() {
    return this.notes;
  }

  public setOfferAmount(offerAmount: Money): this;
  public setOfferAmount(offerAmount: (type: Money) => void): this;
  public setOfferAmount(offerAmount: Money | ((type: Money) => void)) {
    if (offerAmount instanceof Money) this.offerAmount = offerAmount;
    else offerAmount((this.offerAmount = new Money()));
    return this;
  }
  public getOfferAmount() {
    return this.offerAmount;
  }

  public setOfferTime(offerTime: string) {
    this.offerTime = offerTime;
    return this;
  }
  public getOfferTime() {
    return this.offerTime;
  }

  public setOfferType(offerType: OfferType): this;
  public setOfferType(offerType: (type: typeof OfferType) => OfferType): this;
  public setOfferType(offerType: OfferType | ((type: typeof OfferType) => OfferType)) {
    if (typeof offerType === "function") this.offerType = offerType(OfferType);
    else this.offerType = offerType;
    return this;
  }
  public getOfferType() {
    return this.offerType;
  }

  public override getFields<T extends TOfferHistory>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TOfferHistory) {
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
