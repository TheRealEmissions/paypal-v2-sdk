import AddTrackersResponse, { TAddTrackersResponse } from "./../Types/APIResponses/AddTrackers";
import { ShippingStatus } from "./../Types/Enums/ShippingStatus";
import { TTracker } from "./../Types/Objects/Tracker";
import PayPal from "../PayPal";
import Tracker from "../Types/Objects/Tracker";
import LinkDescription from "../Types/Objects/LinkDescription";
import TrackerIdentifier from "../Types/Objects/TrackerIdentifier";
import { default as PayPalError } from "../Types/Objects/Error";

class AddTracking {
  PayPal: PayPal;
  constructor(PayPal: PayPal) {
    this.PayPal = PayPal;
  }

  async updateOrCancel(transactionIdTrackingNumber: string, tracker: Tracker): Promise<Tracker | boolean> {
    const response = await this.PayPal.API.put(
      `/v1/shipping/trackers/${transactionIdTrackingNumber}`,
      tracker.toAttributeObject<TTracker>()
    );
    if (response.status !== 204) {
      throw new Error("Failed to update or cancel tracking");
    }
    return tracker.status === ShippingStatus.CANCELLED ? true : await this.get(transactionIdTrackingNumber);
  }

  async get(trackerOrTransactionIdTrackingNumber: Tracker | string): Promise<Tracker> {
    const transactionIdTrackingNumber =
      trackerOrTransactionIdTrackingNumber instanceof Tracker
        ? trackerOrTransactionIdTrackingNumber.transactionId
        : trackerOrTransactionIdTrackingNumber;
    const response = await this.PayPal.API.get<TTracker>(`/v1/shipping/trackers/${transactionIdTrackingNumber}`);
    return new Tracker().fromObject(response.data);
  }

  async add(trackers: Tracker[], links: LinkDescription[]) {
    const response = await this.PayPal.API.post<TAddTrackersResponse>("/v1/shipping/trackers", {
      trackers: trackers.map((tracker) => tracker.toAttributeObject<TTracker>()),
      links: links.map((link) => link.toAttributeObject()),
    });
    return new AddTrackersResponse(
      response.data.errors.map((x) => new PayPalError().fromObject(x)),
      response.data.links.map((x) => new LinkDescription().fromObject(x)),
      response.data.tracker_identifiers.map((x) => new TrackerIdentifier().fromObject(x))
    );
  }
}

export default AddTracking;
