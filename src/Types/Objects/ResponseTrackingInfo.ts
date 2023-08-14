import { Carrier } from "../Enums/Carrier.js";
import { Utility, IUtility, Static } from "../Utility.js";

export type TResponseTrackingInfo = {
  carrier_name?: keyof typeof Carrier;
  tracking_number?: string;
  carrier_name_other?: string;
  tracking_url?: string;
};

export class ResponseTrackingInfo extends Utility implements Static<IUtility, typeof ResponseTrackingInfo> {
  private carrierName?: Carrier;
  private trackingNumber?: string;
  private carrierNameOther?: string;
  private trackingUrl?: string;

  public setCarrierName(carrierName: Carrier): this;
  public setCarrierName(carrierName: (carrierName: typeof Carrier) => Carrier): this;
  public setCarrierName(carrierName: Carrier | ((carrierName: typeof Carrier) => Carrier)) {
    if (typeof carrierName === "function") this.carrierName = carrierName(Carrier);
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

  public override getFields<T extends TResponseTrackingInfo>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TResponseTrackingInfo) {
    const responseTrackingInfo = new ResponseTrackingInfo();
    if (obj.carrier_name) responseTrackingInfo.setCarrierName(Carrier[obj.carrier_name]);
    if (obj.tracking_number) responseTrackingInfo.setTrackingNumber(obj.tracking_number);
    if (obj.carrier_name_other) responseTrackingInfo.setCarrierNameOther(obj.carrier_name_other);
    if (obj.tracking_url) responseTrackingInfo.setTrackingUrl(obj.tracking_url);
    return responseTrackingInfo;
  }
}
