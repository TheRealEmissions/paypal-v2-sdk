import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { PhoneDetail, TPhoneDetail } from "./PhoneDetail.js";

export type TInvoicerInfo = {
  additional_notes?: string;
  email_address?: string;
  logo_url?: string;
  phones?: TPhoneDetail[];
  tax_id?: string;
  website?: string;
};

type InvoicerInfoFields = {
  readonly additionalNotes?: string;
  readonly emailAddress?: string;
  readonly logoUrl?: string;
  readonly phones?: PhoneDetail[];
  readonly taxId?: string;
  readonly website?: string;
};

export class InvoicerInfo extends Utility implements Static<IUtility, typeof InvoicerInfo> {
  private additionalNotes?: string;
  private emailAddress?: string;
  private logoUrl?: string;
  private phones?: PhoneDetail[];
  private taxId?: string;
  private website?: string;

  public setAdditionalNotes(additionalNotes: string) {
    this.additionalNotes = additionalNotes;
    return this;
  }
  public getAdditionalNotes() {
    return this.additionalNotes;
  }

  public setEmailAddress(emailAddress: string) {
    this.emailAddress = emailAddress;
    return this;
  }
  public getEmailAddress() {
    return this.emailAddress;
  }

  public setLogoUrl(logoUrl: string) {
    this.logoUrl = logoUrl;
    return this;
  }
  public getLogoUrl() {
    return this.logoUrl;
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

  public setTaxId(taxId: string) {
    this.taxId = taxId;
    return this;
  }
  public getTaxId() {
    return this.taxId;
  }

  public setWebsite(website: string) {
    this.website = website;
    return this;
  }
  public getWebsite() {
    return this.website;
  }

  public override getFields<T extends InvoicerInfoFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TInvoicerInfo) {
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
