import { IUtility, Static, Utility } from "../../Utility.js";
import { CancellationDetails, TCancellationDetails } from "./CancellationDetails.js";
import { Money, TMoney } from "./Money.js";

export type TCanceledRecurringBilling = {
  cancellation_details?: TCancellationDetails;
  expected_refund?: TMoney;
};

export class CanceledRecurringBilling extends Utility implements Static<IUtility, typeof CanceledRecurringBilling> {
  private cancellationDetails?: CancellationDetails;
  private expectedRefund?: Money;

  public setCancellationDetails(cancellationDetails: CancellationDetails): this;
  public setCancellationDetails(cancellationDetails: (cancellationDetails: CancellationDetails) => void): this;
  public setCancellationDetails(
    cancellationDetails: CancellationDetails | ((cancellationDetails: CancellationDetails) => void)
  ) {
    if (cancellationDetails instanceof CancellationDetails) this.cancellationDetails = cancellationDetails;
    else cancellationDetails((this.cancellationDetails = new CancellationDetails()));
    return this;
  }
  public getCancellationDetails() {
    return this.cancellationDetails;
  }

  public setExpectedRefund(expectedRefund: Money): this;
  public setExpectedRefund(expectedRefund: (expectedRefund: Money) => void): this;
  public setExpectedRefund(expectedRefund: Money | ((expectedRefund: Money) => void)) {
    if (expectedRefund instanceof Money) this.expectedRefund = expectedRefund;
    else expectedRefund((this.expectedRefund = new Money()));
    return this;
  }
  public getExpectedRefund() {
    return this.expectedRefund;
  }

  public override getFields<T extends TCanceledRecurringBilling>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TCanceledRecurringBilling) {
    const canceledRecurringBilling = new CanceledRecurringBilling();
    if (obj.cancellation_details)
      canceledRecurringBilling.setCancellationDetails(CancellationDetails.fromObject(obj.cancellation_details));
    if (obj.expected_refund) canceledRecurringBilling.setExpectedRefund(Money.fromObject(obj.expected_refund));
    return canceledRecurringBilling;
  }
}
