import { Utility, IUtility, Static } from "../Utility.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";
import { TrackerIdentifier, TTrackerIdentifier } from "./TrackerIdentifier.js";
import { Error, TError } from "./Error.js";

export type TBatchTrackerCollection = {
  errors?: TError[];
  readonly links?: TLinkDescription[];
  tracker_identifiers?: TTrackerIdentifier[];
};

export class BatchTrackerCollection extends Utility implements Static<IUtility, typeof BatchTrackerCollection> {
  private errors?: Error[];
  private links?: LinkDescription[];
  private trackerIdentifiers?: TrackerIdentifier[];

  public setErrors(...errors: Error[]): this;
  public setErrors(...errors: ((error: Error) => void)[]): this;
  public setErrors(...errors: (Error | ((error: Error) => void))[]) {
    this.errors = errors.map((error) => {
      if (error instanceof Error) {
        return error;
      } else {
        const errorInstance = new Error();
        error(errorInstance);
        return errorInstance;
      }
    });
    return this;
  }
  public getErrors() {
    return this.errors;
  }

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((links: LinkDescription) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((links: LinkDescription) => void))[]) {
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

  public setTrackerIdentifiers(...trackerIdentifiers: TrackerIdentifier[]): this;
  public setTrackerIdentifiers(...trackerIdentifiers: ((trackerIdentifiers: TrackerIdentifier) => void)[]): this;
  public setTrackerIdentifiers(
    ...trackerIdentifiers: (TrackerIdentifier | ((trackerIdentifiers: TrackerIdentifier) => void))[]
  ) {
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

  public override getFields<T extends TBatchTrackerCollection>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TBatchTrackerCollection): BatchTrackerCollection {
    const batchTrackerCollection = new BatchTrackerCollection();
    if (obj.errors) batchTrackerCollection.setErrors(...obj.errors.map((error) => Error.fromObject(error)));
    if (obj.links) batchTrackerCollection.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    if (obj.tracker_identifiers)
      batchTrackerCollection.setTrackerIdentifiers(
        ...obj.tracker_identifiers.map((trackerIdentifier) => TrackerIdentifier.fromObject(trackerIdentifier))
      );
    return batchTrackerCollection;
  }
}
