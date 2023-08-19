import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";

export type TProductCollectionElement = {
  create_time?: string;
  description?: string;
  id?: string;
  links?: TLinkDescription[];
  name?: string;
};

type ProductCollectionElementFields = {
  readonly createTime?: string;
  readonly description?: string;
  readonly id?: string;
  readonly links?: LinkDescription[];
  readonly name?: string;
};

export class ProductCollectionElement extends Utility implements Static<IUtility, typeof ProductCollectionElement> {
  private createTime?: string;
  private description?: string;
  private id?: string;
  private links?: LinkDescription[];
  private name?: string;

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

  public setId(id: string): OnlySetters<this> {
    this.id = id;
    return this;
  }
  public getId() {
    return this.id;
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

  public override getFields<T extends ProductCollectionElementFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TProductCollectionElement) {
    const productCollectionElement = new ProductCollectionElement();
    if (obj.create_time) productCollectionElement.setCreateTime(obj.create_time);
    if (obj.description) productCollectionElement.setDescription(obj.description);
    if (obj.id) productCollectionElement.setId(obj.id);
    if (obj.links) productCollectionElement.setLinks(...obj.links.map((x) => LinkDescription.fromObject(x)));
    if (obj.name) productCollectionElement.setName(obj.name);
    return productCollectionElement;
  }
}
