import { ReturnMode } from "../Enums/ReturnMode.js";
import { IUtility, Static, Utility } from "../Utility.js";

export interface TReturnDetails {
  mode?: keyof typeof ReturnMode;
  receipt?: boolean;
  return_confirmation_number?: string;
  return_time?: string;
  returned?: boolean;
}

export class ReturnDetails extends Utility implements Static<IUtility, typeof ReturnDetails> {
  private mode?: ReturnMode;
  private receipt?: boolean;
  private returnConfirmationNumber?: string;
  private returnTime?: string;
  private returned?: boolean;

  public setMode(mode: ReturnMode): this;
  public setMode(mode: (mode: typeof ReturnMode) => ReturnMode): this;
  public setMode(mode: ReturnMode | ((mode: typeof ReturnMode) => ReturnMode)) {
    if (typeof mode === "function") this.mode = mode(ReturnMode);
    else this.mode = mode;
    return this;
  }
  public getMode() {
    return this.mode;
  }

  public setReceipt(receipt: boolean) {
    this.receipt = receipt;
    return this;
  }
  public getReceipt() {
    return this.receipt;
  }

  public setReturnConfirmationNumber(returnConfirmationNumber: string) {
    this.returnConfirmationNumber = returnConfirmationNumber;
    return this;
  }
  public getReturnConfirmationNumber() {
    return this.returnConfirmationNumber;
  }

  public setReturnTime(returnTime: string) {
    this.returnTime = returnTime;
    return this;
  }
  public getReturnTime() {
    return this.returnTime;
  }

  public setReturned(returned: boolean) {
    this.returned = returned;
    return this;
  }
  public getReturned() {
    return this.returned;
  }

  public override getFields<T extends TReturnDetails>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TReturnDetails) {
    const returnDetails = new ReturnDetails();
    if (obj.mode) returnDetails.setMode(ReturnMode[obj.mode]);
    if (obj.receipt) returnDetails.setReceipt(obj.receipt);
    if (obj.return_confirmation_number) returnDetails.setReturnConfirmationNumber(obj.return_confirmation_number);
    if (obj.return_time) returnDetails.setReturnTime(obj.return_time);
    if (obj.returned) returnDetails.setReturned(obj.returned);
    return returnDetails;
  }
}
