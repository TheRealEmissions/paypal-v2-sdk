import DisputeInfo, { TDisputeInfo } from "../Objects/DisputeInfo";
import LinkDescription, { TLinkDescription } from "../Objects/LinkDescription";
import TypeResponse from "./TypeResponse";

export type TListDisputesResponse = {
  readonly items: TDisputeInfo[];
  readonly links: TLinkDescription[];
};

class ListDisputesResponse extends TypeResponse {
  items!: DisputeInfo[];
  links!: LinkDescription[];
  constructor(items?: DisputeInfo[], links?: LinkDescription[]) {
    super();
    if (items) this.items = items;
    if (links) this.links = links;
  }

  override fromObject(obj: TListDisputesResponse) {
    this.items = obj.items.map((item: TDisputeInfo) => new DisputeInfo().fromObject(item));
    this.links = obj.links.map((link: TLinkDescription) => new LinkDescription().fromObject(link));
    return this;
  }
}

export default ListDisputesResponse;
