import { TLinkDescription } from "./../Objects/LinkDescription.js";
import { TError } from "./../Objects/Error.js";
import TypeResponse from "./TypeResponse.js";
import Error from "../Objects/Error.js";
import LinkDescription from "../Objects/LinkDescription.js";
import TrackerIdentifier, { TTrackerIdentifier } from "../Objects/TrackerIdentifier.js";

export type TAddTrackersResponse = {
  readonly errors: TError[];
  readonly links: TLinkDescription[];
  readonly tracker_identifiers: TTrackerIdentifier[];
};

class AddTrackersResponse extends TypeResponse {
  readonly errors: Error[];
  readonly links: LinkDescription[];
  readonly trackerIdentifiers: TrackerIdentifier[];
  constructor(errors: Error[], links: LinkDescription[], trackerIdentifiers: TrackerIdentifier[]) {
    super();
    this.errors = errors;
    this.links = links;
    this.trackerIdentifiers = trackerIdentifiers;
  }
}

export default AddTrackersResponse;
