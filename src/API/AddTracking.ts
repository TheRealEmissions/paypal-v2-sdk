import { ShippingStatus } from "./../Types/Enums/ShippingStatus";
import { TTracker } from "./../Types/Objects/Tracker";
import PayPal from "../PayPal";
import Tracker from "../Types/Objects/Tracker";

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
}

export default AddTracking;
