import Invoice, { TInvoice } from "../Objects/Invoice.js";
import LinkDescription, { TLinkDescription } from "../Objects/LinkDescription.js";
import Types, { ITypes, StaticImplements } from "../Types.js";

export type TListInvoicesResponse = {
  readonly items: TInvoice[];
  readonly links: TLinkDescription[];
  readonly total_items: number;
  readonly total_pages: number;
};

class ListInvoicesResponse extends Types implements StaticImplements<ITypes, typeof ListInvoicesResponse> {
  readonly items: Invoice[];
  readonly links: LinkDescription[];
  readonly totalItems: number;
  readonly totalPages: number;
  constructor(items: Invoice[], links: LinkDescription[], totalItems: number, totalPages: number) {
    super();
    this.items = items;
    this.links = links;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
  }

  static fromObject(obj: TListInvoicesResponse) {
    return new ListInvoicesResponse(
      obj.items.map((item) => Invoice.fromObject(item)),
      obj.links.map((link) => LinkDescription.fromObject(link)),
      obj.total_items,
      obj.total_pages
    );
  }
}

export default ListInvoicesResponse;
