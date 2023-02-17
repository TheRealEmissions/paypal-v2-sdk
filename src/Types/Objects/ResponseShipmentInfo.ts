import Types, { ITypes, Static } from "../Types.js";
import Document, { TDocument } from "./Document.js";
import ResponseTrackingInfo, { TResponseTrackingInfo } from "./ResponseTrackingInfo.js";

export type TResponseShipmentInfo = {
  shipment_label?: TDocument;
  tracking_info?: TResponseTrackingInfo;
};

class ResponseShipmentInfo extends Types implements Static<ITypes, typeof ResponseShipmentInfo> {
  shipmentLabel?: Document;
  trackingInfo?: ResponseTrackingInfo;
  constructor() {
    super();
  }

  setShipmentLabel(shipmentLabel: Document) {
    this.shipmentLabel = shipmentLabel;
    return this;
  }

  setTrackingInfo(trackingInfo: ResponseTrackingInfo) {
    this.trackingInfo = trackingInfo;
    return this;
  }

  static fromObject(obj: TResponseShipmentInfo) {
    const responseShipmentInfo = new ResponseShipmentInfo();
    if (obj.shipment_label) responseShipmentInfo.setShipmentLabel(Document.fromObject(obj.shipment_label));
    if (obj.tracking_info) responseShipmentInfo.setTrackingInfo(ResponseTrackingInfo.fromObject(obj.tracking_info));
    return responseShipmentInfo;
  }
}

export default ResponseShipmentInfo;
