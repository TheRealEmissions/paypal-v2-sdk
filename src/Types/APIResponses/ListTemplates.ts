import { AddressPortable, TAddressPortable } from "../Objects/AddressPortable.js";
import { LinkDescription, TLinkDescription } from "../Objects/LinkDescription.js";
import { PhoneDetail, TPhoneDetail } from "../Objects/PhoneDetail.js";
import { Template, TTemplate } from "../Objects/Template.js";
import { Utility, IUtility, Static } from "../Utility.js";

export type TListTemplatesResponse = {
  readonly addresses: TAddressPortable[];
  readonly emails: string;
  readonly links: TLinkDescription[];
  readonly phones: TPhoneDetail[];
  readonly templates: TTemplate[];
};

class ListTemplatesResponse extends Utility implements Static<IUtility, typeof ListTemplatesResponse> {
  private readonly addresses: AddressPortable[];
  private readonly emails: string;
  private readonly links: LinkDescription[];
  private readonly phones: PhoneDetail[];
  private readonly templates: Template[];
  constructor(
    addresses: AddressPortable[],
    emails: string,
    links: LinkDescription[],
    phones: PhoneDetail[],
    templates: Template[]
  ) {
    super();
    this.addresses = addresses;
    this.emails = emails;
    this.links = links;
    this.phones = phones;
    this.templates = templates;
  }

  public getAddresses() {
    return this.addresses;
  }

  public getEmails() {
    return this.emails;
  }

  public getLinks() {
    return this.links;
  }

  public getPhones() {
    return this.phones;
  }

  public getTemplates() {
    return this.templates;
  }

  public override getFields<T extends Partial<TListTemplatesResponse>>() {
    return super.getFields<T>();
  }

  static fromObject(obj: TListTemplatesResponse) {
    return new ListTemplatesResponse(
      obj.addresses.map((address) => AddressPortable.fromObject(address)),
      obj.emails,
      obj.links.map((link) => LinkDescription.fromObject(link)),
      obj.phones.map((phone) => PhoneDetail.fromObject(phone)),
      obj.templates.map((template) => Template.fromObject(template))
    );
  }
}

export default ListTemplatesResponse;
