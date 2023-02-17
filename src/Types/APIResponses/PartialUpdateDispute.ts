import LinkDescription, { TLinkDescription } from "../Objects/LinkDescription";
import Types, { ITypes, StaticImplements } from "../Types";

export type TPartialUpdateDisputeResponse = {
  readonly links: TLinkDescription[];
};

class PartialUpdateDisputeResponse
  extends Types
  implements StaticImplements<ITypes, typeof PartialUpdateDisputeResponse>
{
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
