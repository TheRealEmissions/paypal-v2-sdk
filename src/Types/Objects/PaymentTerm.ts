import { PaymentTermType } from "../Enums/PaymentTermType.js";
import Types, { ITypes, StaticImplements } from "../Types.js";

export type TPaymentTerm = {
  term_type?: keyof typeof PaymentTermType;
};

class PaymentTerm extends Types implements StaticImplements<ITypes, typeof PaymentTerm> {
  termType?: PaymentTermType;
  constructor() {
    super();
  }

  setTermType(termType: PaymentTermType) {
    this.termType = termType;
    return this;
  }

  static fromObject(obj: TPaymentTerm) {
    const paymentTerm = new PaymentTerm();
    if (obj.term_type) paymentTerm.setTermType(PaymentTermType[obj.term_type]);
    return paymentTerm;
  }
}

export default PaymentTerm;
