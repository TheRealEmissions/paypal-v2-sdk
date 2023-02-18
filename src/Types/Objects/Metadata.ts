import Types, { ITypes, Static } from "@Types/Types.js";

export type TMetadata = {
  create_time?: string;
  created_by?: string;
  last_update_time?: string;
  last_updated_by?: string;
  cancel_time?: string;
  cancelled_by?: string;
  created_by_flow?: string;
  first_sent_time?: string;
  invoicer_view_url?: string;
  last_sent_by?: string;
  last_sent_time?: string;
  recipient_view_url?: string;
};

class Metadata extends Types implements Static<ITypes, typeof Metadata> {
  createTime?: string;
  createdBy?: string;
  lastUpdateTime?: string;
  lastUpdatedBy?: string;
  cancelTime?: string;
  cancelledBy?: string;
  createdByFlow?: string;
  firstSentTime?: string;
  invoicerViewUrl?: string;
  lastSentBy?: string;
  lastSentTime?: string;
  recipientViewUrl?: string;
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

  static fromObject(obj: TMetadata) {
    const metadata = new Metadata();
    if (obj.create_time) metadata.setCreateTime(obj.create_time);
    if (obj.created_by) metadata.setCreatedBy(obj.created_by);
    if (obj.last_update_time) metadata.setLastUpdateTime(obj.last_update_time);
    if (obj.last_updated_by) metadata.setLastUpdatedBy(obj.last_updated_by);
    if (obj.cancel_time) metadata.setCancelTime(obj.cancel_time);
    if (obj.cancelled_by) metadata.setCancelledBy(obj.cancelled_by);
    if (obj.created_by_flow) metadata.setCreatedByFlow(obj.created_by_flow);
    if (obj.first_sent_time) metadata.setFirstSentTime(obj.first_sent_time);
    if (obj.invoicer_view_url) metadata.setInvoicerViewUrl(obj.invoicer_view_url);
    if (obj.last_sent_by) metadata.setLastSentBy(obj.last_sent_by);
    if (obj.last_sent_time) metadata.setLastSentTime(obj.last_sent_time);
    if (obj.recipient_view_url) metadata.setRecipientViewUrl(obj.recipient_view_url);
    return metadata;
  }
}

export default Metadata;
