import { IUtility, OnlySetters, Static, Utility } from "../../Utility";
import { LinkDescription, TLinkDescription } from "./LinkDescription";
import { TTracker, Tracker } from "./Tracker";

export type TTrackerCollection = {
  trackers?: TTracker[];
  links?: TLinkDescription[];
};

export class TrackerCollection extends Utility implements Static<IUtility, typeof TrackerCollection> {
  private trackers?: Tracker[];
  private links?: LinkDescription[];

  public setTrackers(...trackers: Tracker[]): this;
  public setTrackers(...trackers: ((tracker: OnlySetters<Tracker>) => void)[]): this;
  public setTrackers(...trackers: (Tracker | ((tracker: OnlySetters<Tracker>) => void))[]) {
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

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((links: OnlySetters<LinkDescription>) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((links: OnlySetters<LinkDescription>) => void))[]) {
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

  public override getFields<T extends Partial<TTrackerCollection>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TTrackerCollection) {
    const trackerCollection = new TrackerCollection();
    if (obj.trackers) trackerCollection.setTrackers(...obj.trackers.map((tracker) => Tracker.fromObject(tracker)));
    if (obj.links) trackerCollection.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    return trackerCollection;
  }
}
