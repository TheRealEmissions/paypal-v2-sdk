import PayPal from "../../PayPal";
import Types from "../Types";

class InvoicePaymentTerm extends Types {
  termType: string;
  dueDate: string;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setTermType(termType: string) {
    this.termType = termType;
    return this;
  }

  setDueDate(dueDate: string) {
    this.dueDate = dueDate;
    return this;
  }
}

export default InvoicePaymentTerm;
