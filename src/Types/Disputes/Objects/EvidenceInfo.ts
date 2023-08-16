import { IUtility, Static, Utility } from "../../Utility.js";
import { ResponseTrackingInfo, TResponseTrackingInfo } from "./ResponseTrackingInfo.js";

export type TEvidenceInfo = {
  refund_ids?: string[];
  tracking_info?: TResponseTrackingInfo[];
};

export class EvidenceInfo extends Utility implements Static<IUtility, typeof EvidenceInfo> {
  private refundIds?: string[];
  private trackingInfo?: ResponseTrackingInfo[];

  public setRefundIds(...refundIds: string[]) {
    this.refundIds = refundIds;
  }
  public getRefundIds() {
    return this.refundIds;
  }

  public setTrackingInfo(...trackingInfo: ResponseTrackingInfo[]): this;
  public setTrackingInfo(...trackingInfo: ((trackingInfo: ResponseTrackingInfo) => void)[]): this;
  public setTrackingInfo(...trackingInfo: (ResponseTrackingInfo | ((trackingInfo: ResponseTrackingInfo) => void))[]) {
    this.trackingInfo = trackingInfo.map((trackingInfo) => {
      if (trackingInfo instanceof ResponseTrackingInfo) return trackingInfo;
      else {
        const t = new ResponseTrackingInfo();
        trackingInfo(t);
        return t;
      }
    });
    return this;
  }
  public getTrackingInfo() {
    return this.trackingInfo;
  }

  public override getFields<T extends TEvidenceInfo>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TEvidenceInfo) {
    const evidenceInfo = new EvidenceInfo();
    if (obj.refund_ids) evidenceInfo.setRefundIds(...obj.refund_ids);
    if (obj.tracking_info)
      evidenceInfo.setTrackingInfo(
        ...obj.tracking_info.map((trackingInfo) => ResponseTrackingInfo.fromObject(trackingInfo))
      );
    return evidenceInfo;
  }
}
