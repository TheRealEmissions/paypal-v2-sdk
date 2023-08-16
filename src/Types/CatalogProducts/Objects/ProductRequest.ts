import { IUtility, Static, Utility } from "../../Utility";
import { ProductCategory } from "../Enums/ProductCategory";
import { ProductType } from "../Enums/ProductType";

export type TProductRequest = {
  id?: string;
  name: string;
  description?: string;
  type: keyof typeof ProductType;
  category?: keyof typeof ProductCategory;
  image_url?: string;
  home_url?: string;
};

export class ProductRequest extends Utility implements Static<IUtility, typeof ProductRequest> {
  private id?: string;
  private name!: string;
  private description?: string;
  private type!: ProductType;
  private category?: ProductCategory;
  private imageUrl?: string;
  private homeUrl?: string;

  public setId(id: string) {
    this.id = id;
    return this;
  }
  public getId() {
    return this.id;
  }

  public setName(name: string) {
    this.name = name;
    return this;
  }
  public getName() {
    return this.name;
  }

  public setDescription(description: string) {
    this.description = description;
    return this;
  }
  public getDescription() {
    return this.description;
  }

  public setType(type: ProductType): this;
  public setType(type: (type: typeof ProductType) => ProductType): this;
  public setType(type: ProductType | ((type: typeof ProductType) => ProductType)) {
    if (typeof type === "function") {
      this.type = type(ProductType);
    } else {
      this.type = type;
    }
    return this;
  }
  public getType() {
    return this.type;
  }

  public setCategory(category: ProductCategory): this;
  public setCategory(category: (category: typeof ProductCategory) => ProductCategory): this;
  public setCategory(category: ProductCategory | ((category: typeof ProductCategory) => ProductCategory)) {
    if (typeof category === "function") {
      this.category = category(ProductCategory);
    } else {
      this.category = category;
    }
    return this;
  }
  public getCategory() {
    return this.category;
  }

  public setImageUrl(imageUrl: string) {
    this.imageUrl = imageUrl;
    return this;
  }
  public getImageUrl() {
    return this.imageUrl;
  }

  public setHomeUrl(homeUrl: string) {
    this.homeUrl = homeUrl;
    return this;
  }
  public getHomeUrl() {
    return this.homeUrl;
  }

  public override getFields<T extends Partial<TProductRequest>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TProductRequest) {
    const productRequest = new ProductRequest();
    if (obj.id) productRequest.setId(obj.id);
    if (obj.name) productRequest.setName(obj.name);
    if (obj.description) productRequest.setDescription(obj.description);
    if (obj.type) productRequest.setType(ProductType[obj.type]);
    if (obj.category) productRequest.setCategory(ProductCategory[obj.category]);
    if (obj.image_url) productRequest.setImageUrl(obj.image_url);
    if (obj.home_url) productRequest.setHomeUrl(obj.home_url);
    return productRequest;
  }
}
