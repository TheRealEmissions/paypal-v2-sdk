import { DisputeInfo, TDisputeInfo } from "../Objects/DisputeInfo";
import { LinkDescription, TLinkDescription } from "../Objects/LinkDescription";
import { Utility, IUtility, Static } from "../Utility";

export type TListDisputesResponse = {
  readonly items: TDisputeInfo[];
  readonly links: TLinkDescription[];
};

class ListDisputesResponse extends Utility implements Static<IUtility, typeof ListDisputesResponse> {
  private readonly items: DisputeInfo[];
  private readonly links: LinkDescription[];
  constructor(items: DisputeInfo[], links: LinkDescription[]) {
    super();
    this.items = items;
    this.links = links;
  }

  public getItems() {
    return this.items;
  }

  public getLinks() {
    return this.links;
  }

  public override getFields<T extends Partial<TListDisputesResponse>>() {
    return super.getFields<T>();
  }

  static fromObject(obj: TListDisputesResponse) {
    return new ListDisputesResponse(
      obj.items.map((item) => DisputeInfo.fromObject(item)),
      obj.links.map((link) => LinkDescription.fromObject(link))
    );
  }
}

export default ListDisputesResponse;
