import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
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

type ProductFields = {
  readonly category?: ProductCategory;
  readonly createTime?: string;
  readonly description?: string;
  readonly homeUrl?: string;
  readonly id?: string;
  readonly imageUrl?: string;
  readonly links?: LinkDescription[];
  readonly name?: string;
  readonly type?: ProductType;
  readonly updateTime?: string;
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
  public update(patchRequest: (patchRequest: OnlySetters<PatchRequest>) => void): Promise<Product>;
  public update(patchRequest: PatchRequest | ((patchRequest: OnlySetters<PatchRequest>) => void)) {
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

  public setCategory(category: ProductCategory): OnlySetters<this>;
  public setCategory(category: (category: typeof ProductCategory) => ProductCategory): OnlySetters<this>;
  public setCategory(
    category: ProductCategory | ((category: typeof ProductCategory) => ProductCategory)
  ): OnlySetters<this> {
    if (typeof category === "function") this.category = category(ProductCategory);
    else this.category = category;
    return this;
  }
  public getCategory() {
    return this.category;
  }

  public setCreateTime(createTime: string): OnlySetters<this> {
    this.createTime = createTime;
    return this;
  }
  public getCreateTime() {
    return this.createTime;
  }

  public setDescription(description: string): OnlySetters<this> {
    this.description = description;
    return this;
  }
  public getDescription() {
    return this.description;
  }

  public setHomeUrl(homeUrl: string): OnlySetters<this> {
    this.homeUrl = homeUrl;
    return this;
  }
  public getHomeUrl() {
    return this.homeUrl;
  }

  public setId(id: string): OnlySetters<this> {
    this.id = id;
    return this;
  }
  public getId() {
    return this.id;
  }

  public setImageUrl(imageUrl: string): OnlySetters<this> {
    this.imageUrl = imageUrl;
    return this;
  }
  public getImageUrl() {
    return this.imageUrl;
  }

  public setLinks(...links: LinkDescription[]): OnlySetters<this>;
  public setLinks(...links: ((link: OnlySetters<LinkDescription>) => void)[]): OnlySetters<this>;
  public setLinks(...links: (LinkDescription | ((link: OnlySetters<LinkDescription>) => void))[]): OnlySetters<this> {
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

  public setName(name: string): OnlySetters<this> {
    this.name = name;
    return this;
  }
  public getName() {
    return this.name;
  }

  public setType(type: ProductType): OnlySetters<this>;
  public setType(type: (type: typeof ProductType) => ProductType): OnlySetters<this>;
  public setType(type: ProductType | ((type: typeof ProductType) => ProductType)): OnlySetters<this> {
    if (typeof type === "function") this.type = type(ProductType);
    else this.type = type;
    return this;
  }
  public getType() {
    return this.type;
  }

  public setUpdateTime(updateTime: string): OnlySetters<this> {
    this.updateTime = updateTime;
    return this;
  }
  public getUpdateTime() {
    return this.updateTime;
  }

  public override getFields<T extends ProductFields>() {
    return super._getFields<T>();
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
