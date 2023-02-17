import Types, { ITypes, Static } from "../Types.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";

export type TAcceptedResponse = {
  readonly links?: TLinkDescription[];
};

class AcceptedResponse extends Types implements Static<ITypes, typeof AcceptedResponse> {
  links?: LinkDescription[];
  constructor() {
    super();
  }

  setLinks(links: LinkDescription[]) {
    this.links = links;
    return this;
  }

  static fromObject(obj: TAcceptedResponse) {
    const acceptedResponse = new AcceptedResponse();
    if (obj.links) acceptedResponse.setLinks(obj.links.map((link) => LinkDescription.fromObject(link)));
    return acceptedResponse;
  }
}

export default AcceptedResponse;
