import Types, { ITypes, Static } from "../Types.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";
import { TrackerIdentifier, TTrackerIdentifier } from "./TrackerIdentifier.js";
import { Error, TError } from "./Error.js";

export type TBatchTrackerCollection = {
  errors?: TError[];
  readonly links?: TLinkDescription[];
  tracker_identifiers?: TTrackerIdentifier[];
};

export class BatchTrackerCollection extends Types implements Static<ITypes, typeof BatchTrackerCollection> {
  errors?: Error[];
  links?: LinkDescription[];
  trackerIdentifiers?: TrackerIdentifier[];

  setErrors(...errors: Error[]): this;
  setErrors(...errors: ((error: Error) => void)[]): this;
  setErrors(...errors: (Error | ((error: Error) => void))[]) {
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

  setLinks(...links: LinkDescription[]): this;
  setLinks(...links: ((links: LinkDescription) => void)[]): this;
  setLinks(...links: (LinkDescription | ((links: LinkDescription) => void))[]) {
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

  setTrackerIdentifiers(...trackerIdentifiers: TrackerIdentifier[]): this;
  setTrackerIdentifiers(...trackerIdentifiers: ((trackerIdentifiers: TrackerIdentifier) => void)[]): this;
  setTrackerIdentifiers(
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

  static fromObject(obj: TBatchTrackerCollection): BatchTrackerCollection {
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
