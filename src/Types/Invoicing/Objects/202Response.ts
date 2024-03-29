import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";

export type TAcceptedResponse = {
  readonly links?: TLinkDescription[];
};

type AcceptedResponseFields = {
  readonly links?: LinkDescription[];
};

export class AcceptedResponse extends Utility implements Static<IUtility, typeof AcceptedResponse> {
  private links?: LinkDescription[];

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((links: OnlySetters<LinkDescription>) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((links: OnlySetters<LinkDescription>) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) {
        return link;
      } else {
        const linkInstance = new LinkDescription();
        link(linkInstance);
        return linkInstance;
      }
    });
    return this;
  }
  public getLinks() {
    return this.links;
  }

  public override getFields<T extends AcceptedResponseFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TAcceptedResponse) {
    const acceptedResponse = new AcceptedResponse();
    if (obj.links) acceptedResponse.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));

    return acceptedResponse;
  }
}
