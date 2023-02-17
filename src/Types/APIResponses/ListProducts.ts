import { TLinkDescription } from "./../Objects/LinkDescription.js";
import LinkDescription from "../Objects/LinkDescription.js";
import ProductCollectionElement, { TProductCollectionElement } from "../Objects/ProductCollectionElement.js";
import Types, { ITypes, StaticImplements } from "../Types.js";

export type TListProductsResponse = {
  readonly links: TLinkDescription[];
  readonly products: TProductCollectionElement[];
  readonly total_items: number;
  readonly total_pages: number;
};

class ListProductsResponse extends Types implements StaticImplements<ITypes, typeof ListProductsResponse> {
  readonly links: LinkDescription[];
  readonly products: ProductCollectionElement[];
  readonly totalItems?: number;
  readonly totalPages?: number;
  constructor(
    links: LinkDescription[],
    products: ProductCollectionElement[],
    totalItems?: number,
    totalPages?: number
  ) {
    super();
    this.links = links;
    this.products = products;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
  }

  static fromObject(obj: TListProductsResponse) {
    return new ListProductsResponse(
      obj.links.map((link) => LinkDescription.fromObject(link)),
      obj.products.map((product) => ProductCollectionElement.fromObject(product)),
      obj.total_items,
      obj.total_pages
    );
  }
}

export default ListProductsResponse;
