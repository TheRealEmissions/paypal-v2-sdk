import Types, { ITypes, StaticImplements } from "../Types.js";

export type TAddressDetails = {
  street_number?: string;
  street_name?: string;
  street_type?: string;
  delivery_service?: string;
  building_name?: string;
  sub_building?: string;
};

class AddressDetails extends Types implements StaticImplements<ITypes, typeof AddressDetails> {
  streetNumber?: string;
  streetName?: string;
  streetType?: string;
  deliveryService?: string;
  buildingName?: string;
  subBuilding?: string;

  constructor() {
    super();
  }

  setStreetNumber(number: string) {
    this.streetNumber = number;
    return this;
  }

  setStreetName(name: string) {
    this.streetName = name;
    return this;
  }

  setStreetType(type: string) {
    this.streetType = type;
    return this;
  }

  setDeliveryService(service: string) {
    this.deliveryService = service;
    return this;
  }

  setBuildingName(name: string) {
    this.buildingName = name;
    return this;
  }

  setSubBuilding(name: string) {
    this.subBuilding = name;
    return this;
  }

  static fromObject(obj: TAddressDetails): AddressDetails {
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

export default AddressDetails;
