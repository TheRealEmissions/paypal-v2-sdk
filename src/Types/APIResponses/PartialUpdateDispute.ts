import { LinkDescription, TLinkDescription } from "../Objects/LinkDescription";
import { Utility, IUtility, Static } from "../Utility";

export type TPartialUpdateDisputeResponse = {
  readonly links: TLinkDescription[];
};

class PartialUpdateDisputeResponse extends Utility implements Static<IUtility, typeof PartialUpdateDisputeResponse> {
  private readonly links!: LinkDescription[];
  constructor(links?: LinkDescription[]) {
    super();
    if (links) this.links = links;
  }

  public getLinks() {
    return this.links;
  }

  public override getFields<T extends Partial<TPartialUpdateDisputeResponse>>() {
    return super.getFields<T>();
  }

  static fromObject(obj: TPartialUpdateDisputeResponse) {
    return new PartialUpdateDisputeResponse(obj.links.map((link) => LinkDescription.fromObject(link)));
  }
}

export default PartialUpdateDisputeResponse;
