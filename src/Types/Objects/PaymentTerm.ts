import { PaymentTermType } from "../Enums/PaymentTermType";
import Types from "../Types";

export type TPaymentTerm = {
  term_type: string;
};

class PaymentTerm extends Types {
  termType: PaymentTermType;
  constructor() {
    super();
  }

  setTermType(termType: PaymentTermType) {
    this.termType = termType;
    return this;
  }

  override fromObject(obj: TPaymentTerm) {
    this.termType =
      PaymentTermType[obj.term_type as keyof typeof PaymentTermType];
    return this;
  }
}

export default PaymentTerm;
