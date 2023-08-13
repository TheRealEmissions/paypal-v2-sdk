import Types, { ITypes, Static } from "../Types.js";

export type TInvoicePaymentTerm = {
  term_type?: string;
  due_date?: string;
};

export class InvoicePaymentTerm extends Types implements Static<ITypes, typeof InvoicePaymentTerm> {
  termType?: string;
  dueDate?: string;

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
