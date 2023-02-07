import Types from "../Types.js";
import Document, { TDocument } from "./Document.js";
import ResponseTrackingInfo, { TResponseTrackingInfo } from "./ResponseTrackingInfo.js";

export type TResponseShipmentInfo = {
  shipment_label?: TDocument;
  tracking_info?: TResponseTrackingInfo;
};

class ResponseShipmentInfo extends Types {
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

  override fromObject(obj: TResponseShipmentInfo) {
    this.shipmentLabel = obj.shipment_label ? new Document().fromObject(obj.shipment_label) : undefined;
    this.trackingInfo = obj.tracking_info ? new ResponseTrackingInfo().fromObject(obj.tracking_info) : undefined;
    return this;
  }
}

export default ResponseShipmentInfo;
