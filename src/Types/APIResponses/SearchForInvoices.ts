import { Invoice, TInvoice } from "../Objects/Invoice.js";
import { LinkDescription, TLinkDescription } from "../Objects/LinkDescription.js";
import { Utility, IUtility, Integer, Static } from "../Utility.js";

export type TSearchForInvoicesResponse<N extends number, U extends number> = {
  readonly items: TInvoice[];
  readonly links: TLinkDescription[];
  readonly total_items: Integer<N>;
  readonly total_pages: Integer<U>;
};

export class SearchForInvoicesResponse<N extends number, U extends number>
  extends Utility
  implements Static<IUtility, typeof SearchForInvoicesResponse>
{
  private readonly items: Invoice[];
  private readonly links: LinkDescription[];
  private readonly totalItems: Integer<N>;
  private readonly totalPages: Integer<U>;
  constructor(items: Invoice[], links: LinkDescription[], totalItems: Integer<N>, totalPages: Integer<U>) {
    super();
    this.items = items;
    this.links = links;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
  }

  public getItems() {
    return this.items;
  }

  public getLinks() {
    return this.links;
  }

  public getTotalItems() {
    return this.totalItems;
  }

  public getTotalPages() {
    return this.totalPages;
  }

  public override getFields<T extends Partial<TSearchForInvoicesResponse<N, U>>>() {
    return super.getFields<T>();
  }

  static fromObject<N extends number, U extends number>(obj: TSearchForInvoicesResponse<N, U>) {
    return new SearchForInvoicesResponse(
      obj.items.map((item) => Invoice.fromObject(item)),
      obj.links.map((link) => LinkDescription.fromObject(link)),
      obj.total_items,
      obj.total_pages
    );
  }
}
