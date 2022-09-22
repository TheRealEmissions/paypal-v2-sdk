import Types from "../Types";
import LinkDescription, { TLinkDescription } from "./LinkDescription";

export type TTrackerIdentifier = {
  transaction_id: string;
  links?: TLinkDescription[];
  tracking_number?: string;
}

class TrackerIdentifier extends Types {
  transactionId?: string;
  links?: LinkDescription[];
  trackingNumber?: string;
  constructor() {
    super();
  }

  setTransactionId(transactionId: string) {
    this.transactionId = transactionId;
    return this;
  }

  setLinks(links: LinkDescription[]) {
    this.links = links;
    return this;
  }

  setTrackingNumber(trackingNumber: string) {
    this.trackingNumber = trackingNumber;
    return this;
  }

  override fromObject(obj: TTrackerIdentifier): this {
    this.transactionId = obj.transaction_id;
    this.links = obj.links?.map((link) => {
      return new LinkDescription().fromObject(link);
    });
    this.trackingNumber = obj.tracking_number;
    return this;
  }
}

export default TrackerIdentifier;