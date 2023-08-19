import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { AddressDetails, TAddressDetails } from "./AddressDetails.js";

export type TPortablePostalAddress = {
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

type PortablePostalAddressFields = {
  readonly countryCode?: string;
  readonly addressDetails?: AddressDetails;
  readonly addressLine1?: string;
  readonly addressLine2?: string;
  readonly addressLine3?: string;
  readonly adminArea1?: string;
  readonly adminArea2?: string;
  readonly adminArea3?: string;
  readonly adminArea4?: string;
  readonly postalCode?: string;
};

export class PortablePostalAddress extends Utility implements Static<IUtility, typeof PortablePostalAddress> {
  private countryCode?: string;
  private addressDetails?: AddressDetails;
  private addressLine1?: string;
  private addressLine2?: string;
  private addressLine3?: string;
  private adminArea1?: string;
  private adminArea2?: string;
  private adminArea3?: string;
  private adminArea4?: string;
  private postalCode?: string;

  public setCountryCode(countryCode: string) {
    this.countryCode = countryCode;
    return this;
  }
  public getCountryCode() {
    return this.countryCode;
  }

  public setAddressDetails(addressDetails: AddressDetails): this;
  public setAddressDetails(addressDetails: (addressDetails: OnlySetters<AddressDetails>) => void): this;
  public setAddressDetails(addressDetails: AddressDetails | ((addressDetails: OnlySetters<AddressDetails>) => void)) {
    if (addressDetails instanceof AddressDetails) {
      this.addressDetails = addressDetails;
    } else {
      const addressDetailsInstance = new AddressDetails();
      addressDetails(addressDetailsInstance);
      this.addressDetails = addressDetailsInstance;
    }
    return this;
  }
  public getAddressDetails() {
    return this.addressDetails;
  }

  public setAddressLine1(addressLine1: string) {
    this.addressLine1 = addressLine1;
    return this;
  }
  public getAddressLine1() {
    return this.addressLine1;
  }

  public setAddressLine2(addressLine2: string) {
    this.addressLine2 = addressLine2;
    return this;
  }
  public getAddressLine2() {
    return this.addressLine2;
  }

  public setAddressLine3(addressLine3: string) {
    this.addressLine3 = addressLine3;
    return this;
  }
  public getAddressLine3() {
    return this.addressLine3;
  }

  public setAdminArea1(adminArea1: string) {
    this.adminArea1 = adminArea1;
    return this;
  }
  public getAdminArea1() {
    return this.adminArea1;
  }

  public setAdminArea2(adminArea2: string) {
    this.adminArea2 = adminArea2;
    return this;
  }
  public getAdminArea2() {
    return this.adminArea2;
  }

  public setAdminArea3(adminArea3: string) {
    this.adminArea3 = adminArea3;
    return this;
  }
  public getAdminArea3() {
    return this.adminArea3;
  }

  public setAdminArea4(adminArea4: string) {
    this.adminArea4 = adminArea4;
    return this;
  }
  public getAdminArea4() {
    return this.adminArea4;
  }

  public setPostalCode(postalCode: string) {
    this.postalCode = postalCode;
    return this;
  }
  public getPostalCode() {
    return this.postalCode;
  }

  public override getFields<T extends Partial<PortablePostalAddressFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TPortablePostalAddress): PortablePostalAddress {
    const addressPortable = new PortablePostalAddress();
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
