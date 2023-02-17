import Types, { ITypes, StaticImplements } from "../Types.js";

export type TInvoicePaymentTerm = {
  term_type?: string;
  due_date?: string;
};

class InvoicePaymentTerm extends Types implements StaticImplements<ITypes, typeof InvoicePaymentTerm> {
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

  static fromObject(obj: TInvoicePaymentTerm) {
    const invoicePaymentTerm = new InvoicePaymentTerm();
    if (obj.term_type) invoicePaymentTerm.setTermType(obj.term_type);
    if (obj.due_date) invoicePaymentTerm.setDueDate(obj.due_date);
    return invoicePaymentTerm;
  }
}

export default InvoicePaymentTerm;
