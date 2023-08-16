import { Utility, IUtility, Static } from "../../Utility.js";
import { Document, TDocument } from "./Document.js";
import { ResponseTrackingInfo, TResponseTrackingInfo } from "./ResponseTrackingInfo.js";

export type TResponseShipmentInfo = {
  shipment_label?: TDocument;
  tracking_info?: TResponseTrackingInfo;
};

export class ResponseShipmentInfo extends Utility implements Static<IUtility, typeof ResponseShipmentInfo> {
  private shipmentLabel?: Document;
  private trackingInfo?: ResponseTrackingInfo;

  public setShipmentLabel(shipmentLabel: Document): this;
  public setShipmentLabel(shipmentLabel: (shipmentLabel: Document) => void): this;
  public setShipmentLabel(shipmentLabel: Document | ((shipmentLabel: Document) => void)) {
    if (shipmentLabel instanceof Document) this.shipmentLabel = shipmentLabel;
    else {
      const label = new Document();
      shipmentLabel(label);
      this.shipmentLabel = label;
    }
    return this;
  }
  public getShipmentLabel() {
    return this.shipmentLabel;
  }

  public setTrackingInfo(trackingInfo: ResponseTrackingInfo): this;
  public setTrackingInfo(trackingInfo: (trackingInfo: ResponseTrackingInfo) => void): this;
  public setTrackingInfo(trackingInfo: ResponseTrackingInfo | ((trackingInfo: ResponseTrackingInfo) => void)) {
    if (trackingInfo instanceof ResponseTrackingInfo) this.trackingInfo = trackingInfo;
    else {
      const info = new ResponseTrackingInfo();
      trackingInfo(info);
      this.trackingInfo = info;
    }
    return this;
  }
  public getTrackingInfo() {
    return this.trackingInfo;
  }

  public override getFields<T extends TResponseShipmentInfo>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TResponseShipmentInfo) {
    const responseShipmentInfo = new ResponseShipmentInfo();
    if (obj.shipment_label) responseShipmentInfo.setShipmentLabel(Document.fromObject(obj.shipment_label));
    if (obj.tracking_info) responseShipmentInfo.setTrackingInfo(ResponseTrackingInfo.fromObject(obj.tracking_info));
    return responseShipmentInfo;
  }
}