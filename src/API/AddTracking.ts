import AddTrackersResponse, { TAddTrackersResponse } from "./../Types/APIResponses/AddTrackers.js";
import { TTracker } from "./../Types/Objects/Tracker.js";
import PayPal from "../PayPal.js";
import { Tracker } from "../Types/Objects/Tracker.js";
import { LinkDescription, TLinkDescription } from "../Types/Objects/LinkDescription.js";
import { TrackerIdentifier } from "../Types/Objects/TrackerIdentifier.js";
import { Error as PayPalError } from "../Types/Objects/Error.js";
import TrackerUpdateOrCancelError from "../Errors/AddTracking/TrackerUpdateOrCancelError.js";

export class AddTracking {
  protected PayPal: PayPal;
  constructor(PayPal: PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @param transactionIdTrackingNumber
   * @param tracker
   * @returns {Promise<Tracker>}
   */
  public async updateOrCancel(transactionIdTrackingNumber: string, tracker: Tracker): Promise<Tracker>;
  public async updateOrCancel(
    transactionIdTrackingNumber: string,
    tracker: (tracker: Tracker) => void
  ): Promise<Tracker>;
  public async updateOrCancel(
    transactionIdTrackingNumber: string,
    tracker: Tracker | ((tracker: Tracker) => void)
  ): Promise<Tracker> {
    const trackerInstance = tracker instanceof Tracker ? tracker : new Tracker();
    if (typeof tracker === "function") tracker(trackerInstance);
    const response = await this.PayPal.getAPI().put(
      `/v1/shipping/trackers/${transactionIdTrackingNumber}`,
      trackerInstance.toJson<TTracker>()
    );
    const SUCCESS_RESPONSE = 204;
    if (response.status !== SUCCESS_RESPONSE) {
      throw new TrackerUpdateOrCancelError("Failed to update or cancel tracking", response.data);
    }
    return this.get(transactionIdTrackingNumber);
  }

  public async get(tracker: Tracker): Promise<Tracker>;
  public async get(tracker: string): Promise<Tracker>;
  public async get(tracker: (tracker: Tracker) => void): Promise<Tracker>;
  public async get(
    trackerOrTransactionIdTrackingNumber: Tracker | string | ((tracker: Tracker) => void)
  ): Promise<Tracker> {
    let transactionIdTrackingNumber: string | undefined;
    if (typeof trackerOrTransactionIdTrackingNumber === "string") {
      transactionIdTrackingNumber = trackerOrTransactionIdTrackingNumber;
    } else if (trackerOrTransactionIdTrackingNumber instanceof Tracker) {
      transactionIdTrackingNumber = trackerOrTransactionIdTrackingNumber.getTransactionId();
    } else {
      const tracker = new Tracker();
      trackerOrTransactionIdTrackingNumber(tracker);
      transactionIdTrackingNumber = tracker.getTransactionId();
    }
    if (!transactionIdTrackingNumber) throw new Error("Transaction ID or Tracking Number is required");
    const response = await this.PayPal.getAPI().get<TTracker>(`/v1/shipping/trackers/${transactionIdTrackingNumber}`);
    return Tracker.fromObject(response.data);
  }

  public async add(trackers: Tracker[], links: LinkDescription[]): Promise<AddTrackersResponse>;
  public async add(trackers: Tracker[], links: ((link: LinkDescription) => void)[]): Promise<AddTrackersResponse>;
  public async add(trackers: ((tracker: Tracker) => void)[], links: LinkDescription[]): Promise<AddTrackersResponse>;
  public async add(
    trackers: ((tracker: Tracker) => void)[],
    links: ((link: LinkDescription) => void)[]
  ): Promise<AddTrackersResponse>;
  public async add(
    trackers: (Tracker | ((tracker: Tracker) => void))[],
    links: (LinkDescription | ((link: LinkDescription) => void))[]
  ) {
    const trackerInstances = trackers.map((tracker) => {
      if (tracker instanceof Tracker) return tracker;
      const trackerInstance = new Tracker();
      tracker(trackerInstance);
      return trackerInstance;
    });
    const linkInstances = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkInstance = new LinkDescription();
      link(linkInstance);
      return linkInstance;
    });
    const response = await this.PayPal.getAPI().post<TAddTrackersResponse>("/v1/shipping/trackers", {
      trackers: trackerInstances.map((tracker) => tracker.toAttributeObject<TTracker>()),
      links: linkInstances.map((link) => link.toAttributeObject<TLinkDescription>()),
    });
    return new AddTrackersResponse(
      response.data.errors.map((x) => PayPalError.fromObject(x)),
      response.data.links.map((x) => LinkDescription.fromObject(x)),
      response.data.tracker_identifiers.map((x) => TrackerIdentifier.fromObject(x))
    );
  }
}
