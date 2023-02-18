import { HTTPMethod } from "@Types/Enums/HTTPMethod.js";
import Types, { ITypes, Static } from "@Types/Types.js";

export type TLinkDescription = {
  href: string;
  rel: string;
  method?: keyof typeof HTTPMethod;
};

class LinkDescription extends Types implements Static<ITypes, typeof LinkDescription> {
  href?: string;
  rel?: string;
  method?: HTTPMethod;
  constructor() {
    super();
  }

  setHref(href: string) {
    this.href = href;
    return this;
  }

  setRel(rel: string) {
    this.rel = rel;
    return this;
  }

  setMethod(method: HTTPMethod | ((method: typeof HTTPMethod) => HTTPMethod)) {
    if (typeof method === "function") this.method = method(HTTPMethod);
    else this.method = method;
    return this;
  }

  static fromObject(obj: TLinkDescription) {
    const linkDescription = new LinkDescription();
    if (obj.href) linkDescription.setHref(obj.href);
    if (obj.rel) linkDescription.setRel(obj.rel);
    if (obj.method) linkDescription.setMethod(HTTPMethod[obj.method]);
    return linkDescription;
  }
}

export default LinkDescription;
