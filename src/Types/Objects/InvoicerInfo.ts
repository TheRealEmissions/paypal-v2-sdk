import Types, { ITypes, Static } from "../Types.js";
import { PhoneDetail, TPhoneDetail } from "./PhoneDetail.js";

export type TInvoicerInfo = {
  additional_notes?: string;
  email_address?: string;
  logo_url?: string;
  phones?: TPhoneDetail[];
  tax_id?: string;
  website?: string;
};

export class InvoicerInfo extends Types implements Static<ITypes, typeof InvoicerInfo> {
  additionalNotes?: string;
  emailAddress?: string;
  logoUrl?: string;
  phones?: PhoneDetail[];
  taxId?: string;
  website?: string;

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

  setTaxId(taxId: string) {
    this.taxId = taxId;
    return this;
  }

  setWebsite(website: string) {
    this.website = website;
    return this;
  }

  static fromObject(obj: TInvoicerInfo) {
    const invoicerInfo = new InvoicerInfo();
    if (obj.additional_notes) invoicerInfo.setAdditionalNotes(obj.additional_notes);
    if (obj.email_address) invoicerInfo.setEmailAddress(obj.email_address);
    if (obj.logo_url) invoicerInfo.setLogoUrl(obj.logo_url);
    if (obj.phones) invoicerInfo.setPhones(...obj.phones.map((phone) => PhoneDetail.fromObject(phone)));
    if (obj.tax_id) invoicerInfo.setTaxId(obj.tax_id);
    if (obj.website) invoicerInfo.setWebsite(obj.website);
    return invoicerInfo;
  }
}
