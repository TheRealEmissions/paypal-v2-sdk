import Types from "../Types.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";

export type TAcceptedResponse = {
  readonly links?: TLinkDescription[];
};

class AcceptedResponse extends Types {
  links?: LinkDescription[];
  constructor() {
    super();
  }

  setLinks(links: LinkDescription[]) {
    this.links = links;
    return this;
  }

  override fromObject(obj: TAcceptedResponse) {
    this.links = obj.links?.map((x) => new LinkDescription().fromObject(x));
    return this;
  }
}

export default AcceptedResponse;
