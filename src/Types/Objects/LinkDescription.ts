import { HTTPMethod } from "../Enums/HTTPMethod.js";
import Types from "../Types.js";

export type TLinkDescription = {
  href: string;
  rel: string;
  method?: keyof typeof HTTPMethod;
};

class LinkDescription extends Types {
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

  override fromObject(obj: TLinkDescription) {
    this.href = obj.href;
    this.rel = obj.rel;
    this.method = obj.method ? HTTPMethod[obj.method as keyof typeof HTTPMethod] : undefined;
    return this;
  }
}

export default LinkDescription;
