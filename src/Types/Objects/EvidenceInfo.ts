import Types, { ITypes, Static } from "../Types";
import RefundId, { TRefundId } from "./RefundId";
import ResponseTrackingInfo, { TResponseTrackingInfo } from "./ResponseTrackingInfo";

export type TEvidenceInfo = {
  refund_ids?: TRefundId[];
  tracking_info?: TResponseTrackingInfo[];
};

class EvidenceInfo extends Types implements Static<ITypes, typeof EvidenceInfo> {
  refundIds?: RefundId[];
  trackingInfo?: ResponseTrackingInfo[];

  constructor() {
    super();
  }

  setRefundIds(...refundIds: (RefundId | ((refundId: RefundId) => void))[]) {
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

  setTrackingInfo(...trackingInfo: (ResponseTrackingInfo | ((trackingInfo: ResponseTrackingInfo) => void))[]) {
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

  static fromObject(obj: TEvidenceInfo) {
    const evidenceInfo = new EvidenceInfo();
    if (obj.refund_ids) evidenceInfo.setRefundIds(...obj.refund_ids.map((refundId) => RefundId.fromObject(refundId)));
    if (obj.tracking_info)
      evidenceInfo.setTrackingInfo(
        ...obj.tracking_info.map((trackingInfo) => ResponseTrackingInfo.fromObject(trackingInfo))
      );
    return evidenceInfo;
  }
}

export default EvidenceInfo;
