import AddTrackersResponse, { TAddTrackersResponse } from "./../Types/APIResponses/AddTrackers.js";
import { TTracker } from "./../Types/Objects/Tracker.js";
import PayPal from "../PayPal.js";
import Tracker from "../Types/Objects/Tracker.js";
import LinkDescription, { TLinkDescription } from "../Types/Objects/LinkDescription.js";
import TrackerIdentifier from "../Types/Objects/TrackerIdentifier.js";
import { default as PayPalError } from "../Types/Objects/Error.js";
import TrackerUpdateOrCancelError from "../Errors/AddTracking/TrackerUpdateOrCancelError.js";

class AddTracking {
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
  async updateOrCancel(transactionIdTrackingNumber: string, tracker: Tracker): Promise<Tracker> {
    const response = await this.PayPal.API.put(
      `/v1/shipping/trackers/${transactionIdTrackingNumber}`,
      tracker.toJson<TTracker>()
    );
    const SUCCESS_RESPONSE = 204;
    if (response.status !== SUCCESS_RESPONSE) {
      throw new TrackerUpdateOrCancelError("Failed to update or cancel tracking", response.data);
    }
    return this.get(transactionIdTrackingNumber);
  }

  async get(trackerOrTransactionIdTrackingNumber: Tracker | string): Promise<Tracker> {
    const transactionIdTrackingNumber =
      trackerOrTransactionIdTrackingNumber instanceof Tracker
        ? trackerOrTransactionIdTrackingNumber.transactionId
        : trackerOrTransactionIdTrackingNumber;
    const response = await this.PayPal.API.get<TTracker>(`/v1/shipping/trackers/${transactionIdTrackingNumber}`);
    return Tracker.fromObject(response.data);
  }

  async add(trackers: Tracker[], links: LinkDescription[]) {
    const response = await this.PayPal.API.post<TAddTrackersResponse>("/v1/shipping/trackers", {
      trackers: trackers.map((tracker) => tracker.toAttributeObject<TTracker>()),
      links: links.map((link) => link.toAttributeObject<TLinkDescription>()),
    });
    return new AddTrackersResponse(
      response.data.errors.map((x) => PayPalError.fromObject(x)),
      response.data.links.map((x) => LinkDescription.fromObject(x)),
      response.data.tracker_identifiers.map((x) => TrackerIdentifier.fromObject(x))
    );
  }
}

export default AddTracking;
