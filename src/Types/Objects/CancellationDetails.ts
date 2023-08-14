import { CancellationMode } from "../Enums/CancellationMode";
import Types, { ITypes, Static } from "../Types";

export type TCancellationDetails = {
  cancellation_date?: string;
  cancellation_mode?: keyof typeof CancellationMode;
  cancellation_number?: string;
  cancelled?: boolean;
};

class CancellationDetails extends Types implements Static<ITypes, typeof CancellationDetails> {
  cancellationDate?: string;
  cancellationMode?: CancellationMode;
  cancellationNumber?: string;
  cancelled?: boolean;

  constructor() {
    super();
  }

  setCancellationDate(cancellationDate: string) {
    this.cancellationDate = cancellationDate;
    return this;
  }

  setCancellationMode(
    cancellationMode: CancellationMode | ((cancellationMode: typeof CancellationMode) => CancellationMode)
  ) {
    if (typeof cancellationMode === "function") this.cancellationMode = cancellationMode(CancellationMode);
    else this.cancellationMode = cancellationMode;
    return this;
  }

  setCancellationNumber(cancellationNumber: string) {
    this.cancellationNumber = cancellationNumber;
    return this;
  }

  setCancelled(cancelled: boolean) {
    this.cancelled = cancelled;
    return this;
  }

  static fromObject(obj: TCancellationDetails) {
    const cancellationDetails = new CancellationDetails();
    if (obj.cancellation_date) cancellationDetails.setCancellationDate(obj.cancellation_date);
    if (obj.cancellation_mode) cancellationDetails.setCancellationMode(CancellationMode[obj.cancellation_mode]);
    if (obj.cancellation_number) cancellationDetails.setCancellationNumber(obj.cancellation_number);
    if (obj.cancelled) cancellationDetails.setCancelled(obj.cancelled);
    return cancellationDetails;
  }
}

export default CancellationDetails;
