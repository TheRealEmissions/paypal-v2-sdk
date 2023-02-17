import LinkDescription, { TLinkDescription } from "../Objects/LinkDescription";
import Types, { ITypes, Static } from "../Types";

export type TPartialUpdateDisputeResponse = {
  readonly links: TLinkDescription[];
};

class PartialUpdateDisputeResponse extends Types implements Static<ITypes, typeof PartialUpdateDisputeResponse> {
  links!: LinkDescription[];
  constructor(links?: LinkDescription[]) {
    super();
    if (links) this.links = links;
  }

  static fromObject(obj: TPartialUpdateDisputeResponse) {
    return new PartialUpdateDisputeResponse(obj.links.map((link) => LinkDescription.fromObject(link)));
  }
}

export default PartialUpdateDisputeResponse;
