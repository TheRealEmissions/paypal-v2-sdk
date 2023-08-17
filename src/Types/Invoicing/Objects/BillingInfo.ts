import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { PhoneDetail, TPhoneDetail } from "./PhoneDetail.js";

export type TBillingInfo = {
  additional_info?: string;
  email_address?: string;
  language?: string;
  phones?: TPhoneDetail[];
};

export class BillingInfo extends Utility implements Static<IUtility, typeof BillingInfo> {
  private additionalInfo?: string;
  private emailAddress?: string;
  private language?: string;
  private phones?: PhoneDetail[];

  public setAdditionalInfo(additionalInfo: string) {
    this.additionalInfo = additionalInfo;
    return this;
  }
  public getAdditionalInfo() {
    return this.additionalInfo;
  }

  public setEmailAddress(emailAddress: string) {
    this.emailAddress = emailAddress;
    return this;
  }
  public getEmailAddress() {
    return this.emailAddress;
  }

  public setLanguage(language: string) {
    this.language = language;
    return this;
  }
  public getLanguage() {
    return this.language;
  }

  public setPhones(...phones: PhoneDetail[]): this;
  public setPhones(...phones: ((phone: OnlySetters<PhoneDetail>) => void)[]): this;
  public setPhones(...phones: (PhoneDetail | ((phone: OnlySetters<PhoneDetail>) => void))[]) {
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
  public getPhones() {
    return this.phones;
  }

  public override getFields<T extends TBillingInfo>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TBillingInfo) {
    const billingInfo = new BillingInfo();
    if (obj.additional_info) billingInfo.setAdditionalInfo(obj.additional_info);
    if (obj.email_address) billingInfo.setEmailAddress(obj.email_address);
    if (obj.language) billingInfo.setLanguage(obj.language);
    if (obj.phones) billingInfo.setPhones(...obj.phones.map((phone) => PhoneDetail.fromObject(phone)));
    return billingInfo;
  }
}
