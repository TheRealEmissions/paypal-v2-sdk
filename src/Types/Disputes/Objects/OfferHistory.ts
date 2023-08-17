import { DisputeLifecycleStage } from "../Enums/DisputeLifecycleStage.js";
import { OfferType } from "../Enums/OfferType.js";
import { IUtility, OnlySetters, Static, Utility } from "../../Utility.js";
import { Money, TMoney } from "./Money.js";
import { OfferHistoryActor } from "../Enums/OfferHistoryActor.js";
import { OfferHistoryEventType } from "../Enums/OfferHistoryEventType.js";

export type TOfferHistory = {
  actor?: keyof typeof OfferHistoryActor;
  dispute_life_cycle_stage?: keyof typeof DisputeLifecycleStage;
  event_type?: keyof typeof OfferHistoryEventType;
  notes?: string;
  offer_amount?: TMoney;
  offer_time?: string;
  offer_type?: keyof typeof OfferType;
};

export class OfferHistory extends Utility implements Static<IUtility, typeof OfferHistory> {
  private actor?: OfferHistoryActor;
  private disputeLifeCycleStage?: DisputeLifecycleStage;
  private eventType?: OfferHistoryEventType;
  private notes?: string;
  private offerAmount?: Money;
  private offerTime?: string;
  private offerType?: OfferType;

  public setActor(actor: OfferHistoryActor): this;
  public setActor(actor: (type: typeof OfferHistoryActor) => OfferHistoryActor): this;
  public setActor(actor: OfferHistoryActor | ((type: typeof OfferHistoryActor) => OfferHistoryActor)) {
    if (typeof actor === "function") this.actor = actor(OfferHistoryActor);
    else this.actor = actor;
    return this;
  }
  public getActor() {
    return this.actor;
  }

  public setDisputeLifeCycleStage(disputeLifeCycleStage: DisputeLifecycleStage): this;
  public setDisputeLifeCycleStage(
    disputeLifeCycleStage: (type: typeof DisputeLifecycleStage) => DisputeLifecycleStage
  ): this;
  public setDisputeLifeCycleStage(
    disputeLifeCycleStage: DisputeLifecycleStage | ((type: typeof DisputeLifecycleStage) => DisputeLifecycleStage)
  ) {
    if (typeof disputeLifeCycleStage === "function")
      this.disputeLifeCycleStage = disputeLifeCycleStage(DisputeLifecycleStage);
    else this.disputeLifeCycleStage = disputeLifeCycleStage;
    return this;
  }
  public getDisputeLifeCycleStage() {
    return this.disputeLifeCycleStage;
  }

  public setEventType(eventType: OfferHistoryEventType): this;
  public setEventType(eventType: (type: typeof OfferHistoryEventType) => OfferHistoryEventType): this;
  public setEventType(
    eventType: OfferHistoryEventType | ((type: typeof OfferHistoryEventType) => OfferHistoryEventType)
  ) {
    if (typeof eventType === "function") this.eventType = eventType(OfferHistoryEventType);
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
  public setOfferAmount(offerAmount: (type: OnlySetters<Money>) => void): this;
  public setOfferAmount(offerAmount: Money | ((type: OnlySetters<Money>) => void)) {
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
    if (obj.actor) offerHistory.setActor(OfferHistoryActor[obj.actor]);
    if (obj.dispute_life_cycle_stage)
      offerHistory.setDisputeLifeCycleStage(DisputeLifecycleStage[obj.dispute_life_cycle_stage]);
    if (obj.event_type) offerHistory.setEventType(OfferHistoryEventType[obj.event_type]);
    if (obj.notes) offerHistory.setNotes(obj.notes);
    if (obj.offer_amount) offerHistory.setOfferAmount(Money.fromObject(obj.offer_amount));
    if (obj.offer_time) offerHistory.setOfferTime(obj.offer_time);
    if (obj.offer_type) offerHistory.setOfferType(OfferType[obj.offer_type]);
    return offerHistory;
  }
}
