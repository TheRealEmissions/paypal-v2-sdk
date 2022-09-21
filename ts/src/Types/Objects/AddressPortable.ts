import PayPal from "../../PayPal";
import Types from "../Types";
import AddressDetails from "./AddressDetails";

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
  constructor(PayPal: PayPal) {
    super(PayPal);
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
}

export default AddressPortable;
