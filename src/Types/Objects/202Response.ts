import Types, { ITypes, Static } from "../Types.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";

export type TAcceptedResponse = {
  readonly links?: TLinkDescription[];
};

class AcceptedResponse extends Types implements Static<ITypes, typeof AcceptedResponse> {
  links?: LinkDescription[];

  setLinks(...links: LinkDescription[]): this;
  setLinks(...links: ((links: LinkDescription) => void)[]): this;
  setLinks(...links: (LinkDescription | ((links: LinkDescription) => void))[]) {
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

  static fromObject(obj: TAcceptedResponse) {
    const acceptedResponse = new AcceptedResponse();
    if (obj.links) acceptedResponse.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));

    return acceptedResponse;
  }
}

export default AcceptedResponse;
