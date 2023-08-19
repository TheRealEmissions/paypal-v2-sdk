import { Utility, IUtility, Static } from "../../Utility.js";
import { ResponseTrackingInfoCarrierName } from "../Enums/ResponseTrackingInfoCarrierName.js";

export type TResponseTrackingInfo = {
  carrier_name?: keyof typeof ResponseTrackingInfoCarrierName;
  tracking_number?: string;
  carrier_name_other?: string;
  tracking_url?: string;
};

type ResponseTrackingInfoFields = {
  readonly carrierName?: ResponseTrackingInfoCarrierName;
  readonly trackingNumber?: string;
  readonly carrierNameOther?: string;
  readonly trackingUrl?: string;
};

export class ResponseTrackingInfo extends Utility implements Static<IUtility, typeof ResponseTrackingInfo> {
  private carrierName?: ResponseTrackingInfoCarrierName;
  private trackingNumber?: string;
  private carrierNameOther?: string;
  private trackingUrl?: string;

  public setCarrierName(carrierName: ResponseTrackingInfoCarrierName): this;
  public setCarrierName(
    carrierName: (carrierName: typeof ResponseTrackingInfoCarrierName) => ResponseTrackingInfoCarrierName
  ): this;
  public setCarrierName(
    carrierName:
      | ResponseTrackingInfoCarrierName
      | ((carrierName: typeof ResponseTrackingInfoCarrierName) => ResponseTrackingInfoCarrierName)
  ) {
    if (typeof carrierName === "function") this.carrierName = carrierName(ResponseTrackingInfoCarrierName);
    else this.carrierName = carrierName;
    return this;
  }
  public getCarrierName() {
    return this.carrierName;
  }

  public setTrackingNumber(trackingNumber: string) {
    this.trackingNumber = trackingNumber;
    return this;
  }
  public getTrackingNumber() {
    return this.trackingNumber;
  }

  public setCarrierNameOther(carrierNameOther: string) {
    this.carrierNameOther = carrierNameOther;
    return this;
  }
  public getCarrierNameOther() {
    return this.carrierNameOther;
  }

  public setTrackingUrl(trackingUrl: string) {
    this.trackingUrl = trackingUrl;
    return this;
  }
  public getTrackingUrl() {
    return this.trackingUrl;
  }

  public override getFields<T extends ResponseTrackingInfoFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TResponseTrackingInfo) {
    const responseTrackingInfo = new ResponseTrackingInfo();
    if (obj.carrier_name) responseTrackingInfo.setCarrierName(ResponseTrackingInfoCarrierName[obj.carrier_name]);
    if (obj.tracking_number) responseTrackingInfo.setTrackingNumber(obj.tracking_number);
    if (obj.carrier_name_other) responseTrackingInfo.setCarrierNameOther(obj.carrier_name_other);
    if (obj.tracking_url) responseTrackingInfo.setTrackingUrl(obj.tracking_url);
    return responseTrackingInfo;
  }
}
