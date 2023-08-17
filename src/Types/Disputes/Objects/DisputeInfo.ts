import { IUtility, OnlySetters, Static, Utility } from "../../Utility";
import { DisputeChannel } from "../Enums/DisputeChannel";
import { DisputeLifecycleStage } from "../Enums/DisputeLifecycleStage";
import { DisputeState } from "../Enums/DisputeState";
import { Reason } from "../Enums/Reason";
import { Status } from "../Enums/Status";
import { Cryptocurrency, TCryptocurrency } from "./Cryptocurrency";
import { LinkDescription, TLinkDescription } from "./LinkDescription";
import { Money, TMoney } from "./Money";

export type TDisputeInfo = {
  buyer_response_due_date?: string;
  create_time?: string;
  dispute_amount?: TMoney;
  dispute_asset?: TCryptocurrency;
  dispute_channel?: keyof typeof DisputeChannel;
  dispute_id?: string;
  dispute_life_cycle_stage?: keyof typeof DisputeLifecycleStage;
  dispute_state?: keyof typeof DisputeState;
  links?: TLinkDescription[];
  reason?: keyof typeof Reason;
  seller_response_due_date?: string;
  status?: keyof typeof Status;
  update_time?: string;
};

export class DisputeInfo extends Utility implements Static<IUtility, typeof DisputeInfo> {
  private buyerResponseDueDate?: string;
  private createTime?: string;
  private disputeAmount?: Money;
  private disputeAsset?: Cryptocurrency;
  private disputeChannel?: DisputeChannel;
  private disputeId?: string;
  private disputeLifeCycleStage?: DisputeLifecycleStage;
  private disputeState?: DisputeState;
  private links?: LinkDescription[];
  private reason?: Reason;
  private sellerResponseDueDate?: string;
  private status?: Status;
  private updateTime?: string;

  public setBuyerResponseDueDate(buyerResponseDueDate: string) {
    this.buyerResponseDueDate = buyerResponseDueDate;
    return this;
  }
  public getBuyerResponseDueDate() {
    return this.buyerResponseDueDate;
  }

  public setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }
  public getCreateTime() {
    return this.createTime;
  }

  public setDisputeAmount(disputeAmount: Money): this;
  public setDisputeAmount(disputeAmount: (type: OnlySetters<Money>) => void): this;
  public setDisputeAmount(disputeAmount: Money | ((type: OnlySetters<Money>) => void)) {
    if (typeof disputeAmount === "function") disputeAmount((this.disputeAmount = new Money()));
    else this.disputeAmount = disputeAmount;
    return this;
  }
  public getDisputeAmount() {
    return this.disputeAmount;
  }

  public setDisputeAsset(disputeAsset: Cryptocurrency): this;
  public setDisputeAsset(disputeAsset: (type: OnlySetters<Cryptocurrency>) => void): this;
  public setDisputeAsset(disputeAsset: Cryptocurrency | ((type: OnlySetters<Cryptocurrency>) => void)) {
    if (typeof disputeAsset === "function") disputeAsset((this.disputeAsset = new Cryptocurrency()));
    else this.disputeAsset = disputeAsset;
    return this;
  }
  public getDisputeAsset() {
    return this.disputeAsset;
  }

  public setDisputeChannel(disputeChannel: DisputeChannel): this;
  public setDisputeChannel(disputeChannel: (type: typeof DisputeChannel) => DisputeChannel): this;
  public setDisputeChannel(disputeChannel: DisputeChannel | ((type: typeof DisputeChannel) => DisputeChannel)) {
    if (typeof disputeChannel === "function") this.disputeChannel = disputeChannel(DisputeChannel);
    else this.disputeChannel = disputeChannel;
    return this;
  }
  public getDisputeChannel() {
    return this.disputeChannel;
  }

  public setDisputeId(disputeId: string) {
    this.disputeId = disputeId;
    return this;
  }
  public getDisputeId() {
    return this.disputeId;
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

  public setDisputeState(disputeState: DisputeState): this;
  public setDisputeState(disputeState: (type: typeof DisputeState) => DisputeState): this;
  public setDisputeState(disputeState: DisputeState | ((type: typeof DisputeState) => DisputeState)) {
    if (typeof disputeState === "function") this.disputeState = disputeState(DisputeState);
    else this.disputeState = disputeState;
    return this;
  }
  public getDisputeState() {
    return this.disputeState;
  }

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((link: OnlySetters<LinkDescription>) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((link: OnlySetters<LinkDescription>) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkDescription = new LinkDescription();
      link(linkDescription);
      return linkDescription;
    });
    return this;
  }
  public getLinks() {
    return this.links;
  }

  public setReason(reason: Reason): this;
  public setReason(reason: (type: typeof Reason) => Reason): this;
  public setReason(reason: Reason | ((type: typeof Reason) => Reason)) {
    if (typeof reason === "function") this.reason = reason(Reason);
    else this.reason = reason;
    return this;
  }
  public getReason() {
    return this.reason;
  }

  public setSellerResponseDueDate(sellerResponseDueDate: string) {
    this.sellerResponseDueDate = sellerResponseDueDate;
    return this;
  }
  public getSellerResponseDueDate() {
    return this.sellerResponseDueDate;
  }

  public setStatus(status: Status): this;
  public setStatus(status: (type: typeof Status) => Status): this;
  public setStatus(status: Status | ((type: typeof Status) => Status)) {
    if (typeof status === "function") this.status = status(Status);
    else this.status = status;
    return this;
  }
  public getStatus() {
    return this.status;
  }

  public setUpdateTime(updateTime: string) {
    this.updateTime = updateTime;
    return this;
  }
  public getUpdateTime() {
    return this.updateTime;
  }

  public override getFields<T extends TDisputeInfo>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TDisputeInfo) {
    const disputeInfo = new DisputeInfo();
    if (obj.buyer_response_due_date) disputeInfo.setBuyerResponseDueDate(obj.buyer_response_due_date);
    if (obj.create_time) disputeInfo.setCreateTime(obj.create_time);
    if (obj.dispute_amount) disputeInfo.setDisputeAmount(Money.fromObject(obj.dispute_amount));
    if (obj.dispute_asset) disputeInfo.setDisputeAsset(Cryptocurrency.fromObject(obj.dispute_asset));
    if (obj.dispute_channel) disputeInfo.setDisputeChannel(DisputeChannel[obj.dispute_channel]);
    if (obj.dispute_id) disputeInfo.setDisputeId(obj.dispute_id);
    if (obj.dispute_life_cycle_stage)
      disputeInfo.setDisputeLifeCycleStage(DisputeLifecycleStage[obj.dispute_life_cycle_stage]);
    if (obj.dispute_state) disputeInfo.setDisputeState(DisputeState[obj.dispute_state]);
    if (obj.links) disputeInfo.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    if (obj.reason) disputeInfo.setReason(Reason[obj.reason]);
    if (obj.seller_response_due_date) disputeInfo.setSellerResponseDueDate(obj.seller_response_due_date);
    if (obj.status) disputeInfo.setStatus(Status[obj.status]);
    if (obj.update_time) disputeInfo.setUpdateTime(obj.update_time);
    return disputeInfo;
  }
}
