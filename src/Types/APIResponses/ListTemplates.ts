import AddressPortable, { TAddressPortable } from "../Objects/AddressPortable";
import LinkDescription, { TLinkDescription } from "../Objects/LinkDescription";
import PhoneDetail, { TPhoneDetail } from "../Objects/PhoneDetail";
import Template, { TTemplate } from "../Objects/Template";
import TypeResponse from "./TypeResponse";

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
