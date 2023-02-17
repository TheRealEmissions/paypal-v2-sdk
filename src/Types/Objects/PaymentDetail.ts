import { PaymentDetailMethod } from "../Enums/PaymentDetailMethod.js";
import { PaymentDetailType } from "../Enums/PaymentDetailType.js";
import Types, { ITypes, Static } from "../Types.js";
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

class PaymentDetail extends Types implements Static<ITypes, typeof PaymentDetail> {
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

  static fromObject(obj: TPaymentDetail) {
    const paymentDetail = new PaymentDetail();
    paymentDetail.setMethod(PaymentDetailMethod[obj.method]);
    if (obj.amount) paymentDetail.setAmount(Money.fromObject(obj.amount));
    if (obj.note) paymentDetail.setNote(obj.note);
    if (obj.payment_date) paymentDetail.setPaymentDate(obj.payment_date);
    if (obj.payment_id) paymentDetail.setPaymentId(obj.payment_id);
    if (obj.shipping_info) paymentDetail.setShippingInfo(ContactInformation.fromObject(obj.shipping_info));
    if (obj.type) paymentDetail.setType(PaymentDetailType[obj.type]);
    return paymentDetail;
  }
}

export default PaymentDetail;
