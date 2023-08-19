import { IUtility, Static, Utility } from "../../Utility.js";
import { ReturnDetailsMode } from "../Enums/ReturnDetailsMode.js";

export type TReturnDetails = {
  mode?: keyof typeof ReturnDetailsMode;
  receipt?: boolean;
  return_confirmation_number?: string;
  return_time?: string;
  returned?: boolean;
};

type ReturnDetailsFields = {
  readonly mode?: ReturnDetailsMode;
  readonly receipt?: boolean;
  readonly returnConfirmationNumber?: string;
  readonly returnTime?: string;
  readonly returned?: boolean;
};

export class ReturnDetails extends Utility implements Static<IUtility, typeof ReturnDetails> {
  private mode?: ReturnDetailsMode;
  private receipt?: boolean;
  private returnConfirmationNumber?: string;
  private returnTime?: string;
  private returned?: boolean;

  public setMode(mode: ReturnDetailsMode): this;
  public setMode(mode: (mode: typeof ReturnDetailsMode) => ReturnDetailsMode): this;
  public setMode(mode: ReturnDetailsMode | ((mode: typeof ReturnDetailsMode) => ReturnDetailsMode)) {
    if (typeof mode === "function") this.mode = mode(ReturnDetailsMode);
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

  public override getFields<T extends ReturnDetailsFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TReturnDetails) {
    const returnDetails = new ReturnDetails();
    if (obj.mode) returnDetails.setMode(ReturnDetailsMode[obj.mode]);
    if (obj.receipt) returnDetails.setReceipt(obj.receipt);
    if (obj.return_confirmation_number) returnDetails.setReturnConfirmationNumber(obj.return_confirmation_number);
    if (obj.return_time) returnDetails.setReturnTime(obj.return_time);
    if (obj.returned) returnDetails.setReturned(obj.returned);
    return returnDetails;
  }
}
