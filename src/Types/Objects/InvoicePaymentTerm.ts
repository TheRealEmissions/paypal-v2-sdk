import Types from "../Types";

export type TInvoicePaymentTerm = {
  term_type: string;
  due_date: string;
};

class InvoicePaymentTerm extends Types {
  termType?: string;
  dueDate?: string;
  constructor() {
    super();
  }

  setTermType(termType: string) {
    this.termType = termType;
    return this;
  }

  setDueDate(dueDate: string) {
    this.dueDate = dueDate;
    return this;
  }

  override fromObject(obj: TInvoicePaymentTerm) {
    this.termType = obj.term_type;
    this.dueDate = obj.due_date;
    return this;
  }
}

export default InvoicePaymentTerm;
