import PayPal from "../../PayPal";
import Types from "../Types";
import PhoneDetail from "./PhoneDetail";

class BillingInfo extends Types {
  additionalInfo: string;
  emailAddress: string;
  language: string;
  phones: PhoneDetail[];

  constructor(PayPal: PayPal) {
    super(PayPal);
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
}

export default BillingInfo;
