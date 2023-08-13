import Types, { ITypes, Static } from "../Types.js";
import AddressDetails, { TAddressDetails } from "./AddressDetails.js";

export type TAddressPortable = {
  country_code: string;
  address_details?: TAddressDetails;
  address_line_1?: string;
  address_line_2?: string;
  address_line_3?: string;
  admin_area_1?: string;
  admin_area_2?: string;
  admin_area_3?: string;
  admin_area_4?: string;
  postal_code?: string;
};

class AddressPortable extends Types implements Static<ITypes, typeof AddressPortable> {
  countryCode?: string;
  addressDetails?: AddressDetails;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  adminArea1?: string;
  adminArea2?: string;
  adminArea3?: string;
  adminArea4?: string;
  postalCode?: string;

  setCountryCode(countryCode: string) {
    this.countryCode = countryCode;
    return this;
  }

  setAddressDetails(addressDetails: AddressDetails): this;
  setAddressDetails(addressDetails: (addressDetails: AddressDetails) => void): this;
  setAddressDetails(addressDetails: AddressDetails | ((addressDetails: AddressDetails) => void)) {
    if (addressDetails instanceof AddressDetails) {
      this.addressDetails = addressDetails;
    } else {
      const addressDetailsInstance = new AddressDetails();
      addressDetails(addressDetailsInstance);
      this.addressDetails = addressDetailsInstance;
    }
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

  static fromObject(obj: TAddressPortable): AddressPortable {
    const addressPortable = new AddressPortable();
    if (obj.country_code) addressPortable.setCountryCode(obj.country_code);
    if (obj.address_details) addressPortable.setAddressDetails(AddressDetails.fromObject(obj.address_details));
    if (obj.address_line_1) addressPortable.setAddressLine1(obj.address_line_1);
    if (obj.address_line_2) addressPortable.setAddressLine2(obj.address_line_2);
    if (obj.address_line_3) addressPortable.setAddressLine3(obj.address_line_3);
    if (obj.admin_area_1) addressPortable.setAdminArea1(obj.admin_area_1);
    if (obj.admin_area_2) addressPortable.setAdminArea2(obj.admin_area_2);
    if (obj.admin_area_3) addressPortable.setAdminArea3(obj.admin_area_3);
    if (obj.admin_area_4) addressPortable.setAdminArea4(obj.admin_area_4);
    if (obj.postal_code) addressPortable.setPostalCode(obj.postal_code);
    return addressPortable;
  }
}

export default AddressPortable;
