import Types, { ITypes, Static } from "../Types.js";
import ErrorDetails, { TErrorDetails } from "./ErrorDetails.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";

export type TError = {
  debug_id: string;
  message: string;
  name: string;
  details?: TErrorDetails[];
  readonly information_link?: string;
  readonly links?: TLinkDescription[];
};

class Error extends Types implements Static<ITypes, typeof Error> {
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

  setDetails(...details: (ErrorDetails | ((error: ErrorDetails) => void))[]) {
    this.details = details.map((detail) => {
      if (detail instanceof ErrorDetails) return detail;
      const errorDetail = new ErrorDetails();
      detail(errorDetail);
      return errorDetail;
    });
    return this;
  }

  setInformationLink(informationLink: string) {
    this.informationLink = informationLink;
    return this;
  }

  setLinks(...links: (LinkDescription | ((link: LinkDescription) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkDesc = new LinkDescription();
      link(linkDesc);
      return linkDesc;
    });
    return this;
  }

  static fromObject(obj: TError): Error {
    const error = new Error();
    if (obj.debug_id) error.setDebugId(obj.debug_id);
    if (obj.message) error.setMessage(obj.message);
    if (obj.name) error.setName(obj.name);
    if (obj.details) error.setDetails(...obj.details.map((detail) => ErrorDetails.fromObject(detail)));
    if (obj.information_link) error.setInformationLink(obj.information_link);
    if (obj.links) error.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    return error;
  }
}

export default Error;
