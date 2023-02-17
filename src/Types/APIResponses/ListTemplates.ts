import AddressPortable, { TAddressPortable } from "../Objects/AddressPortable.js";
import LinkDescription, { TLinkDescription } from "../Objects/LinkDescription.js";
import PhoneDetail, { TPhoneDetail } from "../Objects/PhoneDetail.js";
import Template, { TTemplate } from "../Objects/Template.js";
import Types, { ITypes, Static } from "../Types.js";

export type TListTemplatesResponse = {
  readonly addresses: TAddressPortable[];
  readonly emails: string;
  readonly links: TLinkDescription[];
  readonly phones: TPhoneDetail[];
  readonly templates: TTemplate[];
};

class ListTemplatesResponse extends Types implements Static<ITypes, typeof ListTemplatesResponse> {
  readonly addresses: AddressPortable[];
  readonly emails: string;
  readonly links: LinkDescription[];
  readonly phones: PhoneDetail[];
  readonly templates: Template[];
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
