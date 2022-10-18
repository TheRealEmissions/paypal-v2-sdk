import { PaymentTermType } from "../Enums/PaymentTermType.js";
import Types from "../Types.js";

export type TPaymentTerm = {
  term_type?: string;
};

class PaymentTerm extends Types {
  termType?: PaymentTermType;
  constructor() {
    super();
  }

  setTermType(termType: PaymentTermType) {
    this.termType = termType;
    return this;
  }

  override fromObject(obj: TPaymentTerm) {
    this.termType = PaymentTermType[obj.term_type as keyof typeof PaymentTermType];
    return this;
  }
}

export default PaymentTerm;
