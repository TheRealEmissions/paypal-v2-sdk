import { PaymentDetailMethod } from "../Enums/PaymentDetailMethod.js";
import { PaymentDetailType } from "../Enums/PaymentDetailType.js";
import Types from "../Types.js";
import ContactInformation, { TContactInformation } from "./ContactInformation.js";
import Money, { TMoney } from "./Money.js";

export type TPaymentDetail = {
  method: keyof typeof PaymentDetailMethod;
  amount?: TMoney;
  note?: string;
  payment_date?: string;
  payment_id?: string;
  shipping_info?: TContactInformation;
  readonly type?: keyof typeof PaymentDetailType;
};

class PaymentDetail extends Types {
  method?: PaymentDetailMethod;
  amount?: Money;
  note?: string;
  paymentDate?: string;
  paymentId?: string;
  shippingInfo?: ContactInformation;
  type?: PaymentDetailType;
  constructor() {
    super();
  }

  setMethod(method: PaymentDetailMethod) {
    this.method = method;
    return this;
  }

  setAmount(amount: Money) {
    this.amount = amount;
    return this;
  }

  setNote(note: string) {
    this.note = note;
    return this;
  }

  setPaymentDate(paymentDate: string) {
    this.paymentDate = paymentDate;
    return this;
  }

  setPaymentId(paymentId: string) {
    this.paymentId = paymentId;
    return this;
  }

  setShippingInfo(shippingInfo: ContactInformation) {
    this.shippingInfo = shippingInfo;
    return this;
  }

  setType(type: PaymentDetailType) {
    this.type = type;
    return this;
  }

  override fromObject(obj: TPaymentDetail) {
    this.method = PaymentDetailMethod[obj.method as keyof typeof PaymentDetailMethod];
    this.amount = obj.amount ? new Money().fromObject(obj.amount) : undefined;
    this.note = obj.note;
    this.paymentDate = obj.payment_date;
    this.paymentId = obj.payment_id;
    this.shippingInfo = obj.shipping_info ? new ContactInformation().fromObject(obj.shipping_info) : undefined;
    this.type = PaymentDetailType[obj.type as keyof typeof PaymentDetailType];
    return this;
  }
}

export default PaymentDetail;
