import Types from "../Types.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";
import TrackerIdentifier, { TTrackerIdentifier } from "./TrackerIdentifier.js";
import Error, { TError } from "./Error.js";

export type TBatchTrackerCollection = {
  errors?: TError[];
  readonly links?: TLinkDescription[];
  tracker_identifiers?: TTrackerIdentifier[];
};

class BatchTrackerCollection extends Types {
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

  override fromObject(obj: TBatchTrackerCollection): this {
    this.errors = obj.errors?.map((error) => {
      return new Error().fromObject(error);
    });
    this.links = obj.links?.map((link) => {
      return new LinkDescription().fromObject(link);
    });
    this.trackerIdentifiers = obj.tracker_identifiers?.map((trackerIdentifier) => {
      return new TrackerIdentifier().fromObject(trackerIdentifier);
    });
    return this;
  }
}

export default BatchTrackerCollection;
