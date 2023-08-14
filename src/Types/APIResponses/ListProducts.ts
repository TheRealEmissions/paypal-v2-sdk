import { TLinkDescription } from "./../Objects/LinkDescription.js";
import { LinkDescription } from "../Objects/LinkDescription.js";
import { ProductCollectionElement, TProductCollectionElement } from "../Objects/ProductCollectionElement.js";
import { Utility, IUtility, Integer, Static } from "../Utility.js";

export type TListProductsResponse<N extends number, U extends number> = {
  readonly links: TLinkDescription[];
  readonly products: TProductCollectionElement[];
  readonly total_items: Integer<N>;
  readonly total_pages: Integer<U>;
};

class ListProductsResponse<N extends number, U extends number>
  extends Utility
  implements Static<IUtility, typeof ListProductsResponse>
{
  private readonly links: LinkDescription[];
  private readonly products: ProductCollectionElement[];
  private readonly totalItems?: Integer<N>;
  private readonly totalPages?: Integer<U>;
  constructor(
    links: LinkDescription[],
    products: ProductCollectionElement[],
    totalItems?: Integer<N>,
    totalPages?: Integer<U>
  ) {
    super();
    this.links = links;
    this.products = products;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
  }

  public getLinks() {
    return this.links;
  }

  public getProducts() {
    return this.products;
  }

  public getTotalItems() {
    return this.totalItems;
  }

  public getTotalPages() {
    return this.totalPages;
  }

  public override getFields<T extends Partial<TListProductsResponse<N, U>>>() {
    return super.getFields<T>();
  }

  static fromObject<N extends number, U extends number>(obj: TListProductsResponse<N, U>) {
    return new ListProductsResponse(
      obj.links.map((link) => LinkDescription.fromObject(link)),
      obj.products.map((product) => ProductCollectionElement.fromObject(product)),
      obj.total_items,
      obj.total_pages
    );
  }
}

export default ListProductsResponse;
