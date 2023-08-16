import { PaymentTermType } from "../Enums/PaymentTermType.js";
import { Utility, IUtility, Static } from "../../Utility.js";

export type TPaymentTerm = {
  term_type?: keyof typeof PaymentTermType;
};

export class PaymentTerm extends Utility implements Static<IUtility, typeof PaymentTerm> {
  private termType?: PaymentTermType;

  public setTermType(termType: PaymentTermType): this;
  public setTermType(termType: (termType: typeof PaymentTermType) => PaymentTermType): this;
  public setTermType(termType: PaymentTermType | ((termType: typeof PaymentTermType) => PaymentTermType)) {
    if (typeof termType === "function") this.termType = termType(PaymentTermType);
    else this.termType = termType;
    return this;
  }
  public getTermType() {
    return this.termType;
  }

  public override getFields<T extends TPaymentTerm>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TPaymentTerm) {
    const paymentTerm = new PaymentTerm();
    if (obj.term_type) paymentTerm.setTermType(PaymentTermType[obj.term_type]);
    return paymentTerm;
  }
}
