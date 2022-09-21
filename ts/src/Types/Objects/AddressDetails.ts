import PayPal from "../../PayPal";
import Types from "../Types";

class AddressDetails extends Types {
  streetNumber: string;
  streetName: string;
  streetType: string;
  deliveryService: string;
  buildingName: string;
  subBuilding: string;

  constructor(PayPal: PayPal) {
    super(PayPal);
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
}

export default AddressDetails;
