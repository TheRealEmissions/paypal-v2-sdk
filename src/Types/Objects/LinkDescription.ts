import { HTTPMethod } from "../Enums/HTTPMethod.js";
import { Utility, IUtility, Static } from "../Utility.js";

export type TLinkDescription = {
  href: string;
  rel: string;
  method?: keyof typeof HTTPMethod;
};

export class LinkDescription extends Utility implements Static<IUtility, typeof LinkDescription> {
  private href?: string;
  private rel?: string;
  private method?: HTTPMethod;

  public setHref(href: string) {
    this.href = href;
    return this;
  }
  public getHref() {
    return this.href;
  }

  public setRel(rel: string) {
    this.rel = rel;
    return this;
  }
  public getRel() {
    return this.rel;
  }

  public setMethod(method: HTTPMethod): this;
  public setMethod(method: (method: typeof HTTPMethod) => HTTPMethod): this;
  public setMethod(method: HTTPMethod | ((method: typeof HTTPMethod) => HTTPMethod)) {
    if (typeof method === "function") this.method = method(HTTPMethod);
    else this.method = method;
    return this;
  }
  public getMethod() {
    return this.method;
  }

  public override getFields<T extends Partial<TLinkDescription>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TLinkDescription) {
    const linkDescription = new LinkDescription();
    if (obj.href) linkDescription.setHref(obj.href);
    if (obj.rel) linkDescription.setRel(obj.rel);
    if (obj.method) linkDescription.setMethod(HTTPMethod[obj.method]);
    return linkDescription;
  }
}
