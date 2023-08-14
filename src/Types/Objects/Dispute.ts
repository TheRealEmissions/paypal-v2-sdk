import { DisputeChannel } from "../Enums/DisputeChannel";
import { DisputeLifeCycleStage } from "../Enums/DisputeLifeCycleStage";
import { DisputeReason } from "../Enums/DisputeReason";
import { DisputeStatus } from "../Enums/DisputeStatus";
import Adjudication, { TAdjudication } from "./Adjudication";
import AllowedResponseOptions, { TAllowedResponseOptions } from "./AllowedResponseOptions";
import CommunicationDetails, { TCommunicationDetails } from "./CommunicationDetails";
import Cryptocurrency, { TCryptocurrency } from "./Cryptocurrency";
import DisputeOutcome, { TDisputeOutcome } from "./DisputeOutcome";
import Evidence, { TEvidence } from "./Evidence";
import Extensions, { TExtensions } from "./Extensions";
import LinkDescription, { TLinkDescription } from "./LinkDescription";
import Message, { TMessage } from "./Message";
import Money, { TMoney } from "./Money";
import MoneyMovement, { TMoneyMovement } from "./MoneyMovement";
import Offer, { TOffer } from "./Offer";
import ResponseRefundDetails, { TResponseRefundDetails } from "./ResponseRefundDetails";
import TransactionInfo, { TTransactionInfo } from "./TransactionInfo";
import Types, { ITypes, Static } from "../Types";
import SupportingInfo, { TSupportingInfo } from "./SupportingInfo";

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

class Dispute extends Types implements Static<ITypes, typeof Dispute> {
  adjudications!: Adjudication[];
  allowedResponseOptions!: AllowedResponseOptions;
  buyerResponseDueDate!: string;
  communicationDetails!: CommunicationDetails;
  createTime!: string;
  disputeAmount!: Money;
  disputeAsset!: Cryptocurrency;
  disputeChannel!: DisputeChannel;
  disputeId!: string;
  disputeLifeCycleStage!: DisputeLifeCycleStage;
  disputeOutcome!: DisputeOutcome;
  disputedTransactions!: TransactionInfo[];
  evidences!: Evidence[];
  extensions!: Extensions;
  externalReasonCode?: string;

  /**
   * @deprecated
   */
  feePolicy = {};

  links!: LinkDescription[];
  messages?: Message[];
  moneyMovements?: MoneyMovement[];
  offer?: Offer;
  reason?: DisputeReason;
  refundDetails?: ResponseRefundDetails;
  sellerResponseDueDate?: string;
  status?: DisputeStatus;
  supportingInfo?: SupportingInfo[];
  updateTime?: string;

  constructor() {
    super();
  }

  setAdjudications(...adjudications: (Adjudication | ((adjudication: Adjudication) => void))[]) {
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

  setAllowedResponseOptions(
    allowedResponseOptions: AllowedResponseOptions | ((allowedResponseOptions: AllowedResponseOptions) => void)
  ) {
    if (allowedResponseOptions instanceof AllowedResponseOptions) this.allowedResponseOptions = allowedResponseOptions;
    else allowedResponseOptions((this.allowedResponseOptions = new AllowedResponseOptions()));
    return this;
  }

  setBuyerResponseDueDate(buyerResponseDueDate: string) {
    this.buyerResponseDueDate = buyerResponseDueDate;
    return this;
  }

  setCommunicationDetails(
    communicationDetails: CommunicationDetails | ((communicationDetails: CommunicationDetails) => void)
  ) {
    if (communicationDetails instanceof CommunicationDetails) this.communicationDetails = communicationDetails;
    else communicationDetails((this.communicationDetails = new CommunicationDetails()));
    return this;
  }

  setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }

  setDisputeAmount(disputeAmount: Money | ((disputeAmount: Money) => void)) {
    if (disputeAmount instanceof Money) this.disputeAmount = disputeAmount;
    else disputeAmount((this.disputeAmount = new Money()));
    return this;
  }

  setDisputeAsset(disputeAsset: Cryptocurrency | ((disputeAsset: Cryptocurrency) => void)) {
    if (disputeAsset instanceof Cryptocurrency) this.disputeAsset = disputeAsset;
    else disputeAsset((this.disputeAsset = new Cryptocurrency()));
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

  setDisputeLifeCycleStage(
    disputeLifeCycleStage:
      | DisputeLifeCycleStage
      | ((disputeLifeCycleStage: typeof DisputeLifeCycleStage) => DisputeLifeCycleStage)
  ) {
    if (typeof disputeLifeCycleStage === "function")
      this.disputeLifeCycleStage = disputeLifeCycleStage(DisputeLifeCycleStage);
    else this.disputeLifeCycleStage = disputeLifeCycleStage;
    return this;
  }

  setDisputeOutcome(disputeOutcome: DisputeOutcome | ((disputeOutcome: DisputeOutcome) => void)) {
    if (disputeOutcome instanceof DisputeOutcome) this.disputeOutcome = disputeOutcome;
    else disputeOutcome((this.disputeOutcome = new DisputeOutcome()));
    return this;
  }

  setDisputedTransactions(...disputedTransactions: (TransactionInfo | ((transactionInfo: TransactionInfo) => void))[]) {
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

  setEvidences(...evidences: (Evidence | ((evidence: Evidence) => void))[]) {
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

  setExtensions(extensions: Extensions | ((extensions: Extensions) => void)) {
    if (extensions instanceof Extensions) this.extensions = extensions;
    else extensions((this.extensions = new Extensions()));
    return this;
  }

  setExternalReasonCode(externalReasonCode: string) {
    this.externalReasonCode = externalReasonCode;
    return this;
  }

  setFeePolicy(feePolicy: {}) {
    this.feePolicy = feePolicy;
    return this;
  }

  setLinks(...links: (LinkDescription | ((link: LinkDescription) => void))[]) {
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

  setMessages(...messages: (Message | ((message: Message) => void))[]) {
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

  setMoneyMovements(...moneyMovements: (MoneyMovement | ((moneyMovement: MoneyMovement) => void))[]) {
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

  setOffer(offer: Offer | ((offer: Offer) => void)) {
    if (offer instanceof Offer) this.offer = offer;
    else offer((this.offer = new Offer()));
    return this;
  }

  setReason(reason: DisputeReason | ((reason: typeof DisputeReason) => DisputeReason)) {
    if (typeof reason === "function") this.reason = reason(DisputeReason);
    else this.reason = reason;
    return this;
  }

  setRefundDetails(refundDetails: ResponseRefundDetails | ((refundDetails: ResponseRefundDetails) => void)) {
    if (refundDetails instanceof ResponseRefundDetails) this.refundDetails = refundDetails;
    else refundDetails((this.refundDetails = new ResponseRefundDetails()));
    return this;
  }

  setSellerResponseDueDate(sellerResponseDueDate: string) {
    this.sellerResponseDueDate = sellerResponseDueDate;
    return this;
  }

  setStatus(status: DisputeStatus | ((status: typeof DisputeStatus) => DisputeStatus)) {
    if (typeof status === "function") this.status = status(DisputeStatus);
    else this.status = status;
    return this;
  }

  setSupportingInfo(...supportingInfo: (SupportingInfo | ((supportingInfo: SupportingInfo) => void))[]) {
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

  setUpdateTime(updateTime: string) {
    this.updateTime = updateTime;
    return this;
  }

  static fromObject(obj: TDispute) {
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

export default Dispute;
