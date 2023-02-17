import { DisputeChannel } from "../Enums/DisputeChannel";
import { DisputeLifeCycleStage } from "../Enums/DisputeLifeCycleStage";
import { DisputeReason } from "../Enums/DisputeReason";
import { DisputeState } from "../Enums/DisputeState";
import { DisputeStatus } from "../Enums/DisputeStatus";
import Types from "../Types";
import Cryptocurrency from "./Cryptocurrency";
import LinkDescription from "./LinkDescription";
import Money from "./Money";

export type TDisputeInfo = {
  buyer_response_due_date?: string;
  create_time?: string;
  dispute_amount?: Money;
  dispute_asset?: Cryptocurrency;
  dispute_channel?: keyof typeof DisputeChannel;
  dispute_id?: string;
  dispute_life_cycle_stage?: keyof typeof DisputeLifeCycleStage;
  dispute_state?: keyof typeof DisputeState;
  links?: LinkDescription[];
  reason?: keyof typeof DisputeReason;
  seller_response_due_date?: string;
  status?: keyof typeof DisputeStatus;
  update_time?: string;
};

class DisputeInfo extends Types {
  buyerResponseDueDate?: string;
  createTime?: string;
  disputeAmount?: Money;
  disputeAsset?: Cryptocurrency;
  disputeChannel?: DisputeChannel;
  disputeId?: string;
  disputeLifeCycleStage?: DisputeLifeCycleStage;
  disputeState?: DisputeState;
  links?: LinkDescription[];
  reason?: DisputeReason;
  sellerResponseDueDate?: string;
  status?: DisputeStatus;
  updateTime?: string;
  constructor() {
    super();
  }

  setBuyerResponseDueDate(buyerResponseDueDate: string) {
    this.buyerResponseDueDate = buyerResponseDueDate;
    return this;
  }

  setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }

  setDisputeAmount(disputeAmount: Money) {
    this.disputeAmount = disputeAmount;
    return this;
  }

  setDisputeAsset(disputeAsset: Cryptocurrency) {
    this.disputeAsset = disputeAsset;
    return this;
  }

  setDisputeChannel(disputeChannel: DisputeChannel) {
    this.disputeChannel = disputeChannel;
    return this;
  }

  setDisputeId(disputeId: string) {
    this.disputeId = disputeId;
    return this;
  }

  setDisputeLifeCycleStage(disputeLifeCycleStage: DisputeLifeCycleStage) {
    this.disputeLifeCycleStage = disputeLifeCycleStage;
    return this;
  }

  setDisputeState(disputeState: DisputeState) {
    this.disputeState = disputeState;
    return this;
  }

  setLinks(links: LinkDescription[]) {
    this.links = links;
    return this;
  }

  setReason(reason: DisputeReason) {
    this.reason = reason;
    return this;
  }

  setSellerResponseDueDate(sellerResponseDueDate: string) {
    this.sellerResponseDueDate = sellerResponseDueDate;
    return this;
  }

  setStatus(status: DisputeStatus) {
    this.status = status;
    return this;
  }

  setUpdateTime(updateTime: string) {
    this.updateTime = updateTime;
    return this;
  }

  override fromObject(obj: TDisputeInfo) {
    this.buyerResponseDueDate = obj.buyer_response_due_date;
    this.createTime = obj.create_time;
    this.disputeAmount = obj.dispute_amount;
    this.disputeAsset = obj.dispute_asset;
    this.disputeChannel = DisputeChannel[obj.dispute_channel as keyof typeof DisputeChannel];
    this.disputeId = obj.dispute_id;
    this.disputeLifeCycleStage =
      DisputeLifeCycleStage[obj.dispute_life_cycle_stage as keyof typeof DisputeLifeCycleStage];
    this.disputeState = DisputeState[obj.dispute_state as keyof typeof DisputeState];
    this.links = obj.links;
    this.reason = DisputeReason[obj.reason as keyof typeof DisputeReason];
    this.sellerResponseDueDate = obj.seller_response_due_date;
    this.status = DisputeStatus[obj.status as keyof typeof DisputeStatus];
    this.updateTime = obj.update_time;
    return this;
  }
}

export default DisputeInfo;
