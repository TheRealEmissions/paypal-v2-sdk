import { Utility, IUtility, Static } from "../Utility.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";

export type TTrackerIdentifier = {
  transaction_id: string;
  readonly links?: TLinkDescription[];
  tracking_number?: string;
};

export class TrackerIdentifier extends Utility implements Static<IUtility, typeof TrackerIdentifier> {
  private transactionId?: string;
  private links?: LinkDescription[];
  private trackingNumber?: string;

  public setTransactionId(transactionId: string) {
    this.transactionId = transactionId;
    return this;
  }
  public getTransactionId() {
    return this.transactionId;
  }

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((link: LinkDescription) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((link: LinkDescription) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkDesc = new LinkDescription();
      link(linkDesc);
      return linkDesc;
    });
    return this;
  }
  public getLinks() {
    return this.links;
  }

  public setTrackingNumber(trackingNumber: string) {
    this.trackingNumber = trackingNumber;
    return this;
  }
  public getTrackingNumber() {
    return this.trackingNumber;
  }

  public override getFields<T extends Partial<TTrackerIdentifier>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TTrackerIdentifier): TrackerIdentifier {
    const trackerIdentifier = new TrackerIdentifier();
    if (obj.transaction_id) trackerIdentifier.setTransactionId(obj.transaction_id);
    if (obj.links) trackerIdentifier.setLinks(...obj.links.map(LinkDescription.fromObject));
    if (obj.tracking_number) trackerIdentifier.setTrackingNumber(obj.tracking_number);
    return trackerIdentifier;
  }
}
