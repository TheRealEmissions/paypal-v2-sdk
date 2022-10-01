import Types from "../Types.js";
import PhoneDetail, { TPhoneDetail } from "./PhoneDetail.js";

export type TBillingInfo = {
  additional_info?: string;
  email_address?: string;
  language?: string;
  phones?: TPhoneDetail[];
};

class BillingInfo extends Types {
  additionalInfo?: string;
  emailAddress?: string;
  language?: string;
  phones?: PhoneDetail[];

  constructor() {
    super();
  }

  setAdditionalInfo(additionalInfo: string) {
    this.additionalInfo = additionalInfo;
    return this;
  }

  setEmailAddress(emailAddress: string) {
    this.emailAddress = emailAddress;
    return this;
  }

  setLanguage(language: string) {
    this.language = language;
    return this;
  }

  setPhones(phones: PhoneDetail[]) {
    this.phones = phones;
    return this;
  }

  override fromObject(obj: TBillingInfo) {
    this.additionalInfo = obj.additional_info;
    this.emailAddress = obj.email_address;
    this.language = obj.language;
    this.phones = obj.phones ? obj.phones.map((x) => new PhoneDetail().fromObject(x)) : undefined;
    return this;
  }
}

export default BillingInfo;
