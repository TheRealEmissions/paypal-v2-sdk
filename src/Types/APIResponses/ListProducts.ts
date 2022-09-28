import { TLinkDescription } from "./../Objects/LinkDescription";
import LinkDescription from "../Objects/LinkDescription";
import ProductCollectionElement, { TProductCollectionElement } from "../Objects/ProductCollectionElement";
import TypeResponse from "./TypeResponse";

export type TListProductsResponse = {
  readonly links: TLinkDescription[];
  readonly products: TProductCollectionElement[];
  readonly total_items: number;
  readonly total_pages: number;
};

class ListProductsResponse extends TypeResponse {
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
}

export default ListProductsResponse;
