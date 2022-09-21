import PayPal from "../../PayPal";
import Types from "../Types";
import LinkDescription from "./LinkDescription";

class AcceptedResponse extends Types {
  links: LinkDescription[];
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setLinks(links: LinkDescription[]) {
    this.links = links;
    return this;
  }
}

export default AcceptedResponse;
