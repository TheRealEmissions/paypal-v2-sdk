import { IUtility, OnlySetters, Static, Utility } from "../../Utility";
import { LinkDescription, TLinkDescription } from "./LinkDescription";
import { TTracker, Tracker } from "./Tracker";

export type TTrackerCollection = {
  trackers?: TTracker[];
  links?: TLinkDescription[];
};

type TrackerCollectionFields = {
  readonly trackers?: Tracker[];
  readonly links?: LinkDescription[];
};

export class TrackerCollection extends Utility implements Static<IUtility, typeof TrackerCollection> {
  private trackers?: Tracker[];
  private links?: LinkDescription[];

  public setTrackers(...trackers: Tracker[]): OnlySetters<this>;
  public setTrackers(...trackers: ((tracker: OnlySetters<Tracker>) => void)[]): OnlySetters<this>;
  public setTrackers(...trackers: (Tracker | ((tracker: OnlySetters<Tracker>) => void))[]): OnlySetters<this> {
    this.trackers = trackers.map((tracker) => {
      if (tracker instanceof Tracker) {
        return tracker;
      } else {
        const trackerInstance = new Tracker();
        tracker(trackerInstance);
        return trackerInstance;
      }
    });
    return this;
  }
  public getTrackers() {
    return this.trackers;
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

  public override getFields<T extends TrackerCollectionFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TTrackerCollection) {
    const trackerCollection = new TrackerCollection();
    if (obj.trackers) trackerCollection.setTrackers(...obj.trackers.map((tracker) => Tracker.fromObject(tracker)));
    if (obj.links) trackerCollection.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    return trackerCollection;
  }
}
