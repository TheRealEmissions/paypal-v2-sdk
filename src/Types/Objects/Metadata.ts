import PayPal from "../../PayPal";
import Types from "../Types";

export type TMetadata = {
  create_time: string;
  created_by: string;
  last_update_time: string;
  last_updated_by: string;
  cancel_time: string;
  cancelled_by: string;
  created_by_flow: string;
  first_sent_time: string;
  invoicer_view_url: string;
  last_sent_by: string;
  last_sent_time: string;
  recipient_view_url: string;
};

class Metadata extends Types {
  createTime: string;
  createdBy: string;
  lastUpdateTime: string;
  lastUpdatedBy: string;
  cancelTime: string;
  cancelledBy: string;
  createdByFlow: string;
  firstSentTime: string;
  invoicerViewUrl: string;
  lastSentBy: string;
  lastSentTime: string;
  recipientViewUrl: string;
  constructor() {
    super();
  }

  setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }

  setCreatedBy(createdBy: string) {
    this.createdBy = createdBy;
    return this;
  }

  setLastUpdateTime(lastUpdateTime: string) {
    this.lastUpdateTime = lastUpdateTime;
    return this;
  }

  setLastUpdatedBy(lastUpdatedBy: string) {
    this.lastUpdatedBy = lastUpdatedBy;
    return this;
  }

  setCancelTime(cancelTime: string) {
    this.cancelTime = cancelTime;
    return this;
  }

  setCancelledBy(cancelledBy: string) {
    this.cancelledBy = cancelledBy;
    return this;
  }

  setCreatedByFlow(createdByFlow: string) {
    this.createdByFlow = createdByFlow;
    return this;
  }

  setFirstSentTime(firstSentTime: string) {
    this.firstSentTime = firstSentTime;
    return this;
  }

  setInvoicerViewUrl(invoicerViewUrl: string) {
    this.invoicerViewUrl = invoicerViewUrl;
    return this;
  }

  setLastSentBy(lastSentBy: string) {
    this.lastSentBy = lastSentBy;
    return this;
  }

  setLastSentTime(lastSentTime: string) {
    this.lastSentTime = lastSentTime;
    return this;
  }

  setRecipientViewUrl(recipientViewUrl: string) {
    this.recipientViewUrl = recipientViewUrl;
    return this;
  }

  override fromObject(obj: TMetadata) {
    this.createTime = obj.create_time;
    this.createdBy = obj.created_by;
    this.lastUpdateTime = obj.last_update_time;
    this.lastUpdatedBy = obj.last_updated_by;
    this.cancelTime = obj.cancel_time;
    this.cancelledBy = obj.cancelled_by;
    this.createdByFlow = obj.created_by_flow;
    this.firstSentTime = obj.first_sent_time;
    this.invoicerViewUrl = obj.invoicer_view_url;
    this.lastSentBy = obj.last_sent_by;
    this.lastSentTime = obj.last_sent_time;
    this.recipientViewUrl = obj.recipient_view_url;
    return this;
  }
}

export default Metadata;
