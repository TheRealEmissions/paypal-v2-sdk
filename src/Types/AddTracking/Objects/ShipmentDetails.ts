import { IUtility, OnlySetters, Static, Utility } from "../../Utility";
import { ShippingStatus } from "../Enums/ShippingStatus";

export type TShipmentDetails = {
  transaction_id?: string;
  tracking_id?: string;
  package_name?: string;
  estimated_delivery_date?: string;
  delivery_date?: string;
  ship_date?: string;
  shipment_status?: keyof typeof ShippingStatus;
};

type ShipmentDetailsFields = {
  readonly transactionId?: string;
  readonly trackingId?: string;
  readonly packageName?: string;
  readonly estimatedDeliveryDate?: string;
  readonly deliveryDate?: string;
  readonly shipDate?: string;
  readonly shipmentStatus?: ShippingStatus;
};

export class ShipmentDetails extends Utility implements Static<IUtility, typeof ShipmentDetails> {
  private transactionId?: string;
  private trackingId?: string;
  private packageName?: string;
  private estimatedDeliveryDate?: string;
  private deliveryDate?: string;
  private shipDate?: string;
  private shipmentStatus?: ShippingStatus;

  public setTransactionId(transactionId: string): OnlySetters<this> {
    this.transactionId = transactionId;
    return this;
  }
  public getTransactionId() {
    return this.transactionId;
  }

  public setTrackingId(trackingId: string): OnlySetters<this> {
    this.trackingId = trackingId;
    return this;
  }
  public getTrackingId() {
    return this.trackingId;
  }

  public setPackageName(packageName: string): OnlySetters<this> {
    this.packageName = packageName;
    return this;
  }
  public getPackageName() {
    return this.packageName;
  }

  public setEstimatedDeliveryDate(estimatedDeliveryDate: string): OnlySetters<this> {
    this.estimatedDeliveryDate = estimatedDeliveryDate;
    return this;
  }
  public getEstimatedDeliveryDate() {
    return this.estimatedDeliveryDate;
  }

  public setDeliveryDate(deliveryDate: string): OnlySetters<this> {
    this.deliveryDate = deliveryDate;
    return this;
  }
  public getDeliveryDate() {
    return this.deliveryDate;
  }

  public setShipDate(shipDate: string): OnlySetters<this> {
    this.shipDate = shipDate;
    return this;
  }
  public getShipDate() {
    return this.shipDate;
  }

  public setShipmentStatus(shipmentStatus: ShippingStatus): OnlySetters<this>;
  public setShipmentStatus(
    shipmentStatus: (shipmentStatus: typeof ShippingStatus) => ShippingStatus
  ): OnlySetters<this>;
  public setShipmentStatus(
    shipmentStatus: ShippingStatus | ((shipmentStatus: typeof ShippingStatus) => ShippingStatus)
  ): OnlySetters<this> {
    if (typeof shipmentStatus === "function") {
      this.shipmentStatus = shipmentStatus(ShippingStatus);
    } else {
      this.shipmentStatus = shipmentStatus;
    }
    return this;
  }
  public getShipmentStatus() {
    return this.shipmentStatus;
  }

  public override getFields<T extends ShipmentDetailsFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TShipmentDetails) {
    const shipmentDetails = new ShipmentDetails();
    if (obj.transaction_id) shipmentDetails.setTransactionId(obj.transaction_id);
    if (obj.tracking_id) shipmentDetails.setTrackingId(obj.tracking_id);
    if (obj.package_name) shipmentDetails.setPackageName(obj.package_name);
    if (obj.estimated_delivery_date) shipmentDetails.setEstimatedDeliveryDate(obj.estimated_delivery_date);
    if (obj.delivery_date) shipmentDetails.setDeliveryDate(obj.delivery_date);
    if (obj.ship_date) shipmentDetails.setShipDate(obj.ship_date);
    if (obj.shipment_status) shipmentDetails.setShipmentStatus(ShippingStatus[obj.shipment_status]);
    return shipmentDetails;
  }
}
