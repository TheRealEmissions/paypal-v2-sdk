import { PaymentDetailMethod } from "../Enums/PaymentDetailMethod.js";
import { PaymentDetailType } from "../Enums/PaymentDetailType.js";
import { Utility, IUtility, Static } from "../Utility.js";
import { ContactInformation, TContactInformation } from "./ContactInformation.js";
import { Money, TMoney } from "./Money.js";

export type TPaymentDetail = {
  method: keyof typeof PaymentDetailMethod;
  amount?: TMoney;
  note?: string;
  payment_date?: string;
  payment_id?: string;
  shipping_info?: TContactInformation;
  readonly type?: keyof typeof PaymentDetailType;
};

export class PaymentDetail extends Utility implements Static<IUtility, typeof PaymentDetail> {
  private method?: PaymentDetailMethod;
  private amount?: Money;
  private note?: string;
  private paymentDate?: string;
  private paymentId?: string;
  private shippingInfo?: ContactInformation;
  private type?: PaymentDetailType;

  public setMethod(method: PaymentDetailMethod): this;
  public setMethod(method: (method: typeof PaymentDetailMethod) => PaymentDetailMethod): this;
  public setMethod(method: PaymentDetailMethod | ((method: typeof PaymentDetailMethod) => PaymentDetailMethod)) {
    if (typeof method === "function") this.method = method(PaymentDetailMethod);
    else this.method = method;
    return this;
  }
  public getMethod() {
    return this.method;
  }

  public setAmount(amount: Money): this;
  public setAmount(amount: (money: Money) => void): this;
  public setAmount(amount: Money | ((money: Money) => void)) {
    if (amount instanceof Money) this.amount = amount;
    else {
      const money = new Money();
      amount(money);
      this.amount = money;
    }
    return this;
  }
  public getAmount() {
    return this.amount;
  }

  public setNote(note: string) {
    this.note = note;
    return this;
  }
  public getNote() {
    return this.note;
  }

  public setPaymentDate(paymentDate: string) {
    this.paymentDate = paymentDate;
    return this;
  }
  public getPaymentDate() {
    return this.paymentDate;
  }

  public setPaymentId(paymentId: string) {
    this.paymentId = paymentId;
    return this;
  }
  public getPaymentId() {
    return this.paymentId;
  }

  public setShippingInfo(shippingInfo: ContactInformation): this;
  public setShippingInfo(shippingInfo: (contactInformation: ContactInformation) => void): this;
  public setShippingInfo(shippingInfo: ContactInformation | ((contactInformation: ContactInformation) => void)) {
    if (shippingInfo instanceof ContactInformation) this.shippingInfo = shippingInfo;
    else {
      const contactInformation = new ContactInformation();
      shippingInfo(contactInformation);
      this.shippingInfo = contactInformation;
    }
    return this;
  }
  public getShippingInfo() {
    return this.shippingInfo;
  }

  public setType(type: PaymentDetailType): this;
  public setType(type: (type: typeof PaymentDetailType) => PaymentDetailType): this;
  public setType(type: PaymentDetailType | ((type: typeof PaymentDetailType) => PaymentDetailType)) {
    if (typeof type === "function") this.type = type(PaymentDetailType);
    else this.type = type;
    return this;
  }
  public getType() {
    return this.type;
  }

  public override getFields<T extends Partial<TPaymentDetail>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TPaymentDetail) {
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
