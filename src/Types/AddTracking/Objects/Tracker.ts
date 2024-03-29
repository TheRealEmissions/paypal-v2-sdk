import { OnlySetters } from "./../../Utility";
import PayPal from "../../../PayPal";
import { IUtility, Static, Utility } from "../../Utility";
import { Carrier } from "../Enums/Carrier";
import { ShipmentDirection } from "../Enums/ShipmentDirection";
import { ShipmentUploader } from "../Enums/ShipmentUploader";
import { TrackingNumberType } from "../Enums/TrackingNumberType";
import { TrackingStatus } from "../Enums/TrackingStatus";
import { LinkDescription, TLinkDescription } from "./LinkDescription";

export type TTracker = {
  transaction_id: string;
  tracking_number?: string;
  carrier_name_other?: string;
  postage_payment_id?: string;
  notify_boolean?: boolean;
  quantity?: number;
  tracking_number_valided?: boolean;
  shipment_direction?: keyof typeof ShipmentDirection;
  shipment_uploader?: keyof typeof ShipmentUploader;
  links?: TLinkDescription[];
  tracking_number_type?: keyof typeof TrackingNumberType;
  status?: keyof typeof TrackingStatus;
  shipment_date?: string;
  carrier?: keyof typeof Carrier;
  last_updated_time?: string;
};

type TrackerFields = {
  readonly transactionId?: string;
  readonly trackingNumber?: string;
  readonly carrierNameOther?: string;
  readonly postagePaymentId?: string;
  readonly notifyBoolean?: boolean;
  readonly quantity?: number;
  readonly trackingNumberValided?: boolean;
  readonly shipmentDirection?: ShipmentDirection;
  readonly shipmentUploader?: ShipmentUploader;
  readonly links?: LinkDescription[];
  readonly trackingNumberType?: TrackingNumberType;
  readonly status?: TrackingStatus;
  readonly shipmentDate?: string;
  readonly carrier?: Carrier;
  readonly lastUpdatedTime?: string;
};

export class Tracker extends Utility implements Static<IUtility, typeof Tracker> {
  private transactionId?: string;
  private trackingNumber?: string;
  private carrierNameOther?: string;
  private postagePaymentId?: string;
  private notifyBoolean?: boolean;
  private quantity?: number;
  private trackingNumberValided?: boolean;
  private shipmentDirection?: ShipmentDirection;
  private shipmentUploader?: ShipmentUploader;
  private links?: LinkDescription[];
  private trackingNumberType?: TrackingNumberType;
  private status?: TrackingStatus;
  private shipmentDate?: string;
  private carrier?: Carrier;
  private lastUpdatedTime?: string;

  constructor(private PayPal?: PayPal) {
    super();
  }

  // TODO: implement instance methods for AddTracking

  public setTransactionId(transactionId: string): OnlySetters<this> {
    this.transactionId = transactionId;
    return this;
  }
  public getTransactionId() {
    return this.transactionId;
  }

  public setTrackingNumber(trackingNumber: string): OnlySetters<this> {
    this.trackingNumber = trackingNumber;
    return this;
  }
  public getTrackingNumber() {
    return this.trackingNumber;
  }

  public setCarrierNameOther(carrierNameOther: string): OnlySetters<this> {
    this.carrierNameOther = carrierNameOther;
    return this;
  }
  public getCarrierNameOther() {
    return this.carrierNameOther;
  }

  public setPostagePaymentId(postagePaymentId: string): OnlySetters<this> {
    this.postagePaymentId = postagePaymentId;
    return this;
  }
  public getPostagePaymentId() {
    return this.postagePaymentId;
  }

  public setNotifyBoolean(notifyBoolean: boolean): OnlySetters<this> {
    this.notifyBoolean = notifyBoolean;
    return this;
  }
  public getNotifyBoolean() {
    return this.notifyBoolean;
  }

  public setQuantity(quantity: number): OnlySetters<this> {
    this.quantity = quantity;
    return this;
  }
  public getQuantity() {
    return this.quantity;
  }

  public setTrackingNumberValided(trackingNumberValided: boolean): OnlySetters<this> {
    this.trackingNumberValided = trackingNumberValided;
    return this;
  }
  public getTrackingNumberValided() {
    return this.trackingNumberValided;
  }

  public setShipmentDirection(shipmentDirection: ShipmentDirection): OnlySetters<this>;
  public setShipmentDirection(
    shipmentDirection: (shipmentDirection: typeof ShipmentDirection) => ShipmentDirection
  ): OnlySetters<this>;
  public setShipmentDirection(
    shipmentDirection: ShipmentDirection | ((shipmentDirection: typeof ShipmentDirection) => ShipmentDirection)
  ): OnlySetters<this> {
    if (typeof shipmentDirection === "function") this.shipmentDirection = shipmentDirection(ShipmentDirection);
    else this.shipmentDirection = shipmentDirection;
    return this;
  }
  public getShipmentDirection() {
    return this.shipmentDirection;
  }

  public setShipmentUploader(shipmentUploader: ShipmentUploader): OnlySetters<this>;
  public setShipmentUploader(
    shipmentUploader: (shipmentUploader: typeof ShipmentUploader) => ShipmentUploader
  ): OnlySetters<this>;
  public setShipmentUploader(
    shipmentUploader: ShipmentUploader | ((shipmentUploader: typeof ShipmentUploader) => ShipmentUploader)
  ): OnlySetters<this> {
    if (typeof shipmentUploader === "function") this.shipmentUploader = shipmentUploader(ShipmentUploader);
    else this.shipmentUploader = shipmentUploader;
    return this;
  }
  public getShipmentUploader() {
    return this.shipmentUploader;
  }

  public setLinks(links: LinkDescription[]): OnlySetters<this>;
  public setLinks(links: ((links: OnlySetters<LinkDescription>) => void)[]): OnlySetters<this>;
  public setLinks(links: (LinkDescription | ((links: OnlySetters<LinkDescription>) => void))[]): OnlySetters<this> {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      else {
        const linkInstance = new LinkDescription();
        link(linkInstance);
        return linkInstance;
      }
    });
    return this;
  }
  public getLinks() {
    return this.links;
  }

  public setTrackingNumberType(trackingNumberType: TrackingNumberType): OnlySetters<this>;
  public setTrackingNumberType(
    trackingNumberType: (trackingNumberType: typeof TrackingNumberType) => TrackingNumberType
  ): OnlySetters<this>;
  public setTrackingNumberType(
    trackingNumberType: TrackingNumberType | ((trackingNumberType: typeof TrackingNumberType) => TrackingNumberType)
  ): OnlySetters<this> {
    if (typeof trackingNumberType === "function") this.trackingNumberType = trackingNumberType(TrackingNumberType);
    else this.trackingNumberType = trackingNumberType;
    return this;
  }
  public getTrackingNumberType() {
    return this.trackingNumberType;
  }

  public setStatus(status: TrackingStatus): OnlySetters<this>;
  public setStatus(status: (status: typeof TrackingStatus) => TrackingStatus): OnlySetters<this>;
  public setStatus(status: TrackingStatus | ((status: typeof TrackingStatus) => TrackingStatus)): OnlySetters<this> {
    if (typeof status === "function") this.status = status(TrackingStatus);
    else this.status = status;
    return this;
  }
  public getStatus() {
    return this.status;
  }

  public setShipmentDate(shipmentDate: string): OnlySetters<this> {
    this.shipmentDate = shipmentDate;
    return this;
  }
  public getShipmentDate() {
    return this.shipmentDate;
  }

  public setCarrier(carrier: Carrier): OnlySetters<this>;
  public setCarrier(carrier: (carrier: typeof Carrier) => Carrier): OnlySetters<this>;
  public setCarrier(carrier: Carrier | ((carrier: typeof Carrier) => Carrier)): OnlySetters<this> {
    if (typeof carrier === "function") this.carrier = carrier(Carrier);
    else this.carrier = carrier;
    return this;
  }
  public getCarrier() {
    return this.carrier;
  }

  public setLastUpdatedTime(lastUpdatedTime: string): OnlySetters<this> {
    this.lastUpdatedTime = lastUpdatedTime;
    return this;
  }
  public getLastUpdatedTime() {
    return this.lastUpdatedTime;
  }

  public override getFields<T extends TrackerFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TTracker): Tracker {
    const tracker = new Tracker();
    if (obj.transaction_id) tracker.setTransactionId(obj.transaction_id);
    if (obj.tracking_number) tracker.setTrackingNumber(obj.tracking_number);
    if (obj.carrier_name_other) tracker.setCarrierNameOther(obj.carrier_name_other);
    if (obj.postage_payment_id) tracker.setPostagePaymentId(obj.postage_payment_id);
    if (obj.notify_boolean) tracker.setNotifyBoolean(obj.notify_boolean);
    if (obj.quantity) tracker.setQuantity(obj.quantity);
    if (obj.tracking_number_valided) tracker.setTrackingNumberValided(obj.tracking_number_valided);
    if (obj.shipment_direction) tracker.setShipmentDirection(ShipmentDirection[obj.shipment_direction]);
    if (obj.shipment_uploader) tracker.setShipmentUploader(ShipmentUploader[obj.shipment_uploader]);
    if (obj.links) tracker.setLinks(obj.links.map((link) => LinkDescription.fromObject(link)));
    if (obj.tracking_number_type) tracker.setTrackingNumberType(TrackingNumberType[obj.tracking_number_type]);
    if (obj.status) tracker.setStatus(TrackingStatus[obj.status]);
    if (obj.shipment_date) tracker.setShipmentDate(obj.shipment_date);
    if (obj.carrier) tracker.setCarrier(Carrier[obj.carrier]);
    if (obj.last_updated_time) tracker.setLastUpdatedTime(obj.last_updated_time);
    return tracker;
  }
}
