import { HTTPMethod } from "../Enums/HTTPMethod.js";
import Types, { ITypes, StaticImplements } from "../Types.js";

export type TLinkDescription = {
  href: string;
  rel: string;
  method?: keyof typeof HTTPMethod;
};

class LinkDescription extends Types implements StaticImplements<ITypes, typeof LinkDescription> {
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

  setMethod(method: HTTPMethod) {
    this.method = method;
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
