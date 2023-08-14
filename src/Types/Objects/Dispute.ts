import { DisputeChannel } from "../Enums/DisputeChannel.js";
import { DisputeLifeCycleStage } from "../Enums/DisputeLifeCycleStage.js";
import { DisputeReason } from "../Enums/DisputeReason.js";
import { DisputeStatus } from "../Enums/DisputeStatus.js";
import { Adjudication, TAdjudication } from "./Adjudication.js";
import { AllowedResponseOptions, TAllowedResponseOptions } from "./AllowedResponseOptions.js";
import { CommunicationDetails, TCommunicationDetails } from "./CommunicationDetails.js";
import { Cryptocurrency, TCryptocurrency } from "./Cryptocurrency.js";
import { DisputeOutcome, TDisputeOutcome } from "./DisputeOutcome.js";
import { Evidence, TEvidence } from "./Evidence.js";
import { Extensions, TExtensions } from "./Extensions.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";
import { Message, TMessage } from "./Message.js";
import { Money, TMoney } from "./Money.js";
import { MoneyMovement, TMoneyMovement } from "./MoneyMovement.js";
import { Offer, TOffer } from "./Offer.js";
import { ResponseRefundDetails, TResponseRefundDetails } from "./ResponseRefundDetails.js";
import { TransactionInfo, TTransactionInfo } from "./TransactionInfo.js";
import { SupportingInfo, TSupportingInfo } from "./SupportingInfo.js";
import { IUtility, Static, Utility } from "../Utility.js";

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
  dispute_life_cycle_stage?: keyof typeof DisputeLifeCycleStage;
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
  reason?: keyof typeof DisputeReason;
  refund_details?: TResponseRefundDetails;
  seller_response_due_date?: string;
  status?: keyof typeof DisputeStatus;
  supporting_info?: TSupportingInfo[];
  update_time?: string;
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
  private disputeLifeCycleStage!: DisputeLifeCycleStage;
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
  private reason?: DisputeReason;
  private refundDetails?: ResponseRefundDetails;
  private sellerResponseDueDate?: string;
  private status?: DisputeStatus;
  private supportingInfo?: SupportingInfo[];
  private updateTime?: string;

  public setAdjudications(...adjudications: Adjudication[]): this;
  public setAdjudications(...adjudications: ((adjudication: Adjudication) => void)[]): this;
  public setAdjudications(...adjudications: (Adjudication | ((adjudication: Adjudication) => void))[]) {
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

  public setAllowedResponseOptions(allowedResponseOptions: AllowedResponseOptions): this;
  public setAllowedResponseOptions(
    allowedResponseOptions: (allowedResponseOptions: AllowedResponseOptions) => void
  ): this;
  public setAllowedResponseOptions(
    allowedResponseOptions: AllowedResponseOptions | ((allowedResponseOptions: AllowedResponseOptions) => void)
  ) {
    if (allowedResponseOptions instanceof AllowedResponseOptions) this.allowedResponseOptions = allowedResponseOptions;
    else allowedResponseOptions((this.allowedResponseOptions = new AllowedResponseOptions()));
    return this;
  }
  public getAllowedResponseOptions() {
    return this.allowedResponseOptions;
  }

  public setBuyerResponseDueDate(buyerResponseDueDate: string) {
    this.buyerResponseDueDate = buyerResponseDueDate;
    return this;
  }
  public getBuyerResponseDueDate() {
    return this.buyerResponseDueDate;
  }

  public setCommunicationDetails(communicationDetails: CommunicationDetails): this;
  public setCommunicationDetails(communicationDetails: (communicationDetails: CommunicationDetails) => void): this;
  public setCommunicationDetails(
    communicationDetails: CommunicationDetails | ((communicationDetails: CommunicationDetails) => void)
  ) {
    if (communicationDetails instanceof CommunicationDetails) this.communicationDetails = communicationDetails;
    else communicationDetails((this.communicationDetails = new CommunicationDetails()));
    return this;
  }
  public getCommunicationDetails() {
    return this.communicationDetails;
  }

  public setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }
  public getCreateTime() {
    return this.createTime;
  }

  public setDisputeAmount(disputeAmount: Money): this;
  public setDisputeAmount(disputeAmount: (disputeAmount: Money) => void): this;
  public setDisputeAmount(disputeAmount: Money | ((disputeAmount: Money) => void)) {
    if (disputeAmount instanceof Money) this.disputeAmount = disputeAmount;
    else disputeAmount((this.disputeAmount = new Money()));
    return this;
  }
  public getDisputeAmount() {
    return this.disputeAmount;
  }

  public setDisputeAsset(disputeAsset: Cryptocurrency): this;
  public setDisputeAsset(disputeAsset: (disputeAsset: Cryptocurrency) => void): this;
  public setDisputeAsset(disputeAsset: Cryptocurrency | ((disputeAsset: Cryptocurrency) => void)) {
    if (disputeAsset instanceof Cryptocurrency) this.disputeAsset = disputeAsset;
    else disputeAsset((this.disputeAsset = new Cryptocurrency()));
    return this;
  }
  public getDisputeAsset() {
    return this.disputeAsset;
  }

  public setDisputeChannel(disputeChannel: DisputeChannel): this;
  public setDisputeChannel(disputeChannel: (disputeChannel: typeof DisputeChannel) => DisputeChannel): this;
  public setDisputeChannel(
    disputeChannel: DisputeChannel | ((disputeChannel: typeof DisputeChannel) => DisputeChannel)
  ) {
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

  public setDisputeLifeCycleStage(disputeLifeCycleStage: DisputeLifeCycleStage): this;
  public setDisputeLifeCycleStage(
    disputeLifeCycleStage: (disputeLifeCycleStage: typeof DisputeLifeCycleStage) => DisputeLifeCycleStage
  ): this;
  public setDisputeLifeCycleStage(
    disputeLifeCycleStage:
      | DisputeLifeCycleStage
      | ((disputeLifeCycleStage: typeof DisputeLifeCycleStage) => DisputeLifeCycleStage)
  ) {
    if (typeof disputeLifeCycleStage === "function")
      this.disputeLifeCycleStage = disputeLifeCycleStage(DisputeLifeCycleStage);
    else this.disputeLifeCycleStage = disputeLifeCycleStage;
    return this;
  }
  public getDisputeLifeCycleStage() {
    return this.disputeLifeCycleStage;
  }

  public setDisputeOutcome(disputeOutcome: DisputeOutcome): this;
  public setDisputeOutcome(disputeOutcome: (disputeOutcome: DisputeOutcome) => void): this;
  public setDisputeOutcome(disputeOutcome: DisputeOutcome | ((disputeOutcome: DisputeOutcome) => void)) {
    if (disputeOutcome instanceof DisputeOutcome) this.disputeOutcome = disputeOutcome;
    else disputeOutcome((this.disputeOutcome = new DisputeOutcome()));
    return this;
  }
  public getDisputeOutcome() {
    return this.disputeOutcome;
  }

  public setDisputedTransactions(...disputedTransactions: TransactionInfo[]): this;
  public setDisputedTransactions(...disputedTransactions: ((transactionInfo: TransactionInfo) => void)[]): this;
  public setDisputedTransactions(
    ...disputedTransactions: (TransactionInfo | ((transactionInfo: TransactionInfo) => void))[]
  ) {
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

  public setEvidences(...evidences: Evidence[]): this;
  public setEvidences(...evidences: ((evidence: Evidence) => void)[]): this;
  public setEvidences(...evidences: (Evidence | ((evidence: Evidence) => void))[]) {
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

  public setExtensions(extensions: Extensions): this;
  public setExtensions(extensions: (extensions: Extensions) => void): this;
  public setExtensions(extensions: Extensions | ((extensions: Extensions) => void)) {
    if (extensions instanceof Extensions) this.extensions = extensions;
    else extensions((this.extensions = new Extensions()));
    return this;
  }
  public getExtensions() {
    return this.extensions;
  }

  public setExternalReasonCode(externalReasonCode: string) {
    this.externalReasonCode = externalReasonCode;
    return this;
  }
  public getExternalReasonCode() {
    return this.externalReasonCode;
  }

  public setFeePolicy(feePolicy: {}) {
    this.feePolicy = feePolicy;
    return this;
  }
  public getFeePolicy() {
    return this.feePolicy;
  }

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((link: LinkDescription) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((link: LinkDescription) => void))[]) {
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

  public setMessages(...messages: Message[]): this;
  public setMessages(...messages: ((message: Message) => void)[]): this;
  public setMessages(...messages: (Message | ((message: Message) => void))[]) {
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

  public setMoneyMovements(...moneyMovements: MoneyMovement[]): this;
  public setMoneyMovements(...moneyMovements: ((moneyMovement: MoneyMovement) => void)[]): this;
  public setMoneyMovements(...moneyMovements: (MoneyMovement | ((moneyMovement: MoneyMovement) => void))[]) {
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

  public setOffer(offer: Offer): this;
  public setOffer(offer: (offer: Offer) => void): this;
  public setOffer(offer: Offer | ((offer: Offer) => void)) {
    if (offer instanceof Offer) this.offer = offer;
    else offer((this.offer = new Offer()));
    return this;
  }
  public getOffer() {
    return this.offer;
  }

  public setReason(reason: DisputeReason): this;
  public setReason(reason: (reason: typeof DisputeReason) => DisputeReason): this;
  public setReason(reason: DisputeReason | ((reason: typeof DisputeReason) => DisputeReason)) {
    if (typeof reason === "function") this.reason = reason(DisputeReason);
    else this.reason = reason;
    return this;
  }
  public getReason() {
    return this.reason;
  }

  public setRefundDetails(refundDetails: ResponseRefundDetails): this;
  public setRefundDetails(refundDetails: (refundDetails: ResponseRefundDetails) => void): this;
  public setRefundDetails(refundDetails: ResponseRefundDetails | ((refundDetails: ResponseRefundDetails) => void)) {
    if (refundDetails instanceof ResponseRefundDetails) this.refundDetails = refundDetails;
    else refundDetails((this.refundDetails = new ResponseRefundDetails()));
    return this;
  }
  public getRefundDetails() {
    return this.refundDetails;
  }

  public setSellerResponseDueDate(sellerResponseDueDate: string) {
    this.sellerResponseDueDate = sellerResponseDueDate;
    return this;
  }
  public getSellerResponseDueDate() {
    return this.sellerResponseDueDate;
  }

  public setStatus(status: DisputeStatus): this;
  public setStatus(status: (status: typeof DisputeStatus) => DisputeStatus): this;
  public setStatus(status: DisputeStatus | ((status: typeof DisputeStatus) => DisputeStatus)) {
    if (typeof status === "function") this.status = status(DisputeStatus);
    else this.status = status;
    return this;
  }
  public getStatus() {
    return this.status;
  }

  public setSupportingInfo(...supportingInfo: SupportingInfo[]): this;
  public setSupportingInfo(...supportingInfo: ((supportingInfo: SupportingInfo) => void)[]): this;
  public setSupportingInfo(...supportingInfo: (SupportingInfo | ((supportingInfo: SupportingInfo) => void))[]) {
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

  public setUpdateTime(updateTime: string) {
    this.updateTime = updateTime;
    return this;
  }
  public getUpdateTime() {
    return this.updateTime;
  }

  public override getFields<T extends TDispute>() {
    return super.getFields<T>();
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
      dispute.setDisputeLifeCycleStage(DisputeLifeCycleStage[obj.dispute_life_cycle_stage]);
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
    if (obj.reason) dispute.setReason(DisputeReason[obj.reason]);
    if (obj.refund_details) dispute.setRefundDetails(ResponseRefundDetails.fromObject(obj.refund_details));
    if (obj.seller_response_due_date) dispute.setSellerResponseDueDate(obj.seller_response_due_date);
    if (obj.status) dispute.setStatus(DisputeStatus[obj.status]);
    if (obj.supporting_info) dispute.setSupportingInfo(...obj.supporting_info.map(SupportingInfo.fromObject));
    if (obj.update_time) dispute.setUpdateTime(obj.update_time);
    return dispute;
  }
}
