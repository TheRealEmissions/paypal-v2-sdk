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

  setDetails(...details: ErrorDetails[]): this;
  setDetails(...details: ((detail: ErrorDetails) => void)[]): this;
  setDetails(...details: (ErrorDetails | ((detail: ErrorDetails) => void))[]) {
    this.details = details.map((detail) => {
      if (detail instanceof ErrorDetails) {
        return detail;
      } else {
        const detailInstance = new ErrorDetails();
        detail(detailInstance);
        return detailInstance;
      }
    });
    return this;
  }

  setInformationLink(informationLink: string) {
    this.informationLink = informationLink;
    return this;
  }

  setLinks(...links: LinkDescription[]): this;
  setLinks(...links: ((link: LinkDescription) => void)[]): this;
  setLinks(...links: (LinkDescription | ((link: LinkDescription) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) {
        return link;
      } else {
        const linkInstance = new LinkDescription();
        link(linkInstance);
        return linkInstance;
      }
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
