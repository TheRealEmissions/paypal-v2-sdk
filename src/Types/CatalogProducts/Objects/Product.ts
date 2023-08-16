import { Utility, IUtility, Static } from "../../Utility.js";
import PayPal from "../../../PayPal.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";
import { ProductCategory } from "../Enums/ProductCategory.js";
import { ProductType } from "../Enums/ProductType.js";
import { PatchRequest } from "./PatchRequest.js";

export type TProduct = {
  category?: keyof typeof ProductCategory;
  create_time?: string;
  description?: string;
  home_url?: string;
  id?: string;
  image_url?: string;
  links?: TLinkDescription[];
  name?: string;
  type?: keyof typeof ProductType;
  update_time?: string;
};

export class Product extends Utility implements Static<IUtility, typeof Product> {
  private category?: ProductCategory;
  private createTime?: string;
  private description?: string;
  private homeUrl?: string;
  private id?: string;
  private imageUrl?: string;
  private links?: LinkDescription[];
  private name?: string;
  private type?: ProductType;
  private updateTime?: string;

  private PayPal?: PayPal;
  constructor(PayPal?: PayPal) {
    super();
    this.PayPal = PayPal;
  }

  setPayPal(PayPal: PayPal) {
    this.PayPal = PayPal;
    return this;
  }

  public create(paypalRequestId?: string, prefer?: "minimal" | "representation") {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, you must pass PayPal instance to the constructor");
    }
    return this.PayPal.getCatalogProducts().create(this, paypalRequestId, prefer);
  }

  public update(patchRequest: PatchRequest): Promise<Product>;
  public update(patchRequest: (patchRequest: PatchRequest) => void): Promise<Product>;
  public update(patchRequest: PatchRequest | ((patchRequest: PatchRequest) => void)) {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, you must pass PayPal instance to the constructor");
    }
    if (patchRequest instanceof PatchRequest) return this.PayPal.getCatalogProducts().update(this, patchRequest);
    const patch = new PatchRequest();
    patchRequest(patch);
    return this.PayPal.getCatalogProducts().update(this, patch);
  }

  public get() {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, you must pass PayPal instance to the constructor");
    }
    return this.PayPal.getCatalogProducts().get(this);
  }

  public setCategory(category: ProductCategory): this;
  public setCategory(category: (category: typeof ProductCategory) => ProductCategory): this;
  public setCategory(category: ProductCategory | ((category: typeof ProductCategory) => ProductCategory)) {
    if (typeof category === "function") this.category = category(ProductCategory);
    else this.category = category;
    return this;
  }
  public getCategory() {
    return this.category;
  }

  public setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }
  public getCreateTime() {
    return this.createTime;
  }

  public setDescription(description: string) {
    this.description = description;
    return this;
  }
  public getDescription() {
    return this.description;
  }

  public setHomeUrl(homeUrl: string) {
    this.homeUrl = homeUrl;
    return this;
  }
  public getHomeUrl() {
    return this.homeUrl;
  }

  public setId(id: string) {
    this.id = id;
    return this;
  }
  public getId() {
    return this.id;
  }

  public setImageUrl(imageUrl: string) {
    this.imageUrl = imageUrl;
    return this;
  }
  public getImageUrl() {
    return this.imageUrl;
  }

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((link: LinkDescription) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((link: LinkDescription) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkDesc = new LinkDescription();
      link(linkDesc);
      return linkDesc;
    });
    return this;
  }
  public getLinks() {
    return this.links;
  }

  public setName(name: string) {
    this.name = name;
    return this;
  }
  public getName() {
    return this.name;
  }

  public setType(type: ProductType): this;
  public setType(type: (type: typeof ProductType) => ProductType): this;
  public setType(type: ProductType | ((type: typeof ProductType) => ProductType)) {
    if (typeof type === "function") this.type = type(ProductType);
    else this.type = type;
    return this;
  }
  public getType() {
    return this.type;
  }

  public setUpdateTime(updateTime: string) {
    this.updateTime = updateTime;
    return this;
  }
  public getUpdateTime() {
    return this.updateTime;
  }

  public override getFields<T extends TProduct>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TProduct): Product {
    const product = new Product();
    if (obj.category) product.setCategory(ProductCategory[obj.category]);
    if (obj.create_time) product.setCreateTime(obj.create_time);
    if (obj.description) product.setDescription(obj.description);
    if (obj.home_url) product.setHomeUrl(obj.home_url);
    if (obj.id) product.setId(obj.id);
    if (obj.image_url) product.setImageUrl(obj.image_url);
    if (obj.links) product.setLinks(...obj.links.map((x) => LinkDescription.fromObject(x)));
    if (obj.name) product.setName(obj.name);
    if (obj.type) product.setType(ProductType[obj.type]);
    if (obj.update_time) product.setUpdateTime(obj.update_time);
    return product;
  }
}
