import { IUtility, OnlySetters, Static, Utility } from "../../Utility.js";
import { CancellationDetails, TCancellationDetails } from "./CancellationDetails.js";
import { Money, TMoney } from "./Money.js";

export type TCanceledRecurringBilling = {
  cancellation_details?: TCancellationDetails;
  expected_refund?: TMoney;
};

type CanceledRecurringBillingFields = {
  readonly cancellationDetails?: CancellationDetails;
  readonly expectedRefund?: Money;
};

export class CanceledRecurringBilling extends Utility implements Static<IUtility, typeof CanceledRecurringBilling> {
  private cancellationDetails?: CancellationDetails;
  private expectedRefund?: Money;

  public setCancellationDetails(cancellationDetails: CancellationDetails): OnlySetters<this>;
  public setCancellationDetails(
    cancellationDetails: (cancellationDetails: OnlySetters<CancellationDetails>) => void
  ): OnlySetters<this>;
  public setCancellationDetails(
    cancellationDetails: CancellationDetails | ((cancellationDetails: OnlySetters<CancellationDetails>) => void)
  ): OnlySetters<this> {
    if (cancellationDetails instanceof CancellationDetails) this.cancellationDetails = cancellationDetails;
    else cancellationDetails((this.cancellationDetails = new CancellationDetails()));
    return this;
  }
  public getCancellationDetails() {
    return this.cancellationDetails;
  }

  public setExpectedRefund(expectedRefund: Money): OnlySetters<this>;
  public setExpectedRefund(expectedRefund: (expectedRefund: OnlySetters<Money>) => void): OnlySetters<this>;
  public setExpectedRefund(expectedRefund: Money | ((expectedRefund: OnlySetters<Money>) => void)): OnlySetters<this> {
    if (expectedRefund instanceof Money) this.expectedRefund = expectedRefund;
    else expectedRefund((this.expectedRefund = new Money()));
    return this;
  }
  public getExpectedRefund() {
    return this.expectedRefund;
  }

  public override getFields<T extends CanceledRecurringBillingFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TCanceledRecurringBilling) {
    const canceledRecurringBilling = new CanceledRecurringBilling();
    if (obj.cancellation_details)
      canceledRecurringBilling.setCancellationDetails(CancellationDetails.fromObject(obj.cancellation_details));
    if (obj.expected_refund) canceledRecurringBilling.setExpectedRefund(Money.fromObject(obj.expected_refund));
    return canceledRecurringBilling;
  }
}
