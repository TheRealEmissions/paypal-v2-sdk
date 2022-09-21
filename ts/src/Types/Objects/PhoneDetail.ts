import PayPal from "../../PayPal";
import Types from "../Types";

class PhoneDetail extends Types {
  countryCode: string;
  nationalNumber: string;
  extensionNumber: string;
  phoneType: string;
  constructor(PayPal: PayPal) {
    super(PayPal);
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
}

export default PhoneDetail;
