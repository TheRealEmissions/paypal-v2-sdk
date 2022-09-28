import { ProductType } from "./../Enums/ProductType";
import { ProductCategory } from "./../Enums/ProductCategory";
import Types from "../Types";
import LinkDescription, { TLinkDescription } from "./LinkDescription";
import PayPal from "../../PayPal";
import PatchRequest from "./PatchRequest";

export type TProduct = {
  category?: string;
  create_time?: string;
  description?: string;
  home_url?: string;
  id?: string;
  image_url?: string;
  links?: TLinkDescription[];
  name?: string;
  type?: string;
  update_time?: string;
};

class Product extends Types {
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

  PayPal?: PayPal;
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

  update(patchRequest: PatchRequest) {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, you must pass PayPal instance to the constructor");
    }
    return this.PayPal.Products.update(this, patchRequest);
  }

  get() {
    if (!this.PayPal) {
      throw new Error("To use in-built methods, you must pass PayPal instance to the constructor");
    }
    return this.PayPal.Products.get(this);
  }

  setCategory(category: ProductCategory) {
    this.category = category;
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

  setLinks(links: LinkDescription[]) {
    this.links = links;
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setType(type: ProductType) {
    this.type = type;
    return this;
  }

  setUpdateTime(updateTime: string) {
    this.updateTime = updateTime;
    return this;
  }

  override fromObject(obj: TProduct): this {
    if (obj.category) this.setCategory(ProductCategory[obj.category as keyof typeof ProductCategory]);
    if (obj.create_time) this.setCreateTime(obj.create_time);
    if (obj.description) this.setDescription(obj.description);
    if (obj.home_url) this.setHomeUrl(obj.home_url);
    if (obj.id) this.setId(obj.id);
    if (obj.image_url) this.setImageUrl(obj.image_url);
    if (obj.links) this.setLinks(obj.links.map((link) => new LinkDescription().fromObject(link)));
    if (obj.name) this.setName(obj.name);
    if (obj.type) this.setType(ProductType[obj.type as keyof typeof ProductType]);
    if (obj.update_time) this.setUpdateTime(obj.update_time);
    return this;
  }
}

export default Product;
