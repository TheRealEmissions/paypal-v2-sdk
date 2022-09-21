import PayPal from "../../PayPal";
import Types from "../Types";
import PhoneDetail from "./PhoneDetail";

class InvoicerInfo extends Types {
  additionalNotes: string;
  emailAddress: string;
  logoUrl: string;
  phones: PhoneDetail[];
  taxId: string;
  website: string;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setAdditionalNotes(additionalNotes: string) {
    this.additionalNotes = additionalNotes;
    return this;
  }

  setEmailAddress(emailAddress: string) {
    this.emailAddress = emailAddress;
    return this;
  }

  setLogoUrl(logoUrl: string) {
    this.logoUrl = logoUrl;
    return this;
  }

  setPhones(phones: PhoneDetail[]) {
    this.phones = phones;
    return this;
  }

  setTaxId(taxId: string) {
    this.taxId = taxId;
    return this;
  }

  setWebsite(website: string) {
    this.website = website;
    return this;
  }
}

export default InvoicerInfo;
