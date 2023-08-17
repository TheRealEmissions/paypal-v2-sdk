import { IUtility, Static, Utility, OnlySetters } from "../../Utility.js";
import { Dispute, TDispute } from "./Dispute.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";

export type TDisputeSearch = {
  items: TDispute[];
  links: TLinkDescription[];
};

export class DisputeSearch extends Utility implements Static<IUtility, typeof DisputeSearch> {
  private items?: Dispute[];
  private links?: LinkDescription[];

  public setItems(...items: Dispute[]): this;
  public setItems(...items: ((dispute: OnlySetters<Dispute>) => void)[]): this;
  public setItems(...items: (Dispute | ((dispute: OnlySetters<Dispute>) => void))[]) {
    this.items = items.map((item) => {
      if (item instanceof Dispute) return item;
      const itemInstance = new Dispute();
      item(itemInstance);
      return itemInstance;
    });
    return this;
  }
  public getItems() {
    return this.items;
  }

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((link: OnlySetters<LinkDescription>) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((link: OnlySetters<LinkDescription>) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkInstance = new LinkDescription();
      link(linkInstance);
      return linkInstance;
    });
    return this;
  }
  public getLinks() {
    return this.links;
  }

  public override getFields<T extends Partial<TDisputeSearch>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TDisputeSearch) {
    const disputeSearch = new DisputeSearch();
    if (obj.items) disputeSearch.setItems(...obj.items.map((item) => Dispute.fromObject(item)));
    if (obj.links) disputeSearch.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    return disputeSearch;
  }
}
