import Types from "../Types.js";
import PhoneDetail, { TPhoneDetail } from "./PhoneDetail.js";

export type TInvoicerInfo = {
  additional_notes?: string;
  email_address?: string;
  logo_url?: string;
  phones?: TPhoneDetail[];
  tax_id?: string;
  website?: string;
};

class InvoicerInfo extends Types {
  additionalNotes?: string;
  emailAddress?: string;
  logoUrl?: string;
  phones?: PhoneDetail[];
  taxId?: string;
  website?: string;
  constructor() {
    super();
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

  override fromObject(obj: TInvoicerInfo) {
    this.additionalNotes = obj.additional_notes;
    this.emailAddress = obj.email_address;
    this.logoUrl = obj.logo_url;
    this.phones = obj.phones?.map((x) => new PhoneDetail().fromObject(x));
    this.taxId = obj.tax_id;
    this.website = obj.website;
    return this;
  }
}

export default InvoicerInfo;
