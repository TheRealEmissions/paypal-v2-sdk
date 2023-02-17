import Invoice, { TInvoice } from "../Objects/Invoice.js";
import LinkDescription, { TLinkDescription } from "../Objects/LinkDescription.js";
import Types, { ITypes, Static } from "../Types.js";

export type TSearchForInvoicesResponse = {
  readonly items: TInvoice[];
  readonly links: TLinkDescription[];
  readonly total_items: number;
  readonly total_pages: number;
};

class SearchForInvoicesResponse extends Types implements Static<ITypes, typeof SearchForInvoicesResponse> {
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

  static fromObject(obj: TSearchForInvoicesResponse) {
    return new SearchForInvoicesResponse(
      obj.items.map((item) => Invoice.fromObject(item)),
      obj.links.map((link) => LinkDescription.fromObject(link)),
      obj.total_items,
      obj.total_pages
    );
  }
}

export default SearchForInvoicesResponse;
