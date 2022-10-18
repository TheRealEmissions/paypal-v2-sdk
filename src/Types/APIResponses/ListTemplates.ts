import AddressPortable, { TAddressPortable } from "../Objects/AddressPortable.js";
import LinkDescription, { TLinkDescription } from "../Objects/LinkDescription.js";
import PhoneDetail, { TPhoneDetail } from "../Objects/PhoneDetail.js";
import Template, { TTemplate } from "../Objects/Template.js";
import TypeResponse from "./TypeResponse.js";

export type TListTemplatesResponse = {
  readonly addresses: TAddressPortable[];
  readonly emails: string;
  readonly links: TLinkDescription[];
  readonly phones: TPhoneDetail[];
  readonly templates: TTemplate[];
};

class ListTemplatesResponse extends TypeResponse {
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
}

export default ListTemplatesResponse;
