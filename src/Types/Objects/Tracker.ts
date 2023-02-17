import { TrackingNumberType } from "./../Enums/TrackingNumberType.js";
import { Carrier } from "./../Enums/Carrier.js";
import { ShippingStatus } from "./../Enums/ShippingStatus.js";
import Types from "../Types.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";
import PayPal from "../../PayPal.js";

export type TTracker = {
  status: keyof typeof ShippingStatus;
  transaction_id: string;
  carrier?: keyof typeof Carrier;
  carrier_name_other?: string;
  last_updated_time?: string;
  links?: TLinkDescription[];
  notify_buyer?: boolean;
  readonly postage_payment_id?: string;
  readonly quantity?: number;
  shipment_date?: string;
  tracking_number?: string;
  tracking_number_type?: keyof typeof TrackingNumberType;
  readonly tracking_number_validated?: boolean;
};

class Tracker extends Types {
  status?: ShippingStatus;
  transactionId?: string;
  carrier?: Carrier;
  carrierNameOther?: string;
  lastUpdatedTime?: string;
  links?: LinkDescription[];
  notifyBuyer?: boolean;
  postagePaymentId?: string;
  quantity?: number;
  shipmentDate?: string;
  trackingNumber?: string;
  trackingNumberType?: TrackingNumberType;
  trackingNumberValidated?: boolean;

  PayPal?: PayPal;
  constructor(PayPal?: PayPal) {
    super();
    this.PayPal = PayPal;
  }

  updateOrCancel() {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the Tracker");
    }
    if (!this.transactionId) {
      throw new Error("Transaction ID is required");
    }
    return this.PayPal.AddTracking.updateOrCancel(this.transactionId, this);
  }

  get() {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the Tracker");
    }
    if (!this.transactionId) {
      throw new Error("Transaction ID is required");
    }
    return this.PayPal.AddTracking.get(this.transactionId);
  }

  add(links: LinkDescription[]) {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the Tracker");
    }
    return this.PayPal.AddTracking.add([this], links);
  }

  setStatus(status: ShippingStatus): this {
    this.status = status;
    return this;
  }

  setTransactionId(transactionId: string): this {
    this.transactionId = transactionId;
    return this;
  }

  setCarrier(carrier: Carrier): this {
    this.carrier = carrier;
    return this;
  }

  setCarrierNameOther(carrierNameOther: string): this {
    this.carrierNameOther = carrierNameOther;
    return this;
  }

  setLastUpdatedTime(lastUpdatedTime: string): this {
    this.lastUpdatedTime = lastUpdatedTime;
    return this;
  }

  setLinks(links: LinkDescription[]): this {
    this.links = links;
    return this;
  }

  setNotifyBuyer(notifyBuyer: boolean): this {
    this.notifyBuyer = notifyBuyer;
    return this;
  }

  setPostagePaymentId(postagePaymentId: string): this {
    this.postagePaymentId = postagePaymentId;
    return this;
  }

  setQuantity(quantity: number): this {
    this.quantity = quantity;
    return this;
  }

  setShipmentDate(shipmentDate: string): this {
    this.shipmentDate = shipmentDate;
    return this;
  }

  setTrackingNumber(trackingNumber: string): this {
    this.trackingNumber = trackingNumber;
    return this;
  }

  setTrackingNumberType(trackingNumberType: TrackingNumberType): this {
    this.trackingNumberType = trackingNumberType;
    return this;
  }

  setTrackingNumberValidated(trackingNumberValidated: boolean): this {
    this.trackingNumberValidated = trackingNumberValidated;
    return this;
  }

  override fromObject(obj: TTracker): this {
    this.status = ShippingStatus[obj.status as keyof typeof ShippingStatus];
    this.transactionId = obj.transaction_id;
    this.carrier = Carrier[obj.carrier as keyof typeof Carrier];
    this.carrierNameOther = obj.carrier_name_other;
    this.lastUpdatedTime = obj.last_updated_time;
    this.links = obj.links ? obj.links.map((link) => new LinkDescription().fromObject(link)) : undefined;
    this.notifyBuyer = obj.notify_buyer;
    this.postagePaymentId = obj.postage_payment_id;
    this.quantity = obj.quantity;
    this.shipmentDate = obj.shipment_date;
    this.trackingNumber = obj.tracking_number;
    this.trackingNumberType = TrackingNumberType[obj.tracking_number_type as keyof typeof TrackingNumberType];
    return this;
  }
}

export default Tracker;
