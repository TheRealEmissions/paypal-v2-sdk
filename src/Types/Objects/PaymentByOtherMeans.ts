import { PaymentDetailMethod } from "../Enums/PaymentDetailMethod";
import Types, { ITypes, Static } from "../Types";

export type TPaymentByOtherMeans = {
  charge_different_from_original?: boolean;
  payment_instrument_suffix?: string;
  payment_method?: Exclude<keyof typeof PaymentDetailMethod, "WIRE_TRANSFER" | "OTHER">;
  received_duplicate?: boolean;
};

class PaymentByOtherMeans extends Types implements Static<ITypes, typeof PaymentByOtherMeans> {
  chargeDifferentFromOriginal?: boolean;
  paymentInstrumentSuffix?: string;
  paymentMethod?: Exclude<PaymentDetailMethod, PaymentDetailMethod.WIRE_TRANSFER | PaymentDetailMethod.OTHER>;
  receivedDuplicate?: boolean;

  constructor() {
    super();
  }

  setChargeDifferentFromOriginal(chargeDifferentFromOriginal: boolean) {
    this.chargeDifferentFromOriginal = chargeDifferentFromOriginal;
    return this;
  }

  setPaymentInstrumentSuffix(paymentInstrumentSuffix: string) {
    this.paymentInstrumentSuffix = paymentInstrumentSuffix;
    return this;
  }

  setPaymentMethod(
    paymentMethod:
      | Exclude<PaymentDetailMethod, PaymentDetailMethod.WIRE_TRANSFER | PaymentDetailMethod.OTHER>
      | ((
          paymentMethod: Exclude<
            typeof PaymentDetailMethod,
            PaymentDetailMethod.WIRE_TRANSFER | PaymentDetailMethod.OTHER
          >
        ) => Exclude<PaymentDetailMethod, PaymentDetailMethod.WIRE_TRANSFER | PaymentDetailMethod.OTHER>)
  ) {
    if (typeof paymentMethod === "function") this.paymentMethod = paymentMethod(PaymentDetailMethod);
    else this.paymentMethod = paymentMethod;
    return this;
  }

  setReceivedDuplicate(receivedDuplicate: boolean) {
    this.receivedDuplicate = receivedDuplicate;
    return this;
  }

  static fromObject(obj: TPaymentByOtherMeans) {
    const paymentByOtherMeans = new PaymentByOtherMeans();
    if (obj.charge_different_from_original)
      paymentByOtherMeans.setChargeDifferentFromOriginal(obj.charge_different_from_original);
    if (obj.payment_instrument_suffix) paymentByOtherMeans.setPaymentInstrumentSuffix(obj.payment_instrument_suffix);
    if (obj.payment_method) paymentByOtherMeans.setPaymentMethod(PaymentDetailMethod[obj.payment_method]);
    if (obj.received_duplicate) paymentByOtherMeans.setReceivedDuplicate(obj.received_duplicate);
    return paymentByOtherMeans;
  }
}

export default PaymentByOtherMeans;
