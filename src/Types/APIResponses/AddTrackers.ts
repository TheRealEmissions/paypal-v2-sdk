import { TLinkDescription } from "./../Objects/LinkDescription.js";
import { Error, TError } from "../Objects/Error.js";
import { LinkDescription } from "../Objects/LinkDescription.js";
import { TrackerIdentifier, TTrackerIdentifier } from "../Objects/TrackerIdentifier.js";
import { Utility, IUtility, Static } from "../Utility.js";

export type TAddTrackersResponse = {
  readonly errors: TError[];
  readonly links: TLinkDescription[];
  readonly tracker_identifiers: TTrackerIdentifier[];
};

class AddTrackersResponse extends Utility implements Static<IUtility, typeof AddTrackersResponse> {
  private readonly errors: Error[];
  private readonly links: LinkDescription[];
  private readonly trackerIdentifiers: TrackerIdentifier[];
  constructor(errors: Error[], links: LinkDescription[], trackerIdentifiers: TrackerIdentifier[]) {
    super();
    this.errors = errors;
    this.links = links;
    this.trackerIdentifiers = trackerIdentifiers;
  }

  public getErrors() {
    return this.errors;
  }

  public getLinks() {
    return this.links;
  }

  public getTrackerIdentifiers() {
    return this.trackerIdentifiers;
  }

  public override getFields<T extends Partial<TAddTrackersResponse>>() {
    return super.getFields<T>();
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
