import { TrackingNumberType } from "./../Enums/TrackingNumberType.js";
import { Carrier } from "./../Enums/Carrier.js";
import { ShippingStatus } from "./../Enums/ShippingStatus.js";
import { Utility, IUtility, Static } from "../Utility.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";
import PayPal from "../../PayPal.js";
import AddTrackersResponse from "../APIResponses/AddTrackers.js";

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

export class Tracker extends Utility implements Static<IUtility, typeof Tracker> {
  private status?: ShippingStatus;
  private transactionId?: string;
  private carrier?: Carrier;
  private carrierNameOther?: string;
  private lastUpdatedTime?: string;
  private links?: LinkDescription[];
  private notifyBuyer?: boolean;
  private postagePaymentId?: string;
  private quantity?: number;
  private shipmentDate?: string;
  private trackingNumber?: string;
  private trackingNumberType?: TrackingNumberType;
  private trackingNumberValidated?: boolean;

  PayPal?: PayPal;
  constructor(PayPal?: PayPal) {
    super();
    this.PayPal = PayPal;
  }

  public updateOrCancel() {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the Tracker");
    }
    if (!this.transactionId) {
      throw new Error("Transaction ID is required");
    }
    return this.PayPal.getAddTracking().updateOrCancel(this.transactionId, this);
  }

  public get() {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the Tracker");
    }
    if (!this.transactionId) {
      throw new Error("Transaction ID is required");
    }
    return this.PayPal.getAddTracking().get(this.transactionId);
  }

  public add(...links: LinkDescription[]): Promise<AddTrackersResponse>;
  public add(...links: ((link: LinkDescription) => void)[]): Promise<AddTrackersResponse>;
  public add(...links: (LinkDescription | ((link: LinkDescription) => void))[]) {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the Tracker");
    }

    return this.PayPal.getAddTracking().add(
      [this],
      links.map((x) => {
        if (x instanceof LinkDescription) return x;
        else {
          const link = new LinkDescription();
          x(link);
          return link;
        }
      })
    );
  }

  public setStatus(status: ShippingStatus): this;
  public setStatus(status: (status: typeof ShippingStatus) => ShippingStatus): this;
  public setStatus(status: ShippingStatus | ((status: typeof ShippingStatus) => ShippingStatus)): this {
    if (typeof status === "function") this.status = status(ShippingStatus);
    else this.status = status;
    return this;
  }
  public getStatus() {
    return this.status;
  }

  public setTransactionId(transactionId: string): this {
    this.transactionId = transactionId;
    return this;
  }
  public getTransactionId() {
    return this.transactionId;
  }

  public setCarrier(carrier: Carrier): this;
  public setCarrier(carrier: (carrier: typeof Carrier) => Carrier): this;
  public setCarrier(carrier: Carrier | ((carrier: typeof Carrier) => Carrier)): this {
    if (typeof carrier === "function") this.carrier = carrier(Carrier);
    else this.carrier = carrier;
    return this;
  }
  public getCarrier() {
    return this.carrier;
  }

  public setCarrierNameOther(carrierNameOther: string): this {
    this.carrierNameOther = carrierNameOther;
    return this;
  }
  public getCarrierNameOther() {
    return this.carrierNameOther;
  }

  public setLastUpdatedTime(lastUpdatedTime: string): this {
    this.lastUpdatedTime = lastUpdatedTime;
    return this;
  }
  public getLastUpdatedTime() {
    return this.lastUpdatedTime;
  }

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((link: LinkDescription) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((link: LinkDescription) => void))[]): this {
    this.links = links.map((x) => {
      if (x instanceof LinkDescription) return x;
      else {
        const link = new LinkDescription();
        x(link);
        return link;
      }
    });
    return this;
  }
  public getLinks() {
    return this.links;
  }

  public setNotifyBuyer(notifyBuyer: boolean): this {
    this.notifyBuyer = notifyBuyer;
    return this;
  }
  public getNotifyBuyer() {
    return this.notifyBuyer;
  }

  public setPostagePaymentId(postagePaymentId: string): this {
    this.postagePaymentId = postagePaymentId;
    return this;
  }
  public getPostagePaymentId() {
    return this.postagePaymentId;
  }

  public setQuantity(quantity: number): this {
    this.quantity = quantity;
    return this;
  }
  public getQuantity() {
    return this.quantity;
  }

  public setShipmentDate(shipmentDate: string): this {
    this.shipmentDate = shipmentDate;
    return this;
  }
  public getShipmentDate() {
    return this.shipmentDate;
  }

  public setTrackingNumber(trackingNumber: string): this {
    this.trackingNumber = trackingNumber;
    return this;
  }
  public getTrackingNumber() {
    return this.trackingNumber;
  }

  public setTrackingNumberType(trackingNumberType: TrackingNumberType): this;
  public setTrackingNumberType(
    trackingNumberType: (trackingNumberType: typeof TrackingNumberType) => TrackingNumberType
  ): this;
  public setTrackingNumberType(
    trackingNumberType: TrackingNumberType | ((trackingNumberType: typeof TrackingNumberType) => TrackingNumberType)
  ): this {
    if (typeof trackingNumberType === "function") this.trackingNumberType = trackingNumberType(TrackingNumberType);
    else this.trackingNumberType = trackingNumberType;
    return this;
  }
  public getTrackingNumberType() {
    return this.trackingNumberType;
  }

  public setTrackingNumberValidated(trackingNumberValidated: boolean): this {
    this.trackingNumberValidated = trackingNumberValidated;
    return this;
  }
  public getTrackingNumberValidated() {
    return this.trackingNumberValidated;
  }

  public override getFields<T extends Partial<TTracker>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TTracker): Tracker {
    const tracker = new Tracker();
    if (obj.status) tracker.setStatus(ShippingStatus[obj.status]);
    if (obj.transaction_id) tracker.setTransactionId(obj.transaction_id);
    if (obj.carrier) tracker.setCarrier(Carrier[obj.carrier]);
    if (obj.carrier_name_other) tracker.setCarrierNameOther(obj.carrier_name_other);
    if (obj.last_updated_time) tracker.setLastUpdatedTime(obj.last_updated_time);
    if (obj.links) tracker.setLinks(...obj.links.map(LinkDescription.fromObject));
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
