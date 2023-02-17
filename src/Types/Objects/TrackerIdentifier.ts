import Types, { ITypes, StaticImplements } from "../Types.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";

export type TTrackerIdentifier = {
  transaction_id: string;
  readonly links?: TLinkDescription[];
  tracking_number?: string;
};

class TrackerIdentifier extends Types implements StaticImplements<ITypes, typeof TrackerIdentifier> {
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

  static fromObject(obj: TTrackerIdentifier): TrackerIdentifier {
    const trackerIdentifier = new TrackerIdentifier();
    if (obj.transaction_id) trackerIdentifier.setTransactionId(obj.transaction_id);
    if (obj.links) trackerIdentifier.setLinks(obj.links.map((x) => LinkDescription.fromObject(x)));
    if (obj.tracking_number) trackerIdentifier.setTrackingNumber(obj.tracking_number);
    return trackerIdentifier;
  }
}

export default TrackerIdentifier;
