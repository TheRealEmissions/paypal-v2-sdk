import DisputeInfo, { TDisputeInfo } from "../Objects/DisputeInfo";
import LinkDescription, { TLinkDescription } from "../Objects/LinkDescription";
import Types, { ITypes, Static } from "../Types";

export type TListDisputesResponse = {
  readonly items: TDisputeInfo[];
  readonly links: TLinkDescription[];
};

class ListDisputesResponse extends Types implements Static<ITypes, typeof ListDisputesResponse> {
  items!: DisputeInfo[];
  links!: LinkDescription[];
  constructor(items: DisputeInfo[], links: LinkDescription[]) {
    super();
    this.items = items;
    this.links = links;
  }

  static fromObject(obj: TListDisputesResponse) {
    return new ListDisputesResponse(
      obj.items.map((item) => DisputeInfo.fromObject(item)),
      obj.links.map((link) => LinkDescription.fromObject(link))
    );
  }
}

export default ListDisputesResponse;
