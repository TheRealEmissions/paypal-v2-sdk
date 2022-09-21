import PayPal from "../../PayPal";
import Types from "../Types";

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
  constructor(PayPal: PayPal) {
    super(PayPal);
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
}

export default Metadata;
