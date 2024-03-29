import { IUtility, OnlySetters, Static, Utility } from "../../Utility";
import { DisputeChannel } from "../Enums/DisputeChannel";
import { DisputeLifecycleStage } from "../Enums/DisputeLifecycleStage";
import { Reason } from "../Enums/Reason";
import { Status } from "../Enums/Status";
import { Adjudication, TAdjudication } from "./Adjudication";
import { AllowedResponseOptions, TAllowedResponseOptions } from "./AllowedResponseOptions";
import CommunicationDetails, { TCommunicationDetails } from "./CommunicationDetails";
import { Cryptocurrency, TCryptocurrency } from "./Cryptocurrency";
import { DisputeOutcome, TDisputeOutcome } from "./DisputeOutcome";
import { Evidence, TEvidence } from "./Evidence";
import { Extensions, TExtensions } from "./Extensions";
import { LinkDescription, TLinkDescription } from "./LinkDescription";
import { Message, TMessage } from "./Message";
import { Money, TMoney } from "./Money";
import { MoneyMovement, TMoneyMovement } from "./MoneyMovement";
import { Offer, TOffer } from "./Offer";
import { ResponseRefundDetails, TResponseRefundDetails } from "./ResponseRefundDetails";
import { SupportingInfo, TSupportingInfo } from "./SupportingInfo";
import { TTransactionInfo, TransactionInfo } from "./TransactionInfo";

export type TDispute = {
  adjudications?: TAdjudication[];
  allowed_response_options?: TAllowedResponseOptions;
  buyer_response_due_date?: string;
  communication_details?: TCommunicationDetails;
  create_time?: string;
  dispute_amount?: TMoney;
  dispute_asset?: TCryptocurrency;
  dispute_channel?: keyof typeof DisputeChannel;
  dispute_id?: string;
  dispute_life_cycle_stage?: keyof typeof DisputeLifecycleStage;
  dispute_outcome?: TDisputeOutcome;
  disputed_transactions?: TTransactionInfo[];
  evidences?: TEvidence[];
  extensions?: TExtensions;
  external_reason_code?: string;
  fee_policy?: any;
  links?: TLinkDescription[];
  messages?: TMessage[];
  money_movements?: TMoneyMovement[];
  offer?: TOffer;
  reason?: keyof typeof Reason;
  refund_details?: TResponseRefundDetails;
  seller_response_due_date?: string;
  status?: keyof typeof Status;
  supporting_info?: TSupportingInfo[];
  update_time?: string;
};

type DisputeFields = {
  readonly adjudications?: Adjudication[];
  readonly allowedResponseOptions?: AllowedResponseOptions;
  readonly buyerResponseDueDate?: string;
  readonly communicationDetails?: CommunicationDetails;
  readonly createTime?: string;
  readonly disputeAmount?: Money;
  readonly disputeAsset?: Cryptocurrency;
  readonly disputeChannel?: DisputeChannel;
  readonly disputeId?: string;
  readonly disputeLifeCycleStage?: DisputeLifecycleStage;
  readonly disputeOutcome?: DisputeOutcome;
  readonly disputedTransactions?: TransactionInfo[];
  readonly evidences?: Evidence[];
  readonly extensions?: Extensions;
  readonly externalReasonCode?: string;
  readonly feePolicy?: {};
  readonly links?: LinkDescription[];
  readonly messages?: Message[];
  readonly moneyMovements?: MoneyMovement[];
  readonly offer?: Offer;
  readonly reason?: Reason;
  readonly refundDetails?: ResponseRefundDetails;
  readonly sellerResponseDueDate?: string;
  readonly status?: Status;
  readonly supportingInfo?: SupportingInfo[];
  readonly updateTime?: string;
};

export class Dispute extends Utility implements Static<IUtility, typeof Dispute> {
  private adjudications!: Adjudication[];
  private allowedResponseOptions!: AllowedResponseOptions;
  private buyerResponseDueDate!: string;
  private communicationDetails!: CommunicationDetails;
  private createTime!: string;
  private disputeAmount!: Money;
  private disputeAsset!: Cryptocurrency;
  private disputeChannel!: DisputeChannel;
  private disputeId!: string;
  private disputeLifeCycleStage!: DisputeLifecycleStage;
  private disputeOutcome!: DisputeOutcome;
  private disputedTransactions!: TransactionInfo[];
  private evidences!: Evidence[];
  private extensions!: Extensions;
  private externalReasonCode?: string;

  /**
   * @deprecated
   */
  private feePolicy = {};

  private links!: LinkDescription[];
  private messages?: Message[];
  private moneyMovements?: MoneyMovement[];
  private offer?: Offer;
  private reason?: Reason;
  private refundDetails?: ResponseRefundDetails;
  private sellerResponseDueDate?: string;
  private status?: Status;
  private supportingInfo?: SupportingInfo[];
  private updateTime?: string;

  public setAdjudications(...adjudications: Adjudication[]): OnlySetters<this>;
  public setAdjudications(...adjudications: ((adjudication: OnlySetters<Adjudication>) => void)[]): OnlySetters<this>;
  public setAdjudications(
    ...adjudications: (Adjudication | ((adjudication: OnlySetters<Adjudication>) => void))[]
  ): OnlySetters<this> {
    this.adjudications = adjudications.map((adjudication) => {
      if (adjudication instanceof Adjudication) return adjudication;
      else {
        const newAdjudication = new Adjudication();
        adjudication(newAdjudication);
        return newAdjudication;
      }
    });
    return this;
  }
  public getAdjudications() {
    return this.adjudications;
  }

  public setAllowedResponseOptions(allowedResponseOptions: AllowedResponseOptions): OnlySetters<this>;
  public setAllowedResponseOptions(
    allowedResponseOptions: (allowedResponseOptions: OnlySetters<AllowedResponseOptions>) => void
  ): OnlySetters<this>;
  public setAllowedResponseOptions(
    allowedResponseOptions:
      | AllowedResponseOptions
      | ((allowedResponseOptions: OnlySetters<AllowedResponseOptions>) => void)
  ): OnlySetters<this> {
    if (allowedResponseOptions instanceof AllowedResponseOptions) this.allowedResponseOptions = allowedResponseOptions;
    else allowedResponseOptions((this.allowedResponseOptions = new AllowedResponseOptions()));
    return this;
  }
  public getAllowedResponseOptions() {
    return this.allowedResponseOptions;
  }

  public setBuyerResponseDueDate(buyerResponseDueDate: string): OnlySetters<this> {
    this.buyerResponseDueDate = buyerResponseDueDate;
    return this;
  }
  public getBuyerResponseDueDate() {
    return this.buyerResponseDueDate;
  }

  public setCommunicationDetails(communicationDetails: CommunicationDetails): OnlySetters<this>;
  public setCommunicationDetails(
    communicationDetails: (communicationDetails: OnlySetters<CommunicationDetails>) => void
  ): OnlySetters<this>;
  public setCommunicationDetails(
    communicationDetails: CommunicationDetails | ((communicationDetails: OnlySetters<CommunicationDetails>) => void)
  ): OnlySetters<this> {
    if (communicationDetails instanceof CommunicationDetails) this.communicationDetails = communicationDetails;
    else communicationDetails((this.communicationDetails = new CommunicationDetails()));
    return this;
  }
  public getCommunicationDetails() {
    return this.communicationDetails;
  }

  public setCreateTime(createTime: string): OnlySetters<this> {
    this.createTime = createTime;
    return this;
  }
  public getCreateTime() {
    return this.createTime;
  }

  public setDisputeAmount(disputeAmount: Money): OnlySetters<this>;
  public setDisputeAmount(disputeAmount: (disputeAmount: OnlySetters<Money>) => void): OnlySetters<this>;
  public setDisputeAmount(disputeAmount: Money | ((disputeAmount: OnlySetters<Money>) => void)): OnlySetters<this> {
    if (disputeAmount instanceof Money) this.disputeAmount = disputeAmount;
    else disputeAmount((this.disputeAmount = new Money()));
    return this;
  }
  public getDisputeAmount() {
    return this.disputeAmount;
  }

  public setDisputeAsset(disputeAsset: Cryptocurrency): OnlySetters<this>;
  public setDisputeAsset(disputeAsset: (disputeAsset: OnlySetters<Cryptocurrency>) => void): OnlySetters<this>;
  public setDisputeAsset(
    disputeAsset: Cryptocurrency | ((disputeAsset: OnlySetters<Cryptocurrency>) => void)
  ): OnlySetters<this> {
    if (disputeAsset instanceof Cryptocurrency) this.disputeAsset = disputeAsset;
    else disputeAsset((this.disputeAsset = new Cryptocurrency()));
    return this;
  }
  public getDisputeAsset() {
    return this.disputeAsset;
  }

  public setDisputeChannel(disputeChannel: DisputeChannel): OnlySetters<this>;
  public setDisputeChannel(
    disputeChannel: (disputeChannel: typeof DisputeChannel) => DisputeChannel
  ): OnlySetters<this>;
  public setDisputeChannel(
    disputeChannel: DisputeChannel | ((disputeChannel: typeof DisputeChannel) => DisputeChannel)
  ): OnlySetters<this> {
    if (typeof disputeChannel === "function") this.disputeChannel = disputeChannel(DisputeChannel);
    else this.disputeChannel = disputeChannel;
    return this;
  }
  public getDisputeChannel() {
    return this.disputeChannel;
  }

  public setDisputeId(disputeId: string): OnlySetters<this> {
    this.disputeId = disputeId;
    return this;
  }
  public getDisputeId() {
    return this.disputeId;
  }

  public setDisputeLifeCycleStage(disputeLifeCycleStage: DisputeLifecycleStage): OnlySetters<this>;
  public setDisputeLifeCycleStage(
    disputeLifeCycleStage: (disputeLifeCycleStage: typeof DisputeLifecycleStage) => DisputeLifecycleStage
  ): OnlySetters<this>;
  public setDisputeLifeCycleStage(
    disputeLifeCycleStage:
      | DisputeLifecycleStage
      | ((disputeLifeCycleStage: typeof DisputeLifecycleStage) => DisputeLifecycleStage)
  ): OnlySetters<this> {
    if (typeof disputeLifeCycleStage === "function")
      this.disputeLifeCycleStage = disputeLifeCycleStage(DisputeLifecycleStage);
    else this.disputeLifeCycleStage = disputeLifeCycleStage;
    return this;
  }
  public getDisputeLifeCycleStage() {
    return this.disputeLifeCycleStage;
  }

  public setDisputeOutcome(disputeOutcome: DisputeOutcome): OnlySetters<this>;
  public setDisputeOutcome(disputeOutcome: (disputeOutcome: OnlySetters<DisputeOutcome>) => void): OnlySetters<this>;
  public setDisputeOutcome(
    disputeOutcome: DisputeOutcome | ((disputeOutcome: OnlySetters<DisputeOutcome>) => void)
  ): OnlySetters<this> {
    if (disputeOutcome instanceof DisputeOutcome) this.disputeOutcome = disputeOutcome;
    else disputeOutcome((this.disputeOutcome = new DisputeOutcome()));
    return this;
  }
  public getDisputeOutcome() {
    return this.disputeOutcome;
  }

  public setDisputedTransactions(...disputedTransactions: TransactionInfo[]): OnlySetters<this>;
  public setDisputedTransactions(
    ...disputedTransactions: ((transactionInfo: OnlySetters<TransactionInfo>) => void)[]
  ): OnlySetters<this>;
  public setDisputedTransactions(
    ...disputedTransactions: (TransactionInfo | ((transactionInfo: OnlySetters<TransactionInfo>) => void))[]
  ): OnlySetters<this> {
    this.disputedTransactions = disputedTransactions.map((transactionInfo) => {
      if (transactionInfo instanceof TransactionInfo) return transactionInfo;
      else {
        const newTransactionInfo = new TransactionInfo();
        transactionInfo(newTransactionInfo);
        return newTransactionInfo;
      }
    });
    return this;
  }
  public getDisputedTransactions() {
    return this.disputedTransactions;
  }

  public setEvidences(...evidences: Evidence[]): OnlySetters<this>;
  public setEvidences(...evidences: ((evidence: OnlySetters<Evidence>) => void)[]): OnlySetters<this>;
  public setEvidences(...evidences: (Evidence | ((evidence: OnlySetters<Evidence>) => void))[]): OnlySetters<this> {
    this.evidences = evidences.map((evidence) => {
      if (evidence instanceof Evidence) return evidence;
      else {
        const newEvidence = new Evidence();
        evidence(newEvidence);
        return newEvidence;
      }
    });
    return this;
  }
  public getEvidences() {
    return this.evidences;
  }

  public setExtensions(extensions: Extensions): OnlySetters<this>;
  public setExtensions(extensions: (extensions: OnlySetters<Extensions>) => void): OnlySetters<this>;
  public setExtensions(extensions: Extensions | ((extensions: OnlySetters<Extensions>) => void)): OnlySetters<this> {
    if (extensions instanceof Extensions) this.extensions = extensions;
    else extensions((this.extensions = new Extensions()));
    return this;
  }
  public getExtensions() {
    return this.extensions;
  }

  public setExternalReasonCode(externalReasonCode: string): OnlySetters<this> {
    this.externalReasonCode = externalReasonCode;
    return this;
  }
  public getExternalReasonCode() {
    return this.externalReasonCode;
  }

  public setFeePolicy(feePolicy: {}): OnlySetters<this> {
    this.feePolicy = feePolicy;
    return this;
  }
  public getFeePolicy() {
    return this.feePolicy;
  }

  public setLinks(...links: LinkDescription[]): OnlySetters<this>;
  public setLinks(...links: ((link: OnlySetters<LinkDescription>) => void)[]): OnlySetters<this>;
  public setLinks(...links: (LinkDescription | ((link: OnlySetters<LinkDescription>) => void))[]): OnlySetters<this> {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      else {
        const newLink = new LinkDescription();
        link(newLink);
        return newLink;
      }
    });
    return this;
  }
  public getLinks() {
    return this.links;
  }

  public setMessages(...messages: Message[]): OnlySetters<this>;
  public setMessages(...messages: ((message: OnlySetters<Message>) => void)[]): OnlySetters<this>;
  public setMessages(...messages: (Message | ((message: OnlySetters<Message>) => void))[]): OnlySetters<this> {
    this.messages = messages.map((message) => {
      if (message instanceof Message) return message;
      else {
        const newMessage = new Message();
        message(newMessage);
        return newMessage;
      }
    });
    return this;
  }
  public getMessages() {
    return this.messages;
  }

  public setMoneyMovements(...moneyMovements: MoneyMovement[]): OnlySetters<this>;
  public setMoneyMovements(
    ...moneyMovements: ((moneyMovement: OnlySetters<MoneyMovement>) => void)[]
  ): OnlySetters<this>;
  public setMoneyMovements(
    ...moneyMovements: (MoneyMovement | ((moneyMovement: OnlySetters<MoneyMovement>) => void))[]
  ): OnlySetters<this> {
    this.moneyMovements = moneyMovements.map((moneyMovement) => {
      if (moneyMovement instanceof MoneyMovement) return moneyMovement;
      else {
        const newMoneyMovement = new MoneyMovement();
        moneyMovement(newMoneyMovement);
        return newMoneyMovement;
      }
    });
    return this;
  }
  public getMoneyMovements() {
    return this.moneyMovements;
  }

  public setOffer(offer: Offer): OnlySetters<this>;
  public setOffer(offer: (offer: OnlySetters<Offer>) => void): OnlySetters<this>;
  public setOffer(offer: Offer | ((offer: OnlySetters<Offer>) => void)): OnlySetters<this> {
    if (offer instanceof Offer) this.offer = offer;
    else offer((this.offer = new Offer()));
    return this;
  }
  public getOffer() {
    return this.offer;
  }

  public setReason(reason: Reason): OnlySetters<this>;
  public setReason(reason: (reason: typeof Reason) => Reason): OnlySetters<this>;
  public setReason(reason: Reason | ((reason: typeof Reason) => Reason)): OnlySetters<this> {
    if (typeof reason === "function") this.reason = reason(Reason);
    else this.reason = reason;
    return this;
  }
  public getReason() {
    return this.reason;
  }

  public setRefundDetails(refundDetails: ResponseRefundDetails): OnlySetters<this>;
  public setRefundDetails(
    refundDetails: (refundDetails: OnlySetters<ResponseRefundDetails>) => void
  ): OnlySetters<this>;
  public setRefundDetails(
    refundDetails: ResponseRefundDetails | ((refundDetails: OnlySetters<ResponseRefundDetails>) => void)
  ): OnlySetters<this> {
    if (refundDetails instanceof ResponseRefundDetails) this.refundDetails = refundDetails;
    else refundDetails((this.refundDetails = new ResponseRefundDetails()));
    return this;
  }
  public getRefundDetails() {
    return this.refundDetails;
  }

  public setSellerResponseDueDate(sellerResponseDueDate: string): OnlySetters<this> {
    this.sellerResponseDueDate = sellerResponseDueDate;
    return this;
  }
  public getSellerResponseDueDate() {
    return this.sellerResponseDueDate;
  }

  public setStatus(status: Status): OnlySetters<this>;
  public setStatus(status: (status: typeof Status) => Status): OnlySetters<this>;
  public setStatus(status: Status | ((status: typeof Status) => Status)): OnlySetters<this> {
    if (typeof status === "function") this.status = status(Status);
    else this.status = status;
    return this;
  }
  public getStatus() {
    return this.status;
  }

  public setSupportingInfo(...supportingInfo: SupportingInfo[]): OnlySetters<this>;
  public setSupportingInfo(
    ...supportingInfo: ((supportingInfo: OnlySetters<SupportingInfo>) => void)[]
  ): OnlySetters<this>;
  public setSupportingInfo(
    ...supportingInfo: (SupportingInfo | ((supportingInfo: OnlySetters<SupportingInfo>) => void))[]
  ): OnlySetters<this> {
    this.supportingInfo = supportingInfo.map((supportingInfo) => {
      if (supportingInfo instanceof SupportingInfo) return supportingInfo;
      else {
        const newSupportingInfo = new SupportingInfo();
        supportingInfo(newSupportingInfo);
        return newSupportingInfo;
      }
    });
    return this;
  }
  public getSupportingInfo() {
    return this.supportingInfo;
  }

  public setUpdateTime(updateTime: string): OnlySetters<this> {
    this.updateTime = updateTime;
    return this;
  }
  public getUpdateTime() {
    return this.updateTime;
  }

  public override getFields<T extends DisputeFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TDispute) {
    const dispute = new Dispute();
    if (obj.adjudications) dispute.setAdjudications(...obj.adjudications.map(Adjudication.fromObject));
    if (obj.allowed_response_options)
      dispute.setAllowedResponseOptions(AllowedResponseOptions.fromObject(obj.allowed_response_options));
    if (obj.buyer_response_due_date) dispute.setBuyerResponseDueDate(obj.buyer_response_due_date);
    if (obj.communication_details)
      dispute.setCommunicationDetails(CommunicationDetails.fromObject(obj.communication_details));
    if (obj.create_time) dispute.setCreateTime(obj.create_time);
    if (obj.dispute_amount) dispute.setDisputeAmount(Money.fromObject(obj.dispute_amount));
    if (obj.dispute_asset) dispute.setDisputeAsset(Cryptocurrency.fromObject(obj.dispute_asset));
    if (obj.dispute_channel) dispute.setDisputeChannel(DisputeChannel[obj.dispute_channel]);
    if (obj.dispute_id) dispute.setDisputeId(obj.dispute_id);
    if (obj.dispute_life_cycle_stage)
      dispute.setDisputeLifeCycleStage(DisputeLifecycleStage[obj.dispute_life_cycle_stage]);
    if (obj.dispute_outcome) dispute.setDisputeOutcome(DisputeOutcome.fromObject(obj.dispute_outcome));
    if (obj.disputed_transactions)
      dispute.setDisputedTransactions(...obj.disputed_transactions.map(TransactionInfo.fromObject));
    if (obj.evidences) dispute.setEvidences(...obj.evidences.map(Evidence.fromObject));
    if (obj.extensions) dispute.setExtensions(Extensions.fromObject(obj.extensions));
    if (obj.external_reason_code) dispute.setExternalReasonCode(obj.external_reason_code);
    if (obj.fee_policy) dispute.setFeePolicy(obj.fee_policy);
    if (obj.links) dispute.setLinks(...obj.links.map(LinkDescription.fromObject));
    if (obj.messages) dispute.setMessages(...obj.messages.map(Message.fromObject));
    if (obj.offer) dispute.setOffer(Offer.fromObject(obj.offer));
    if (obj.reason) dispute.setReason(Reason[obj.reason]);
    if (obj.refund_details) dispute.setRefundDetails(ResponseRefundDetails.fromObject(obj.refund_details));
    if (obj.seller_response_due_date) dispute.setSellerResponseDueDate(obj.seller_response_due_date);
    if (obj.status) dispute.setStatus(Status[obj.status]);
    if (obj.supporting_info) dispute.setSupportingInfo(...obj.supporting_info.map(SupportingInfo.fromObject));
    if (obj.update_time) dispute.setUpdateTime(obj.update_time);
    return dispute;
  }
}
