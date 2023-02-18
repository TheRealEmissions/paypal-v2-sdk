import Types, { ITypes, Static } from "@Types/Types.js";

export type TPhoneDetail = {
  country_code: string;
  national_number: string;
  extension_number?: string;
  phone_type?: string;
};

class PhoneDetail extends Types implements Static<ITypes, typeof PhoneDetail> {
  countryCode?: string;
  nationalNumber?: string;
  extensionNumber?: string;
  phoneType?: string;
  constructor() {
    super();
  }

  setCountryCode(countryCode: string) {
    this.countryCode = countryCode;
    return this;
  }

  setNationalNumber(nationalNumber: string) {
    this.nationalNumber = nationalNumber;
    return this;
  }

  setExtensionNumber(extensionNumber: string) {
    this.extensionNumber = extensionNumber;
    return this;
  }

  setPhoneType(phoneType: string) {
    this.phoneType = phoneType;
    return this;
  }

  static fromObject(obj: TPhoneDetail) {
    const phoneDetail = new PhoneDetail();
    if (obj.country_code) phoneDetail.setCountryCode(obj.country_code);
    if (obj.national_number) phoneDetail.setNationalNumber(obj.national_number);
    if (obj.extension_number) phoneDetail.setExtensionNumber(obj.extension_number);
    if (obj.phone_type) phoneDetail.setPhoneType(obj.phone_type);
    return phoneDetail;
  }
}

export default PhoneDetail;
