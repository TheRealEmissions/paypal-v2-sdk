import Types, { ITypes, Static } from "@Types/Types.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";

export type TAcceptedResponse = {
  readonly links?: TLinkDescription[];
};

class AcceptedResponse extends Types implements Static<ITypes, typeof AcceptedResponse> {
  links?: LinkDescription[];
  constructor() {
    super();
  }

  setLinks(...links: (((linkDescription: LinkDescription) => void) | LinkDescription)[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkDescription = new LinkDescription();
      link(linkDescription);
      return linkDescription;
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
