import { Carrier } from "@Types/Enums/Carrier.js";
import Types, { ITypes, Static } from "@Types/Types.js";

export type TResponseTrackingInfo = {
  carrier_name?: keyof typeof Carrier;
  tracking_number?: string;
  carrier_name_other?: string;
  tracking_url?: string;
};

class ResponseTrackingInfo extends Types implements Static<ITypes, typeof ResponseTrackingInfo> {
  carrierName?: Carrier;
  trackingNumber?: string;
  carrierNameOther?: string;
  trackingUrl?: string;
  constructor() {
    super();
  }

  setCarrierName(carrierName: Carrier | ((carrierName: typeof Carrier) => Carrier)) {
    if (typeof carrierName === "function") this.carrierName = carrierName(Carrier);
    else this.carrierName = carrierName;
    return this;
  }

  setTrackingNumber(trackingNumber: string) {
    this.trackingNumber = trackingNumber;
    return this;
  }

  setCarrierNameOther(carrierNameOther: string) {
    this.carrierNameOther = carrierNameOther;
    return this;
  }

  setTrackingUrl(trackingUrl: string) {
    this.trackingUrl = trackingUrl;
    return this;
  }

  static fromObject(obj: TResponseTrackingInfo) {
    const responseTrackingInfo = new ResponseTrackingInfo();
    if (obj.carrier_name) responseTrackingInfo.setCarrierName(Carrier[obj.carrier_name]);
    if (obj.tracking_number) responseTrackingInfo.setTrackingNumber(obj.tracking_number);
    if (obj.carrier_name_other) responseTrackingInfo.setCarrierNameOther(obj.carrier_name_other);
    if (obj.tracking_url) responseTrackingInfo.setTrackingUrl(obj.tracking_url);
    return responseTrackingInfo;
  }
}

export default ResponseTrackingInfo;
