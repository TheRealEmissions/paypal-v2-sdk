import { ReturnMode } from "../Enums/ReturnMode";
import Types, { ITypes, Static } from "../Types";

export interface TReturnDetails {
  mode?: keyof typeof ReturnMode;
  receipt?: boolean;
  return_confirmation_number?: string;
  return_time?: string;
  returned?: boolean;
}

class ReturnDetails extends Types implements Static<ITypes, typeof ReturnDetails> {
  mode?: ReturnMode;
  receipt?: boolean;
  returnConfirmationNumber?: string;
  returnTime?: string;
  returned?: boolean;

  constructor() {
    super();
  }

  setMode(mode: ReturnMode | ((mode: typeof ReturnMode) => ReturnMode)) {
    if (typeof mode === "function") this.mode = mode(ReturnMode);
    else this.mode = mode;
    return this;
  }

  setReceipt(receipt: boolean) {
    this.receipt = receipt;
    return this;
  }

  setReturnConfirmationNumber(returnConfirmationNumber: string) {
    this.returnConfirmationNumber = returnConfirmationNumber;
    return this;
  }

  setReturnTime(returnTime: string) {
    this.returnTime = returnTime;
    return this;
  }

  setReturned(returned: boolean) {
    this.returned = returned;
    return this;
  }

  static fromObject(obj: TReturnDetails) {
    const returnDetails = new ReturnDetails();
    if (obj.mode) returnDetails.setMode(ReturnMode[obj.mode]);
    if (obj.receipt) returnDetails.setReceipt(obj.receipt);
    if (obj.return_confirmation_number) returnDetails.setReturnConfirmationNumber(obj.return_confirmation_number);
    if (obj.return_time) returnDetails.setReturnTime(obj.return_time);
    if (obj.returned) returnDetails.setReturned(obj.returned);
    return returnDetails;
  }
}

export default ReturnDetails;
