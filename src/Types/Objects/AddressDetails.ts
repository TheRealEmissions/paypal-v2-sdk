import { Utility, IUtility, Static } from "../Utility.js";

export type TAddressDetails = {
  street_number?: string;
  street_name?: string;
  street_type?: string;
  delivery_service?: string;
  building_name?: string;
  sub_building?: string;
};

export class AddressDetails extends Utility implements Static<IUtility, typeof AddressDetails> {
  private streetNumber?: string;
  private streetName?: string;
  private streetType?: string;
  private deliveryService?: string;
  private buildingName?: string;
  private subBuilding?: string;

  public setStreetNumber(number: string) {
    this.streetNumber = number;
    return this;
  }
  public getStreetNumber() {
    return this.streetNumber;
  }

  public setStreetName(name: string) {
    this.streetName = name;
    return this;
  }
  public getStreetName() {
    return this.streetName;
  }

  public setStreetType(type: string) {
    this.streetType = type;
    return this;
  }
  public getStreetType() {
    return this.streetType;
  }

  public setDeliveryService(service: string) {
    this.deliveryService = service;
    return this;
  }
  public getDeliveryService() {
    return this.deliveryService;
  }

  public setBuildingName(name: string) {
    this.buildingName = name;
    return this;
  }
  public getBuildingName() {
    return this.buildingName;
  }

  public setSubBuilding(name: string) {
    this.subBuilding = name;
    return this;
  }
  public getSubBuilding() {
    return this.subBuilding;
  }

  public override getFields<T extends TAddressDetails>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TAddressDetails): AddressDetails {
    const addressDetails = new AddressDetails();
    if (obj.street_number) addressDetails.setStreetNumber(obj.street_number);
    if (obj.street_name) addressDetails.setStreetName(obj.street_name);
    if (obj.street_type) addressDetails.setStreetType(obj.street_type);
    if (obj.delivery_service) addressDetails.setDeliveryService(obj.delivery_service);
    if (obj.building_name) addressDetails.setBuildingName(obj.building_name);
    if (obj.sub_building) addressDetails.setSubBuilding(obj.sub_building);

    return addressDetails;
  }
}
