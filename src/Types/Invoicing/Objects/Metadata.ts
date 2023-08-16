import { Utility, IUtility, Static } from "../../Utility.js";

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

export class Metadata extends Utility implements Static<IUtility, typeof Metadata> {
  private createTime?: string;
  private createdBy?: string;
  private lastUpdateTime?: string;
  private lastUpdatedBy?: string;
  private cancelTime?: string;
  private cancelledBy?: string;
  private createdByFlow?: string;
  private firstSentTime?: string;
  private invoicerViewUrl?: string;
  private lastSentBy?: string;
  private lastSentTime?: string;
  private recipientViewUrl?: string;

  public setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }
  public getCreateTime() {
    return this.createTime;
  }

  public setCreatedBy(createdBy: string) {
    this.createdBy = createdBy;
    return this;
  }
  public getCreatedBy() {
    return this.createdBy;
  }

  public setLastUpdateTime(lastUpdateTime: string) {
    this.lastUpdateTime = lastUpdateTime;
    return this;
  }
  public getLastUpdateTime() {
    return this.lastUpdateTime;
  }

  public setLastUpdatedBy(lastUpdatedBy: string) {
    this.lastUpdatedBy = lastUpdatedBy;
    return this;
  }
  public getLastUpdatedBy() {
    return this.lastUpdatedBy;
  }

  public setCancelTime(cancelTime: string) {
    this.cancelTime = cancelTime;
    return this;
  }
  public getCancelTime() {
    return this.cancelTime;
  }

  public setCancelledBy(cancelledBy: string) {
    this.cancelledBy = cancelledBy;
    return this;
  }
  public getCancelledBy() {
    return this.cancelledBy;
  }

  public setCreatedByFlow(createdByFlow: string) {
    this.createdByFlow = createdByFlow;
    return this;
  }
  public getCreatedByFlow() {
    return this.createdByFlow;
  }

  public setFirstSentTime(firstSentTime: string) {
    this.firstSentTime = firstSentTime;
    return this;
  }
  public getFirstSentTime() {
    return this.firstSentTime;
  }

  public setInvoicerViewUrl(invoicerViewUrl: string) {
    this.invoicerViewUrl = invoicerViewUrl;
    return this;
  }
  public getInvoicerViewUrl() {
    return this.invoicerViewUrl;
  }

  public setLastSentBy(lastSentBy: string) {
    this.lastSentBy = lastSentBy;
    return this;
  }
  public getLastSentBy() {
    return this.lastSentBy;
  }

  public setLastSentTime(lastSentTime: string) {
    this.lastSentTime = lastSentTime;
    return this;
  }
  public getLastSentTime() {
    return this.lastSentTime;
  }

  public setRecipientViewUrl(recipientViewUrl: string) {
    this.recipientViewUrl = recipientViewUrl;
    return this;
  }
  public getRecipientViewUrl() {
    return this.recipientViewUrl;
  }

  public override getFields<T extends Partial<TMetadata>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TMetadata) {
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
