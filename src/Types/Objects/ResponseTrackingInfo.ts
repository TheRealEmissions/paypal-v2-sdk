import { Carrier } from "../Enums/Carrier.js";
import Types from "../Types.js";

export type TResponseTrackingInfo = {
  carrier_name?: string;
  tracking_number?: string;
  carrier_name_other?: string;
  tracking_url?: string;
};

class ResponseTrackingInfo extends Types {
  carrierName?: Carrier;
  trackingNumber?: string;
  carrierNameOther?: string;
  trackingUrl?: string;
  constructor() {
    super();
  }

  setCarrierName(carrierName: Carrier) {
    this.carrierName = carrierName;
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

  override fromObject(obj: TResponseTrackingInfo) {
    this.carrierName = Carrier[obj.carrier_name as keyof typeof Carrier];
    this.trackingNumber = obj.tracking_number;
    this.carrierNameOther = obj.carrier_name_other;
    this.trackingUrl = obj.tracking_url;
    return this;
  }
}

export default ResponseTrackingInfo;
