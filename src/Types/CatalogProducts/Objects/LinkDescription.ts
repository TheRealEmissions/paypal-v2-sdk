import { HTTPMethod } from "../Enums/HTTPMethod.js";
import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";

export type TLinkDescription = {
  href: string;
  rel: string;
  method?: keyof typeof HTTPMethod;
};

type LinkDescriptionFields = {
  readonly href?: string;
  readonly rel?: string;
  readonly method?: HTTPMethod;
};

export class LinkDescription extends Utility implements Static<IUtility, typeof LinkDescription> {
  private href?: string;
  private rel?: string;
  private method?: HTTPMethod;

  public setHref(href: string): OnlySetters<this> {
    this.href = href;
    return this;
  }
  public getHref() {
    return this.href;
  }

  public setRel(rel: string): OnlySetters<this> {
    this.rel = rel;
    return this;
  }
  public getRel() {
    return this.rel;
  }

  public setMethod(method: HTTPMethod): OnlySetters<this>;
  public setMethod(method: (method: typeof HTTPMethod) => HTTPMethod): OnlySetters<this>;
  public setMethod(method: HTTPMethod | ((method: typeof HTTPMethod) => HTTPMethod)): OnlySetters<this> {
    if (typeof method === "function") this.method = method(HTTPMethod);
    else this.method = method;
    return this;
  }
  public getMethod() {
    return this.method;
  }

  public override getFields<T extends LinkDescriptionFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TLinkDescription) {
    const linkDescription = new LinkDescription();
    if (obj.href) linkDescription.setHref(obj.href);
    if (obj.rel) linkDescription.setRel(obj.rel);
    if (obj.method) linkDescription.setMethod(HTTPMethod[obj.method]);
    return linkDescription;
  }
}
