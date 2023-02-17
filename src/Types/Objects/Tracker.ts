import { TrackingNumberType } from "./../Enums/TrackingNumberType.js";
import { Carrier } from "./../Enums/Carrier.js";
import { ShippingStatus } from "./../Enums/ShippingStatus.js";
import Types, { ITypes, StaticImplements } from "../Types.js";
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

class Tracker extends Types implements StaticImplements<ITypes, typeof Tracker> {
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

  static fromObject(obj: TTracker): Tracker {
    const tracker = new Tracker();
    if (obj.status) tracker.setStatus(ShippingStatus[obj.status]);
    if (obj.transaction_id) tracker.setTransactionId(obj.transaction_id);
    if (obj.carrier) tracker.setCarrier(Carrier[obj.carrier]);
    if (obj.carrier_name_other) tracker.setCarrierNameOther(obj.carrier_name_other);
    if (obj.last_updated_time) tracker.setLastUpdatedTime(obj.last_updated_time);
    if (obj.links) tracker.setLinks(obj.links.map((x) => LinkDescription.fromObject(x)));
    if (obj.notify_buyer) tracker.setNotifyBuyer(obj.notify_buyer);
    if (obj.postage_payment_id) tracker.setPostagePaymentId(obj.postage_payment_id);
    if (obj.quantity) tracker.setQuantity(obj.quantity);
    if (obj.shipment_date) tracker.setShipmentDate(obj.shipment_date);
    if (obj.tracking_number) tracker.setTrackingNumber(obj.tracking_number);
    if (obj.tracking_number_type) tracker.setTrackingNumberType(TrackingNumberType[obj.tracking_number_type]);
    if (obj.tracking_number_validated) tracker.setTrackingNumberValidated(obj.tracking_number_validated);
    return tracker;
  }
}

export default Tracker;
