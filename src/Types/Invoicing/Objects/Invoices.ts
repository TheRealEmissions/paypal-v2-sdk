import { IUtility, Integer, OnlySetters, Static, Utility } from "../../Utility";
import { Invoice, TInvoice } from "./Invoice";
import { LinkDescription, TLinkDescription } from "./LinkDescription";

export type TInvoices = {
  total_pages: number;
  total_items: number;
  items: TInvoice[];
  links: TLinkDescription[];
};

type InvoicesFields = {
  readonly totalPages?: number;
  readonly totalItems?: number;
  readonly items?: Invoice[];
  readonly links?: LinkDescription[];
};

export class Invoices extends Utility implements Static<IUtility, typeof Invoices> {
  private totalPages?: number;
  private totalItems?: number;
  private items?: Invoice[];
  private links?: LinkDescription[];

  setTotalPages<N extends number>(totalPages: Integer<N>) {
    this.totalPages = totalPages;
    return this;
  }
  getTotalPages() {
    return this.totalPages;
  }

  setTotalItems<N extends number>(totalItems: Integer<N>) {
    this.totalItems = totalItems;
    return this;
  }
  getTotalItems() {
    return this.totalItems;
  }

  setItems(...items: (Invoice | ((invoice: OnlySetters<Invoice>) => void))[]) {
    this.items = items.map((item) => {
      if (item instanceof Invoice) return item;
      const itemInstance = new Invoice();
      item(itemInstance);
      return itemInstance;
    });
    return this;
  }
  getItems() {
    return this.items;
  }

  setLinks(...links: (LinkDescription | ((link: OnlySetters<LinkDescription>) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkInstance = new LinkDescription();
      link(linkInstance);
      return linkInstance;
    });
    return this;
  }
  getLinks() {
    return this.links;
  }

  public override getFields<T extends Partial<InvoicesFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TInvoices) {
    const invoices = new Invoices();
    invoices.setTotalPages(obj.total_pages);
    invoices.setTotalItems(obj.total_items);
    if (obj.items) invoices.setItems(...obj.items.map((item) => Invoice.fromObject(item)));
    if (obj.links) invoices.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    return invoices;
  }
}
