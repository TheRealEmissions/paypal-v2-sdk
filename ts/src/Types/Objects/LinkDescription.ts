import { HTTPMethod } from "../Enums/HTTPMethod";
import PayPal from "../../PayPal";
import Types from "../Types";

class LinkDescription extends Types {
  href: string;
  rel: string;
  method: HTTPMethod;
  constructor(PayPal: PayPal) {
    super(PayPal);
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
}

export default LinkDescription;
