import { IUtility, Static, Utility } from "../Utility.js";
import { RefundId, TRefundId } from "./RefundId.js";
import { ResponseTrackingInfo, TResponseTrackingInfo } from "./ResponseTrackingInfo.js";

export type TEvidenceInfo = {
  refund_ids?: TRefundId[];
  tracking_info?: TResponseTrackingInfo[];
};

export class EvidenceInfo extends Utility implements Static<IUtility, typeof EvidenceInfo> {
  private refundIds?: RefundId[];
  private trackingInfo?: ResponseTrackingInfo[];

  public setRefundIds(...refundIds: RefundId[]): this;
  public setRefundIds(...refundIds: ((refundId: RefundId) => void)[]): this;
  public setRefundIds(...refundIds: (RefundId | ((refundId: RefundId) => void))[]) {
    this.refundIds = refundIds.map((refundId) => {
      if (refundId instanceof RefundId) return refundId;
      else {
        const r = new RefundId();
        refundId(r);
        return r;
      }
    });
    return this;
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
    if (obj.refund_ids) evidenceInfo.setRefundIds(...obj.refund_ids.map((refundId) => RefundId.fromObject(refundId)));
    if (obj.tracking_info)
      evidenceInfo.setTrackingInfo(
        ...obj.tracking_info.map((trackingInfo) => ResponseTrackingInfo.fromObject(trackingInfo))
      );
    return evidenceInfo;
  }
}
