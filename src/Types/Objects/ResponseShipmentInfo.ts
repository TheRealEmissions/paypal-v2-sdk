import Types, { ITypes, Static } from "../Types.js";
import { Document, TDocument } from "./Document.js";
import { ResponseTrackingInfo, TResponseTrackingInfo } from "./ResponseTrackingInfo.js";

export type TResponseShipmentInfo = {
  shipment_label?: TDocument;
  tracking_info?: TResponseTrackingInfo;
};

export class ResponseShipmentInfo extends Types implements Static<ITypes, typeof ResponseShipmentInfo> {
  shipmentLabel?: Document;
  trackingInfo?: ResponseTrackingInfo;

  setShipmentLabel(shipmentLabel: Document): this;
  setShipmentLabel(shipmentLabel: (shipmentLabel: Document) => void): this;
  setShipmentLabel(shipmentLabel: Document | ((shipmentLabel: Document) => void)) {
    if (shipmentLabel instanceof Document) this.shipmentLabel = shipmentLabel;
    else {
      const label = new Document();
      shipmentLabel(label);
      this.shipmentLabel = label;
    }
    return this;
  }

  setTrackingInfo(trackingInfo: ResponseTrackingInfo): this;
  setTrackingInfo(trackingInfo: (trackingInfo: ResponseTrackingInfo) => void): this;
  setTrackingInfo(trackingInfo: ResponseTrackingInfo | ((trackingInfo: ResponseTrackingInfo) => void)) {
    if (trackingInfo instanceof ResponseTrackingInfo) this.trackingInfo = trackingInfo;
    else {
      const info = new ResponseTrackingInfo();
      trackingInfo(info);
      this.trackingInfo = info;
    }
    return this;
  }

  static fromObject(obj: TResponseShipmentInfo) {
    const responseShipmentInfo = new ResponseShipmentInfo();
    if (obj.shipment_label) responseShipmentInfo.setShipmentLabel(Document.fromObject(obj.shipment_label));
    if (obj.tracking_info) responseShipmentInfo.setTrackingInfo(ResponseTrackingInfo.fromObject(obj.tracking_info));
    return responseShipmentInfo;
  }
}
