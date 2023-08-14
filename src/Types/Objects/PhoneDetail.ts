import { Utility, IUtility, Static } from "../Utility.js";

export type TPhoneDetail = {
  country_code: string;
  national_number: string;
  extension_number?: string;
  phone_type?: string;
};

export class PhoneDetail extends Utility implements Static<IUtility, typeof PhoneDetail> {
  private countryCode?: string;
  private nationalNumber?: string;
  private extensionNumber?: string;
  private phoneType?: string;

  public setCountryCode(countryCode: string) {
    this.countryCode = countryCode;
    return this;
  }
  public getCountryCode() {
    return this.countryCode;
  }

  public setNationalNumber(nationalNumber: string) {
    this.nationalNumber = nationalNumber;
    return this;
  }
  public getNationalNumber() {
    return this.nationalNumber;
  }

  public setExtensionNumber(extensionNumber: string) {
    this.extensionNumber = extensionNumber;
    return this;
  }
  public getExtensionNumber() {
    return this.extensionNumber;
  }

  public setPhoneType(phoneType: string) {
    this.phoneType = phoneType;
    return this;
  }
  public getPhoneType() {
    return this.phoneType;
  }

  public override getFields<T extends Partial<TPhoneDetail>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TPhoneDetail) {
    const phoneDetail = new PhoneDetail();
    if (obj.country_code) phoneDetail.setCountryCode(obj.country_code);
    if (obj.national_number) phoneDetail.setNationalNumber(obj.national_number);
    if (obj.extension_number) phoneDetail.setExtensionNumber(obj.extension_number);
    if (obj.phone_type) phoneDetail.setPhoneType(obj.phone_type);
    return phoneDetail;
  }
}
