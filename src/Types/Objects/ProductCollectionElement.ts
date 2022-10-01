import Types from "../Types.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";

export type TProductCollectionElement = {
  create_time?: string;
  description?: string;
  id?: string;
  links?: TLinkDescription[];
  name?: string;
};

class ProductCollectionElement extends Types {
  createTime?: string;
  description?: string;
  id?: string;
  links?: LinkDescription[];
  name?: string;
  constructor() {
    super();
  }

  setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }

  setDescription(description: string) {
    this.description = description;
    return this;
  }

  setId(id: string) {
    this.id = id;
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

  override fromObject(obj: TProductCollectionElement) {
    this.createTime = obj.create_time;
    this.description = obj.description;
    this.id = obj.id;
    this.links = obj.links?.map((link) => new LinkDescription().fromObject(link));
    this.name = obj.name;
    return this;
  }
}

export default ProductCollectionElement;
