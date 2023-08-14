import { TTracker } from "./../Types/Objects/Tracker.js";
import PayPal from "../PayPal.js";
import { Tracker } from "../Types/Objects/Tracker.js";
import { LinkDescription, TLinkDescription } from "../Types/Objects/LinkDescription.js";
import { TrackerUpdateOrCancelError } from "../Errors/AddTracking/TrackerUpdateOrCancelError.js";
import { BatchTrackerCollection, TBatchTrackerCollection } from "../Types/Objects/BatchTrackerCollection.js";

export class AddTracking {
  protected PayPal: PayPal;
  constructor(PayPal: PayPal) {
    this.PayPal = PayPal;
  }

  public async listInformation(transactionId: string, trackingNumber?: string) {
    const response = await this.PayPal.getAPI().get<TTracker>("/v1/shipping/trackers", {
      params: {
        transaction_id: transactionId,
        tracking_number: trackingNumber,
      },
    });
    return Tracker.fromObject(response.data);
  }

  public async addMany(trackers: Tracker[]): Promise<BatchTrackerCollection>;
  public async addMany(trackers: ((tracker: Tracker) => void)[]): Promise<BatchTrackerCollection>;
  public async addMany(trackers: (Tracker | ((tracker: Tracker) => void))[]) {
    const trackerInstances = trackers.map((tracker) => {
      if (tracker instanceof Tracker) return tracker;
      const trackerInstance = new Tracker();
      tracker(trackerInstance);
      return trackerInstance;
    });
    const response = await this.PayPal.getAPI().post<TBatchTrackerCollection>("/v1/shipping/trackers-batch", {
      trackers: trackerInstances.map((tracker) => tracker.toAttributeObject<TTracker>()),
    });
    if (response.status !== 201) throw new Error("Failed to add tracking information");
    return BatchTrackerCollection.fromObject(response.data);
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

  public async add(trackers: Tracker[], links: LinkDescription[]): Promise<BatchTrackerCollection>;
  public async add(trackers: Tracker[], links: ((link: LinkDescription) => void)[]): Promise<BatchTrackerCollection>;
  public async add(trackers: ((tracker: Tracker) => void)[], links: LinkDescription[]): Promise<BatchTrackerCollection>;
  public async add(
    trackers: ((tracker: Tracker) => void)[],
    links: ((link: LinkDescription) => void)[]
  ): Promise<BatchTrackerCollection>;
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
    const response = await this.PayPal.getAPI().post<TBatchTrackerCollection>("/v1/shipping/trackers", {
      trackers: trackerInstances.map((tracker) => tracker.toAttributeObject<TTracker>()),
      links: linkInstances.map((link) => link.toAttributeObject<TLinkDescription>()),
    });
    return BatchTrackerCollection.fromObject(response.data);
  }
}
