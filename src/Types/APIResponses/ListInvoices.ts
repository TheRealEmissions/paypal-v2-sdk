import Invoice, { TInvoice } from "@Types/Objects/Invoice.js";
import LinkDescription, { TLinkDescription } from "@Types/Objects/LinkDescription.js";
import Types, { ITypes, Integer, Static } from "@Types/Types.js";

export type TListInvoicesResponse<N extends number, U extends number> = {
  readonly items: TInvoice[];
  readonly links: TLinkDescription[];
  readonly total_items: Integer<N>;
  readonly total_pages: Integer<U>;
};

class ListInvoicesResponse<N extends number, U extends number>
  extends Types
  implements Static<ITypes, typeof ListInvoicesResponse>
{
  readonly items: Invoice[];
  readonly links: LinkDescription[];
  readonly totalItems: Integer<N>;
  readonly totalPages: Integer<U>;
  constructor(items: Invoice[], links: LinkDescription[], totalItems: Integer<N>, totalPages: Integer<U>) {
    super();
    this.items = items;
    this.links = links;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
  }

  static fromObject<N extends number, U extends number>(obj: TListInvoicesResponse<N, U>) {
    return new ListInvoicesResponse(
      obj.items.map((item) => Invoice.fromObject(item)),
      obj.links.map((link) => LinkDescription.fromObject(link)),
      obj.total_items,
      obj.total_pages
    );
  }
}

export default ListInvoicesResponse;
