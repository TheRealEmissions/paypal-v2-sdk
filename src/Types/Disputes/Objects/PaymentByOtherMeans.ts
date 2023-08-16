import { IUtility, Static, Utility } from "../../Utility.js";
import { PaymentByOtherMeansPaymentMethod } from "../Enums/PaymentByOtherMeansPaymentMethod.js";

export type TPaymentByOtherMeans = {
  charge_different_from_original?: boolean;
  payment_instrument_suffix?: string;
  payment_method?: keyof typeof PaymentByOtherMeansPaymentMethod;
  received_duplicate?: boolean;
};

export class PaymentByOtherMeans extends Utility implements Static<IUtility, typeof PaymentByOtherMeans> {
  private chargeDifferentFromOriginal?: boolean;
  private paymentInstrumentSuffix?: string;
  private paymentMethod?: PaymentByOtherMeansPaymentMethod;
  private receivedDuplicate?: boolean;

  public setChargeDifferentFromOriginal(chargeDifferentFromOriginal: boolean) {
    this.chargeDifferentFromOriginal = chargeDifferentFromOriginal;
    return this;
  }
  public getChargeDifferentFromOriginal() {
    return this.chargeDifferentFromOriginal;
  }

  public setPaymentInstrumentSuffix(paymentInstrumentSuffix: string) {
    this.paymentInstrumentSuffix = paymentInstrumentSuffix;
    return this;
  }
  public getPaymentInstrumentSuffix() {
    return this.paymentInstrumentSuffix;
  }

  public setPaymentMethod(paymentMethod: PaymentByOtherMeansPaymentMethod): this;
  public setPaymentMethod(
    paymentMethod: (paymentMethod: typeof PaymentByOtherMeansPaymentMethod) => PaymentByOtherMeansPaymentMethod
  ): this;
  public setPaymentMethod(
    paymentMethod:
      | PaymentByOtherMeansPaymentMethod
      | ((paymentMethod: typeof PaymentByOtherMeansPaymentMethod) => PaymentByOtherMeansPaymentMethod)
  ) {
    if (typeof paymentMethod === "function") this.paymentMethod = paymentMethod(PaymentByOtherMeansPaymentMethod);
    else this.paymentMethod = paymentMethod;
    return this;
  }
  public getPaymentMethod() {
    return this.paymentMethod;
  }

  public setReceivedDuplicate(receivedDuplicate: boolean) {
    this.receivedDuplicate = receivedDuplicate;
    return this;
  }
  public getReceivedDuplicate() {
    return this.receivedDuplicate;
  }

  public override getFields<T extends TPaymentByOtherMeans>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TPaymentByOtherMeans) {
    const paymentByOtherMeans = new PaymentByOtherMeans();
    if (obj.charge_different_from_original)
      paymentByOtherMeans.setChargeDifferentFromOriginal(obj.charge_different_from_original);
    if (obj.payment_instrument_suffix) paymentByOtherMeans.setPaymentInstrumentSuffix(obj.payment_instrument_suffix);
    if (obj.payment_method) paymentByOtherMeans.setPaymentMethod(PaymentByOtherMeansPaymentMethod[obj.payment_method]);
    if (obj.received_duplicate) paymentByOtherMeans.setReceivedDuplicate(obj.received_duplicate);
    return paymentByOtherMeans;
  }
}
