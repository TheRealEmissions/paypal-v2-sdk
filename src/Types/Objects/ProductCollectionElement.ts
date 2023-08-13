import Types, { ITypes, Static } from "../Types.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";

export type TProductCollectionElement = {
  create_time?: string;
  description?: string;
  id?: string;
  links?: TLinkDescription[];
  name?: string;
};

export class ProductCollectionElement extends Types implements Static<ITypes, typeof ProductCollectionElement> {
  createTime?: string;
  description?: string;
  id?: string;
  links?: LinkDescription[];
  name?: string;

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

  setLinks(...links: LinkDescription[]): this;
  setLinks(...links: ((link: LinkDescription) => void)[]): this;
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

  static fromObject(obj: TProductCollectionElement) {
    const productCollectionElement = new ProductCollectionElement();
    if (obj.create_time) productCollectionElement.setCreateTime(obj.create_time);
    if (obj.description) productCollectionElement.setDescription(obj.description);
    if (obj.id) productCollectionElement.setId(obj.id);
    if (obj.links) productCollectionElement.setLinks(...obj.links.map((x) => LinkDescription.fromObject(x)));
    if (obj.name) productCollectionElement.setName(obj.name);
    return productCollectionElement;
  }
}
