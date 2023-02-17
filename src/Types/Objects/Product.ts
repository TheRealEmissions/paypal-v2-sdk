import { ProductType } from "./../Enums/ProductType.js";
import { ProductCategory } from "./../Enums/ProductCategory.js";
import Types, { ITypes, Static } from "../Types.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";
import PayPal from "../../PayPal.js";
import PatchRequest from "./PatchRequest.js";

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

class Product extends Types implements Static<ITypes, typeof Product> {
  category?: ProductCategory;
  createTime?: string;
  description?: string;
  homeUrl?: string;
  id?: string;
  imageUrl?: string;
  links?: LinkDescription[];
  name?: string;
  type?: ProductType;
  updateTime?: string;

  private PayPal?: PayPal;
  constructor(PayPal?: PayPal) {
    super();
    this.PayPal = PayPal;
  }

  create(paypalRequestId?: string, prefer?: "minimal" | "representation") {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, you must pass PayPal instance to the constructor");
    }
    return this.PayPal.Products.create(this, paypalRequestId, prefer);
  }

  update(patchRequest: PatchRequest | ((patchRequest: PatchRequest) => void)) {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, you must pass PayPal instance to the constructor");
    }
    if (patchRequest instanceof PatchRequest) return this.PayPal.Products.update(this, patchRequest);
    const patch = new PatchRequest();
    patchRequest(patch);
    return this.PayPal.Products.update(this, patch);
  }

  get() {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, you must pass PayPal instance to the constructor");
    }
    return this.PayPal.Products.get(this);
  }

  setCategory(category: ProductCategory | ((category: typeof ProductCategory) => ProductCategory)) {
    if (typeof category === "function") this.category = category(ProductCategory);
    else this.category = category;
    return this;
  }

  setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }

  setDescription(description: string) {
    this.description = description;
    return this;
  }

  setHomeUrl(homeUrl: string) {
    this.homeUrl = homeUrl;
    return this;
  }

  setId(id: string) {
    this.id = id;
    return this;
  }

  setImageUrl(imageUrl: string) {
    this.imageUrl = imageUrl;
    return this;
  }

  setLinks(...links: (LinkDescription | ((link: LinkDescription) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkDesc = new LinkDescription();
      link(linkDesc);
      return linkDesc;
    });
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setType(type: ProductType | ((type: typeof ProductType) => ProductType)) {
    if (typeof type === "function") this.type = type(ProductType);
    else this.type = type;
    return this;
  }

  setUpdateTime(updateTime: string) {
    this.updateTime = updateTime;
    return this;
  }

  static fromObject(obj: TProduct): Product {
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

export default Product;
