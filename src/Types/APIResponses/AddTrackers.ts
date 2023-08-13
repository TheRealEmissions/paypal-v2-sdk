import { TLinkDescription } from "./../Objects/LinkDescription.js";
import { Error, TError } from "../Objects/Error.js";
import { LinkDescription } from "../Objects/LinkDescription.js";
import { TrackerIdentifier, TTrackerIdentifier } from "../Objects/TrackerIdentifier.js";
import Types, { ITypes, Static } from "../Types.js";

export type TAddTrackersResponse = {
  readonly errors: TError[];
  readonly links: TLinkDescription[];
  readonly tracker_identifiers: TTrackerIdentifier[];
};

class AddTrackersResponse extends Types implements Static<ITypes, typeof AddTrackersResponse> {
  readonly errors: Error[];
  readonly links: LinkDescription[];
  readonly trackerIdentifiers: TrackerIdentifier[];
  constructor(errors: Error[], links: LinkDescription[], trackerIdentifiers: TrackerIdentifier[]) {
    super();
    this.errors = errors;
    this.links = links;
    this.trackerIdentifiers = trackerIdentifiers;
  }

  static fromObject(obj: TAddTrackersResponse): AddTrackersResponse {
    return new AddTrackersResponse(
      obj.errors.map((error) => Error.fromObject(error)),
      obj.links.map((link) => LinkDescription.fromObject(link)),
      obj.tracker_identifiers.map((trackerIdentifier) => TrackerIdentifier.fromObject(trackerIdentifier))
    );
  }
}

export default AddTrackersResponse;
