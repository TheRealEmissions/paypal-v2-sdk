import PayPal from "../../PayPal";
import Types from "../Types";
import AddressDetails, { TAddressDetails } from "./AddressDetails";

export type TAddressPortable = {
  country_code: string;
  address_details: TAddressDetails;
  address_line_1: string;
  address_line_2: string;
  address_line_3: string;
  admin_area_1: string;
  admin_area_2: string;
  admin_area_3: string;
  admin_area_4: string;
  postal_code: string;
};

class AddressPortable extends Types {
  countryCode: string;
  addressDetails: AddressDetails;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  adminArea1: string;
  adminArea2: string;
  adminArea3: string;
  adminArea4: string;
  postalCode: string;
  constructor() {
    super();
  }

  setCountryCode(countryCode: string) {
    this.countryCode = countryCode;
    return this;
  }

  setAddressDetails(addressDetails: AddressDetails) {
    this.addressDetails = addressDetails;
    return this;
  }

  setAddressLine1(addressLine1: string) {
    this.addressLine1 = addressLine1;
    return this;
  }

  setAddressLine2(addressLine2: string) {
    this.addressLine2 = addressLine2;
    return this;
  }

  setAddressLine3(addressLine3: string) {
    this.addressLine3 = addressLine3;
    return this;
  }

  setAdminArea1(adminArea1: string) {
    this.adminArea1 = adminArea1;
    return this;
  }

  setAdminArea2(adminArea2: string) {
    this.adminArea2 = adminArea2;
    return this;
  }

  setAdminArea3(adminArea3: string) {
    this.adminArea3 = adminArea3;
    return this;
  }

  setAdminArea4(adminArea4: string) {
    this.adminArea4 = adminArea4;
    return this;
  }

  setPostalCode(postalCode: string) {
    this.postalCode = postalCode;
    return this;
  }

  override fromObject(obj: TAddressPortable): this {
    this.countryCode = obj["country_code"];
    this.addressDetails = new AddressDetails().fromObject(
      obj["address_details"]
    );
    this.addressLine1 = obj["address_line_1"];
    this.addressLine2 = obj["address_line_2"];
    this.addressLine3 = obj["address_line_3"];
    this.adminArea1 = obj["admin_area_1"];
    this.adminArea2 = obj["admin_area_2"];
    this.adminArea3 = obj["admin_area_3"];
    this.adminArea4 = obj["admin_area_4"];
    this.postalCode = obj["postal_code"];
    return this;
  }
}

export default AddressPortable;
