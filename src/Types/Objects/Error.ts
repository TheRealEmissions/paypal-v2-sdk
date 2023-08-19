import { Utility, IUtility, Static } from "../Utility.js";
import { ErrorDetails, TErrorDetails } from "./ErrorDetails.js";
import { LinkDescription, TLinkDescription } from "../AddTracking/Objects/LinkDescription.js";

export type TError = {
  debug_id: string;
  message: string;
  name: string;
  details?: TErrorDetails[];
  readonly information_link?: string;
  readonly links?: TLinkDescription[];
};

type ErrorFields = {
  readonly debugId?: string;
  readonly message?: string;
  readonly name?: string;
  readonly details?: ErrorDetails[];
  readonly informationLink?: string;
  readonly links?: LinkDescription[];
};

export class PayPalError extends Utility implements Static<IUtility, typeof PayPalError> {
  private debugId?: string;
  private message?: string;
  private name?: string;
  private details?: ErrorDetails[];
  private informationLink?: string;
  private links?: LinkDescription[];

  public setDebugId(debugId: string) {
    this.debugId = debugId;
    return this;
  }
  public getDebugId() {
    return this.debugId;
  }

  public setMessage(message: string) {
    this.message = message;
    return this;
  }
  public getMessage() {
    return this.message;
  }

  public setName(name: string) {
    this.name = name;
    return this;
  }
  public getName() {
    return this.name;
  }

  public setDetails(...details: ErrorDetails[]): this;
  public setDetails(...details: ((detail: ErrorDetails) => void)[]): this;
  public setDetails(...details: (ErrorDetails | ((detail: ErrorDetails) => void))[]) {
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
  public getDetails() {
    return this.details;
  }

  public setInformationLink(informationLink: string) {
    this.informationLink = informationLink;
    return this;
  }
  public getInformationLink() {
    return this.informationLink;
  }

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((link: LinkDescription) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((link: LinkDescription) => void))[]) {
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
  public getLinks() {
    return this.links;
  }

  public override getFields<T extends Partial<ErrorFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TError): PayPalError {
    const error = new PayPalError();
    if (obj.debug_id) error.setDebugId(obj.debug_id);
    if (obj.message) error.setMessage(obj.message);
    if (obj.name) error.setName(obj.name);
    if (obj.details) error.setDetails(...obj.details.map((detail) => ErrorDetails.fromObject(detail)));
    if (obj.information_link) error.setInformationLink(obj.information_link);
    if (obj.links) error.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    return error;
  }
}
