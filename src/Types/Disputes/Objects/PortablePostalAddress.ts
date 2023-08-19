import { IUtility, Static, Utility } from "../../Utility";
import { AddressDetails, TAddressDetails } from "./AddressDetails";

export type TPortablePostalAddress = {
  address_line_1?: string;
  address_line_2?: string;
  address_line_3?: string;
  admin_area_4?: string;
  admin_area_3?: string;
  admin_area_2?: string;
  admin_area_1?: string;
  postal_code?: string;
  country_code: string;
  address_details?: TAddressDetails;
};

type PortablePostalAddressFields = {
  readonly addressLine1?: string;
  readonly addressLine2?: string;
  readonly addressLine3?: string;
  readonly adminArea4?: string;
  readonly adminArea3?: string;
  readonly adminArea2?: string;
  readonly adminArea1?: string;
  readonly postalCode?: string;
  readonly countryCode: string;
  readonly addressDetails?: AddressDetails;
};

export class PortablePostalAddress extends Utility implements Static<IUtility, typeof PortablePostalAddress> {
  private addressLine1?: string;
  private addressLine2?: string;
  private addressLine3?: string;
  private adminArea4?: string;
  private adminArea3?: string;
  private adminArea2?: string;
  private adminArea1?: string;
  private postalCode?: string;
  private countryCode!: string;
  private addressDetails?: AddressDetails;

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

  public setAdminArea4(adminArea4: string) {
    this.adminArea4 = adminArea4;
    return this;
  }
  public getAdminArea4() {
    return this.adminArea4;
  }

  public setAdminArea3(adminArea3: string) {
    this.adminArea3 = adminArea3;
    return this;
  }
  public getAdminArea3() {
    return this.adminArea3;
  }

  public setAdminArea2(adminArea2: string) {
    this.adminArea2 = adminArea2;
    return this;
  }
  public getAdminArea2() {
    return this.adminArea2;
  }

  public setAdminArea1(adminArea1: string) {
    this.adminArea1 = adminArea1;
    return this;
  }
  public getAdminArea1() {
    return this.adminArea1;
  }

  public setPostalCode(postalCode: string) {
    this.postalCode = postalCode;
    return this;
  }
  public getPostalCode() {
    return this.postalCode;
  }

  public setCountryCode(countryCode: string) {
    this.countryCode = countryCode;
    return this;
  }
  public getCountryCode() {
    return this.countryCode;
  }

  public setAddressDetails(addressDetails: AddressDetails): this;
  public setAddressDetails(addressDetails: (addressDetails: AddressDetails) => void): this;
  public setAddressDetails(addressDetails: AddressDetails | ((addressDetails: AddressDetails) => void)): this {
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

  public override getFields<T extends Partial<PortablePostalAddressFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TPortablePostalAddress): PortablePostalAddress {
    const portablePostalAddress = new PortablePostalAddress();
    if (obj.address_line_1) {
      portablePostalAddress.setAddressLine1(obj.address_line_1);
    }
    if (obj.address_line_2) {
      portablePostalAddress.setAddressLine2(obj.address_line_2);
    }
    if (obj.address_line_3) {
      portablePostalAddress.setAddressLine3(obj.address_line_3);
    }
    if (obj.admin_area_4) {
      portablePostalAddress.setAdminArea4(obj.admin_area_4);
    }
    if (obj.admin_area_3) {
      portablePostalAddress.setAdminArea3(obj.admin_area_3);
    }
    if (obj.admin_area_2) {
      portablePostalAddress.setAdminArea2(obj.admin_area_2);
    }
    if (obj.admin_area_1) {
      portablePostalAddress.setAdminArea1(obj.admin_area_1);
    }
    if (obj.postal_code) {
      portablePostalAddress.setPostalCode(obj.postal_code);
    }
    if (obj.country_code) {
      portablePostalAddress.setCountryCode(obj.country_code);
    }
    if (obj.address_details) {
      portablePostalAddress.setAddressDetails(AddressDetails.fromObject(obj.address_details));
    }
    return portablePostalAddress;
  }
}
