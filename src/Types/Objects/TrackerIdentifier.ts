import Types, { ITypes, Static } from "../Types.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";

export type TTrackerIdentifier = {
  transaction_id: string;
  readonly links?: TLinkDescription[];
  tracking_number?: string;
};

export class TrackerIdentifier extends Types implements Static<ITypes, typeof TrackerIdentifier> {
  transactionId?: string;
  links?: LinkDescription[];
  trackingNumber?: string;

  setTransactionId(transactionId: string) {
    this.transactionId = transactionId;
    return this;
  }

  setLinks(...links: LinkDescription[]): this;
  setLinks(...links: ((link: LinkDescription) => void)[]): this;
  setLinks(...links: (LinkDescription | ((link: LinkDescription) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkDesc = new LinkDescription();
      link(linkDesc);
      return linkDesc;
    });
    return this;
  }

  setTrackingNumber(trackingNumber: string) {
    this.trackingNumber = trackingNumber;
    return this;
  }

  static fromObject(obj: TTrackerIdentifier): TrackerIdentifier {
    const trackerIdentifier = new TrackerIdentifier();
    if (obj.transaction_id) trackerIdentifier.setTransactionId(obj.transaction_id);
    if (obj.links) trackerIdentifier.setLinks(...obj.links.map(LinkDescription.fromObject));
    if (obj.tracking_number) trackerIdentifier.setTrackingNumber(obj.tracking_number);
    return trackerIdentifier;
  }
}
