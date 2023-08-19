import { IUtility, OnlySetters, Static, Utility } from "../../Utility";
import { LinkDescription, TLinkDescription } from "./LinkDescription";

export type TTrackerIdentifier = {
  transaction_id?: string;
  tracking_number?: string;
  links?: TLinkDescription[];
};

type TrackerIdentifierFields = {
  readonly transactionId?: string;
  readonly trackingNumber?: string;
  readonly links?: LinkDescription[];
};

export class TrackerIdentifier extends Utility implements Static<IUtility, typeof TrackerIdentifier> {
  private transactionId?: string;
  private trackingNumber?: string;
  private links?: LinkDescription[];

  public setTransactionId(transactionId: string): OnlySetters<this> {
    this.transactionId = transactionId;
    return this;
  }
  public getTransactionId() {
    return this.transactionId;
  }

  public setTrackingNumber(trackingNumber: string): OnlySetters<this> {
    this.trackingNumber = trackingNumber;
    return this;
  }
  public getTrackingNumber() {
    return this.trackingNumber;
  }

  public setLinks(...links: LinkDescription[]): OnlySetters<this>;
  public setLinks(...links: ((links: OnlySetters<LinkDescription>) => void)[]): OnlySetters<this>;
  public setLinks(...links: (LinkDescription | ((links: OnlySetters<LinkDescription>) => void))[]): OnlySetters<this> {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) {
        return link;
      } else {
        const linkInstance = new LinkDescription();
        link(linkInstance);
        return linkInstance;
      }
    });
    return this;
  }
  public getLinks() {
    return this.links;
  }

  public override getFields<T extends TrackerIdentifierFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TTrackerIdentifier) {
    const trackerIdentifier = new TrackerIdentifier();
    if (obj.transaction_id) trackerIdentifier.setTransactionId(obj.transaction_id);
    if (obj.tracking_number) trackerIdentifier.setTrackingNumber(obj.tracking_number);
    if (obj.links) trackerIdentifier.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    return trackerIdentifier;
  }
}
