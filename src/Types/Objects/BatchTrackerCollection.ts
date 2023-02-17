import Types, { ITypes, StaticImplements } from "../Types.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";
import TrackerIdentifier, { TTrackerIdentifier } from "./TrackerIdentifier.js";
import Error, { TError } from "./Error.js";

export type TBatchTrackerCollection = {
  errors?: TError[];
  readonly links?: TLinkDescription[];
  tracker_identifiers?: TTrackerIdentifier[];
};

class BatchTrackerCollection extends Types implements StaticImplements<ITypes, typeof BatchTrackerCollection> {
  errors?: Error[];
  links?: LinkDescription[];
  trackerIdentifiers?: TrackerIdentifier[];
  constructor() {
    super();
  }

  setErrors(errors: Error[]) {
    this.errors = errors;
    return this;
  }

  setLinks(links: LinkDescription[]) {
    this.links = links;
    return this;
  }

  setTrackerIdentifiers(trackerIdentifiers: TrackerIdentifier[]) {
    this.trackerIdentifiers = trackerIdentifiers;
    return this;
  }

  static fromObject(obj: TBatchTrackerCollection): BatchTrackerCollection {
    const batchTrackerCollection = new BatchTrackerCollection();
    if (obj.errors) batchTrackerCollection.setErrors(obj.errors.map((error) => Error.fromObject(error)));
    if (obj.links) batchTrackerCollection.setLinks(obj.links.map((link) => LinkDescription.fromObject(link)));
    if (obj.tracker_identifiers)
      batchTrackerCollection.setTrackerIdentifiers(
        obj.tracker_identifiers.map((trackerIdentifier) => TrackerIdentifier.fromObject(trackerIdentifier))
      );
    return batchTrackerCollection;
  }
}

export default BatchTrackerCollection;
