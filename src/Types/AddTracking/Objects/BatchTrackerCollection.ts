import { OnlySetters } from "./../../Utility.js";
import { PayPalError, TError } from "../../Objects/Error.js";
import { Utility, IUtility, Static } from "../../Utility.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";
import { TTrackerIdentifier, TrackerIdentifier } from "./TrackerIdentifier.js";

export type TBatchTrackerCollection = {
  errors?: TError[];
  readonly links?: TLinkDescription[];
  tracker_identifiers?: TTrackerIdentifier[];
};

export class BatchTrackerCollection extends Utility implements Static<IUtility, typeof BatchTrackerCollection> {
  private errors?: PayPalError[];
  private links?: LinkDescription[];
  private trackerIdentifiers?: TrackerIdentifier[];

  public setErrors(...errors: PayPalError[]): this;
  public setErrors(...errors: ((error: OnlySetters<PayPalError>) => void)[]): this;
  public setErrors(...errors: (PayPalError | ((error: OnlySetters<PayPalError>) => void))[]) {
    this.errors = errors.map((error) => {
      if (error instanceof PayPalError) {
        return error;
      } else {
        const errorInstance = new PayPalError();
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
  public setLinks(...links: ((links: OnlySetters<LinkDescription>) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((links: OnlySetters<LinkDescription>) => void))[]) {
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
  public setTrackerIdentifiers(
    ...trackerIdentifiers: ((trackerIdentifiers: OnlySetters<TrackerIdentifier>) => void)[]
  ): this;
  public setTrackerIdentifiers(
    ...trackerIdentifiers: (TrackerIdentifier | ((trackerIdentifiers: OnlySetters<TrackerIdentifier>) => void))[]
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
    if (obj.errors) batchTrackerCollection.setErrors(...obj.errors.map((error) => PayPalError.fromObject(error)));
    if (obj.links) batchTrackerCollection.setLinks(...obj.links.map((link) => LinkDescription.fromObject(link)));
    if (obj.tracker_identifiers)
      batchTrackerCollection.setTrackerIdentifiers(
        ...obj.tracker_identifiers.map((trackerIdentifier) => TrackerIdentifier.fromObject(trackerIdentifier))
      );
    return batchTrackerCollection;
  }
}
