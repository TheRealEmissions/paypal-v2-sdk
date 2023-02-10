import LinkDescription, { TLinkDescription } from "../Objects/LinkDescription";
import TypeResponse from "./TypeResponse";

export type TPartialUpdateDisputeResponse = {
  readonly links: TLinkDescription[];
};

class PartialUpdateDisputeResponse extends TypeResponse {
  links!: LinkDescription[];
  constructor(links?: LinkDescription[]) {
    super();
    if (links) this.links = links;
  }

  override fromObject(obj: TPartialUpdateDisputeResponse) {
    this.links = obj.links.map((link: TLinkDescription) => new LinkDescription().fromObject(link));
    return this;
  }
}

export default PartialUpdateDisputeResponse;
