import Types from "../Types";

export type TPhoneDetail = {
  country_code: string;
  national_number: string;
  extension_number?: string;
  phone_type?: string;
};

class PhoneDetail extends Types {
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

  override fromObject(obj: TPhoneDetail) {
    this.countryCode = obj.country_code;
    this.nationalNumber = obj.national_number;
    this.extensionNumber = obj.extension_number;
    this.phoneType = obj.phone_type;
    return this;
  }
}

export default PhoneDetail;
