import Types, { ITypes, Static } from "../Types.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";
import TrackerIdentifier, { TTrackerIdentifier } from "./TrackerIdentifier.js";
import Error, { TError } from "./Error.js";

export type TBatchTrackerCollection = {
  errors?: TError[];
  readonly links?: TLinkDescription[];
  tracker_identifiers?: TTrackerIdentifier[];
};

class BatchTrackerCollection extends Types implements Static<ITypes, typeof BatchTrackerCollection> {
  errors?: Error[];
  links?: LinkDescription[];
  trackerIdentifiers?: TrackerIdentifier[];
  constructor() {
    super();
  }

  setErrors(...errors: (Error | ((error: Error) => void))[]) {
    this.errors = errors.map((error) => {
      if (error instanceof Error) return error;
      const errorObj = new Error();
      error(errorObj);
      return errorObj;
    });
    return this;
  }

  setLinks(...links: (LinkDescription | ((desc: LinkDescription) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkDesc = new LinkDescription();
      link(linkDesc);
      return linkDesc;
    });
    return this;
  }

  setTrackerIdentifiers(...trackerIdentifiers: (TrackerIdentifier | ((identifier: TrackerIdentifier) => void))[]) {
    this.trackerIdentifiers = trackerIdentifiers.map((identifier) => {
      if (identifier instanceof TrackerIdentifier) return identifier;
      const trackerIdentifier = new TrackerIdentifier();
      identifier(trackerIdentifier);
      return trackerIdentifier;
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

export default BatchTrackerCollection;
