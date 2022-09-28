import Invoice, { TInvoice } from "../Objects/Invoice";
import LinkDescription, { TLinkDescription } from "../Objects/LinkDescription";
import TypeResponse from "./TypeResponse";

export type TListInvoicesResponse = {
  readonly items: TInvoice[];
  readonly links: TLinkDescription[];
  readonly total_items: number;
  readonly total_pages: number;
};

class ListInvoicesResponse extends TypeResponse {
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
}

export default ListInvoicesResponse;
