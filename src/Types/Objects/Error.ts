import Types from "../Types";
import ErrorDetails, { TErrorDetails } from "./ErrorDetails";
import LinkDescription, { TLinkDescription } from "./LinkDescription";

export type TError = {
  debug_id: string;
  message: string;
  name: string;
  details?: TErrorDetails[];
  readonly information_link?: string;
  readonly links?: TLinkDescription[];
};

class Error extends Types {
  debugId?: string;
  message?: string;
  name?: string;
  details?: ErrorDetails[];
  informationLink?: string;
  links?: LinkDescription[];
  constructor() {
    super();
  }

  setDebugId(debugId: string) {
    this.debugId = debugId;
    return this;
  }

  setMessage(message: string) {
    this.message = message;
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setDetails(details: ErrorDetails[]) {
    this.details = details;
    return this;
  }

  setInformationLink(informationLink: string) {
    this.informationLink = informationLink;
    return this;
  }

  setLinks(links: LinkDescription[]) {
    this.links = links;
    return this;
  }

  override fromObject(obj: TError): this {
    this.debugId = obj.debug_id;
    this.message = obj.message;
    this.name = obj.name;
    this.details = obj.details?.map((detail) => {
      return new ErrorDetails().fromObject(detail);
    });
    this.informationLink = obj.information_link;
    this.links = obj.links?.map((link) => {
      return new LinkDescription().fromObject(link);
    });
    return this;
  }
}

export default Error;
