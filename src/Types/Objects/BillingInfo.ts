import Types, { ITypes, Static } from "../Types.js";
import PhoneDetail, { TPhoneDetail } from "./PhoneDetail.js";

export type TBillingInfo = {
  additional_info?: string;
  email_address?: string;
  language?: string;
  phones?: TPhoneDetail[];
};

class BillingInfo extends Types implements Static<ITypes, typeof BillingInfo> {
  additionalInfo?: string;
  emailAddress?: string;
  language?: string;
  phones?: PhoneDetail[];

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

  setPhones(...phones: PhoneDetail[]): this;
  setPhones(...phones: ((phone: PhoneDetail) => void)[]): this;
  setPhones(...phones: (PhoneDetail | ((phone: PhoneDetail) => void))[]) {
    this.phones = phones.map((phone) => {
      if (phone instanceof PhoneDetail) {
        return phone;
      } else {
        const phoneInstance = new PhoneDetail();
        phone(phoneInstance);
        return phoneInstance;
      }
    });
    return this;
  }

  static fromObject(obj: TBillingInfo) {
    const billingInfo = new BillingInfo();
    if (obj.additional_info) billingInfo.setAdditionalInfo(obj.additional_info);
    if (obj.email_address) billingInfo.setEmailAddress(obj.email_address);
    if (obj.language) billingInfo.setLanguage(obj.language);
    if (obj.phones) billingInfo.setPhones(...obj.phones.map((phone) => PhoneDetail.fromObject(phone)));
    return billingInfo;
  }
}

export default BillingInfo;
