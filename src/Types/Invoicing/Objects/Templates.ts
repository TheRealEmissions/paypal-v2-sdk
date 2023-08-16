import { IUtility, Static, Utility } from "../../Utility";
import { PortablePostalAddress, TPortablePostalAddress } from "./PortablePostalAddress";
import { PhoneDetail, TPhoneDetail } from "./PhoneDetail";
import { TTemplate, Template } from "./Template";
import { LinkDescription, TLinkDescription } from "./LinkDescription";

export type TTemplates = {
  addresses?: TPortablePostalAddress[];
  phones?: TPhoneDetail[];
  templates?: TTemplate[];
  links?: TLinkDescription[];
  emails?: string[];
};

export class Templates extends Utility implements Static<IUtility, typeof Templates> {
  private addresses?: PortablePostalAddress[];
  private phones?: PhoneDetail[];
  private templates?: Template[];
  private links?: LinkDescription[];
  private emails?: string[];

  public setAddresses(...addresses: PortablePostalAddress[]): this;
  public setAddresses(...addresses: ((address: PortablePostalAddress) => void)[]): this;
  public setAddresses(...addresses: (PortablePostalAddress | ((address: PortablePostalAddress) => void))[]) {
    this.addresses = addresses.map((address) => {
      if (address instanceof PortablePostalAddress) return address;
      const addressInstance = new PortablePostalAddress();
      address(addressInstance);
      return addressInstance;
    });
    return this;
  }
  public getAddresses() {
    return this.addresses;
  }

  public setPhones(...phones: PhoneDetail[]): this;
  public setPhones(...phones: ((phone: PhoneDetail) => void)[]): this;
  public setPhones(...phones: (PhoneDetail | ((phone: PhoneDetail) => void))[]) {
    this.phones = phones.map((phone) => {
      if (phone instanceof PhoneDetail) return phone;
      const phoneInstance = new PhoneDetail();
      phone(phoneInstance);
      return phoneInstance;
    });
    return this;
  }
  public getPhones() {
    return this.phones;
  }

  public setTemplates(...templates: Template[]): this;
  public setTemplates(...templates: ((template: Template) => void)[]): this;
  public setTemplates(...templates: (Template | ((template: Template) => void))[]) {
    this.templates = templates.map((template) => {
      if (template instanceof Template) return template;
      const templateInstance = new Template();
      template(templateInstance);
      return templateInstance;
    });
    return this;
  }
  public getTemplates() {
    return this.templates;
  }

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((link: LinkDescription) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((link: LinkDescription) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkInstance = new LinkDescription();
      link(linkInstance);
      return linkInstance;
    });
    return this;
  }
  public getLinks() {
    return this.links;
  }

  public setEmails(...emails: string[]) {
    this.emails = emails;
    return this;
  }
  public getEmails() {
    return this.emails;
  }

  public override getFields<T extends Partial<TTemplates>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TTemplates) {
    const templates = new Templates();
    if (obj.addresses)
      templates.setAddresses(...obj.addresses.map((address) => PortablePostalAddress.fromObject(address)));
    if (obj.phones) templates.setPhones(...obj.phones.map((phone) => PhoneDetail.fromObject(phone)));
    if (obj.templates) templates.setTemplates(...obj.templates.map((template) => Template.fromObject(template)));
    if (obj.links) templates.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    if (obj.emails) templates.setEmails(...obj.emails);
    return templates;
  }
}
