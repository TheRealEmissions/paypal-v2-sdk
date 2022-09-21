import PayPal from "../../PayPal";
import Types from "../Types";

export type TAddressDetails = {
  street_number: string;
  street_name: string;
  street_type: string;
  delivery_service: string;
  building_name: string;
  sub_building: string;
};

class AddressDetails extends Types {
  streetNumber: string;
  streetName: string;
  streetType: string;
  deliveryService: string;
  buildingName: string;
  subBuilding: string;

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

  override fromObject(obj: TAddressDetails): this {
    this.streetNumber = obj["street_number"];
    this.streetName = obj["street_name"];
    this.streetType = obj["street_type"];
    this.deliveryService = obj["delivery_service"];
    this.buildingName = obj["building_name"];
    this.subBuilding = obj["sub_building"];
    return this;
  }
}

export default AddressDetails;
