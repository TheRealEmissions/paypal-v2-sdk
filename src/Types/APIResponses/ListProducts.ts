import { TLinkDescription } from "@Types/Objects/LinkDescription.js";
import LinkDescription from "@Types/Objects/LinkDescription.js";
import ProductCollectionElement, { TProductCollectionElement } from "@Types/Objects/ProductCollectionElement.js";
import Types, { ITypes, Integer, Static } from "@Types/Types.js";

export type TListProductsResponse<N extends number, U extends number> = {
  readonly links: TLinkDescription[];
  readonly products: TProductCollectionElement[];
  readonly total_items: Integer<N>;
  readonly total_pages: Integer<U>;
};

class ListProductsResponse<N extends number, U extends number>
  extends Types
  implements Static<ITypes, typeof ListProductsResponse>
{
  readonly links: LinkDescription[];
  readonly products: ProductCollectionElement[];
  readonly totalItems?: Integer<N>;
  readonly totalPages?: Integer<U>;
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
