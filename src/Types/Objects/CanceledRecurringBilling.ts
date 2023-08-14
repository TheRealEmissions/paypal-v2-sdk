import Types, { ITypes, Static } from "../Types";
import CancellationDetails, { TCancellationDetails } from "./CancellationDetails";
import Money, { TMoney } from "./Money";

export type TCanceledRecurringBilling = {
  cancellation_details?: TCancellationDetails;
  expected_refund?: TMoney;
};

class CanceledRecurringBilling extends Types implements Static<ITypes, typeof CanceledRecurringBilling> {
  cancellationDetails?: CancellationDetails;
  expectedRefund?: Money;

  constructor() {
    super();
  }

  setCancellationDetails(
    cancellationDetails: CancellationDetails | ((cancellationDetails: CancellationDetails) => void)
  ) {
    if (cancellationDetails instanceof CancellationDetails) this.cancellationDetails = cancellationDetails;
    else cancellationDetails((this.cancellationDetails = new CancellationDetails()));
    return this;
  }

  setExpectedRefund(expectedRefund: Money | ((expectedRefund: Money) => void)) {
    if (expectedRefund instanceof Money) this.expectedRefund = expectedRefund;
    else expectedRefund((this.expectedRefund = new Money()));
    return this;
  }

  static fromObject(obj: TCanceledRecurringBilling) {
    const canceledRecurringBilling = new CanceledRecurringBilling();
    if (obj.cancellation_details)
      canceledRecurringBilling.setCancellationDetails(CancellationDetails.fromObject(obj.cancellation_details));
    if (obj.expected_refund) canceledRecurringBilling.setExpectedRefund(Money.fromObject(obj.expected_refund));
    return canceledRecurringBilling;
  }
}

export default CanceledRecurringBilling;
