import { IUtility, Static, Utility, OnlySetters } from "../../Utility.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";
import { Product, TProduct } from "./Product.js";

export type TProductCollection = {
  products: TProduct[];
  total_items: number;
  total_pages: number;
  links: TLinkDescription[];
};

type ProductCollectionFields = {
  readonly products?: Product[];
  readonly totalItems?: number;
  readonly totalPages?: number;
  readonly links?: LinkDescription[];
};

export class ProductCollection extends Utility implements Static<IUtility, typeof ProductCollection> {
  private products?: Product[];
  private totalItems?: number;
  private totalPages?: number;
  private links?: LinkDescription[];

  public setProducts(...products: Product[]): OnlySetters<this>;
  public setProducts(...products: ((product: OnlySetters<Product>) => void)[]): OnlySetters<this>;
  public setProducts(...products: (Product | ((product: OnlySetters<Product>) => void))[]): OnlySetters<this> {
    this.products = products.map((product) => {
      if (product instanceof Product) return product;
      const productInstance = new Product();
      product(productInstance);
      return productInstance;
    });
    return this;
  }
  public getProducts() {
    return this.products;
  }

  public setTotalItems(totalItems: number): OnlySetters<this> {
    this.totalItems = totalItems;
    return this;
  }
  public getTotalItems() {
    return this.totalItems;
  }

  public setTotalPages(totalPages: number): OnlySetters<this> {
    this.totalPages = totalPages;
    return this;
  }
  public getTotalPages() {
    return this.totalPages;
  }

  public setLinks(...links: LinkDescription[]): OnlySetters<this>;
  public setLinks(...links: ((link: OnlySetters<LinkDescription>) => void)[]): OnlySetters<this>;
  public setLinks(...links: (LinkDescription | ((link: OnlySetters<LinkDescription>) => void))[]): OnlySetters<this> {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkInstance = new LinkDescription();
      link(linkInstance);
      return linkInstance;
    });
    return this;
  }
  public getLinks() {
    return this.links;
  }

  public override getFields<T extends ProductCollectionFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TProductCollection) {
    const productCollection = new ProductCollection();
    productCollection.setProducts(...obj.products.map((product) => Product.fromObject(product)));
    productCollection.setTotalItems(obj.total_items);
    productCollection.setTotalPages(obj.total_pages);
    productCollection.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    return productCollection;
  }
}
