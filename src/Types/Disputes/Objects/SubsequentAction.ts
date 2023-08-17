import { IUtility, Static, Utility, OnlySetters } from "../../Utility";
import { LinkDescription, TLinkDescription } from "./LinkDescription";

export type TSubsequentAction = {
  links: TLinkDescription[];
};

export class SubsequentAction extends Utility implements Static<IUtility, typeof SubsequentAction> {
  private links?: LinkDescription[];

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((link: OnlySetters<LinkDescription>) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((link: OnlySetters<LinkDescription>) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) {
        return link;
      } else {
        const newLink = new LinkDescription();
        link(newLink);
        return newLink;
      }
    });
    return this;
  }
  public getLinks() {
    return this.links;
  }

  public override getFields<T extends Partial<TSubsequentAction>>() {
    return super.getFields<T>();
  }

  static fromObject(obj: TSubsequentAction) {
    const subsequentAction = new SubsequentAction();
    subsequentAction.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    return subsequentAction;
  }
}
