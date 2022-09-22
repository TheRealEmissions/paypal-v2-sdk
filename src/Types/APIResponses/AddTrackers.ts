import { TLinkDescription } from "./../Objects/LinkDescription";
import { TError } from "./../Objects/Error";
import TypeResponse from "./TypeResponse";
import Error from "../Objects/Error";
import LinkDescription from "../Objects/LinkDescription";
import TrackerIdentifier, { TTrackerIdentifier } from "../Objects/TrackerIdentifier";

export type TAddTrackersResponse = {
  errors: TError[];
  links: TLinkDescription[];
  tracker_identifiers: TTrackerIdentifier[];
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
