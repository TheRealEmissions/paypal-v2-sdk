import { PaymentTermType } from "../Enums/PaymentTermType.js";
import Types, { ITypes, Static } from "../Types.js";

export type TPaymentTerm = {
  term_type?: keyof typeof PaymentTermType;
};

class PaymentTerm extends Types implements Static<ITypes, typeof PaymentTerm> {
  termType?: PaymentTermType;
  constructor() {
    super();
  }

  setTermType(termType: PaymentTermType | ((termType: typeof PaymentTermType) => PaymentTermType)) {
    if (typeof termType === "function") this.termType = termType(PaymentTermType);
    else this.termType = termType;
    return this;
  }

  static fromObject(obj: TPaymentTerm) {
    const paymentTerm = new PaymentTerm();
    if (obj.term_type) paymentTerm.setTermType(PaymentTermType[obj.term_type]);
    return paymentTerm;
  }
}

export default PaymentTerm;
