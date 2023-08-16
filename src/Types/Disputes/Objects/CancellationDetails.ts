import { IUtility, Static, Utility } from "../../Utility.js";
import { CancellationMode } from "../Enums/CancellationMode.js";

export type TCancellationDetails = {
  cancellation_date?: string;
  cancellation_mode?: keyof typeof CancellationMode;
  cancellation_number?: string;
  cancelled?: boolean;
};

export class CancellationDetails extends Utility implements Static<IUtility, typeof CancellationDetails> {
  private cancellationDate?: string;
  private cancellationMode?: CancellationMode;
  private cancellationNumber?: string;
  private cancelled?: boolean;

  public setCancellationDate(cancellationDate: string) {
    this.cancellationDate = cancellationDate;
    return this;
  }
  public getCancellationDate() {
    return this.cancellationDate;
  }

  public setCancellationMode(cancellationMode: CancellationMode): this;
  public setCancellationMode(cancellationMode: (cancellationMode: typeof CancellationMode) => CancellationMode): this;
  public setCancellationMode(
    cancellationMode: CancellationMode | ((cancellationMode: typeof CancellationMode) => CancellationMode)
  ) {
    if (typeof cancellationMode === "function") this.cancellationMode = cancellationMode(CancellationMode);
    else this.cancellationMode = cancellationMode;
    return this;
  }
  public getCancellationMode() {
    return this.cancellationMode;
  }

  public setCancellationNumber(cancellationNumber: string) {
    this.cancellationNumber = cancellationNumber;
    return this;
  }
  public getCancellationNumber() {
    return this.cancellationNumber;
  }

  public setCancelled(cancelled: boolean) {
    this.cancelled = cancelled;
    return this;
  }
  public getCancelled() {
    return this.cancelled;
  }

  public override getFields<T extends TCancellationDetails>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TCancellationDetails) {
    const cancellationDetails = new CancellationDetails();
    if (obj.cancellation_date) cancellationDetails.setCancellationDate(obj.cancellation_date);
    if (obj.cancellation_mode) cancellationDetails.setCancellationMode(CancellationMode[obj.cancellation_mode]);
    if (obj.cancellation_number) cancellationDetails.setCancellationNumber(obj.cancellation_number);
    if (obj.cancelled) cancellationDetails.setCancelled(obj.cancelled);
    return cancellationDetails;
  }
}
