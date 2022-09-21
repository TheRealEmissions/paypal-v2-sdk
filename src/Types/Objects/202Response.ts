import Types from "../Types";
import LinkDescription, { TLinkDescription } from "./LinkDescription";

type TAcceptedResponse = {
  links: TLinkDescription[];
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
    this.links = obj.links.map((x) => new LinkDescription().fromObject(x));
    return this;
  }
}

export default AcceptedResponse;
