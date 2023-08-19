import { IUtility, OnlySetters, Static, Utility } from "../../Utility";
import { LinkDescription, TLinkDescription } from "./LinkDescription";
import { TTrackerIdentifier, TrackerIdentifier } from "./TrackerIdentifier";

export type TTrackerIdentifierCollection = {
  tracker_identifiers?: TTrackerIdentifier[];
  links?: TLinkDescription[];
};

type TrackerIdentifierCollectionFields = {
  readonly trackerIdentifiers?: TrackerIdentifier[];
  readonly links?: LinkDescription[];
};

export class TrackerIdentifierCollection
  extends Utility
  implements Static<IUtility, typeof TrackerIdentifierCollection>
{
  private trackerIdentifiers?: TrackerIdentifier[];
  private links?: LinkDescription[];

  public setTrackerIdentifiers(...trackerIdentifiers: TrackerIdentifier[]): OnlySetters<this>;
  public setTrackerIdentifiers(
    ...trackerIdentifiers: ((trackerIdentifier: OnlySetters<TrackerIdentifier>) => void)[]
  ): OnlySetters<this>;
  public setTrackerIdentifiers(
    ...trackerIdentifiers: (TrackerIdentifier | ((trackerIdentifier: OnlySetters<TrackerIdentifier>) => void))[]
  ): OnlySetters<this> {
    this.trackerIdentifiers = trackerIdentifiers.map((trackerIdentifier) => {
      if (trackerIdentifier instanceof TrackerIdentifier) {
        return trackerIdentifier;
      } else {
        const trackerIdentifierInstance = new TrackerIdentifier();
        trackerIdentifier(trackerIdentifierInstance);
        return trackerIdentifierInstance;
      }
    });
    return this;
  }
  public getTrackerIdentifiers() {
    return this.trackerIdentifiers;
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

  public override getFields<T extends TrackerIdentifierCollectionFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TTrackerIdentifierCollection) {
    const trackerIdentifierCollection = new TrackerIdentifierCollection();
    if (obj.tracker_identifiers)
      trackerIdentifierCollection.setTrackerIdentifiers(
        ...obj.tracker_identifiers.map((trackerIdentifier) => TrackerIdentifier.fromObject(trackerIdentifier))
      );
    if (obj.links) trackerIdentifierCollection.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    return trackerIdentifierCollection;
  }
}
