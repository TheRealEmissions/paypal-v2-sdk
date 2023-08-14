import { Utility, IUtility, Static } from "../Utility.js";

export type TInvoicePaymentTerm = {
  term_type?: string;
  due_date?: string;
};

export class InvoicePaymentTerm extends Utility implements Static<IUtility, typeof InvoicePaymentTerm> {
  private termType?: string;
  private dueDate?: string;

  public setTermType(termType: string) {
    this.termType = termType;
    return this;
  }
  public getTermType() {
    return this.termType;
  }

  public setDueDate(dueDate: string) {
    this.dueDate = dueDate;
    return this;
  }
  public getDueDate() {
    return this.dueDate;
  }

  public override getFields<T extends TInvoicePaymentTerm>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TInvoicePaymentTerm) {
    const invoicePaymentTerm = new InvoicePaymentTerm();
    if (obj.term_type) invoicePaymentTerm.setTermType(obj.term_type);
    if (obj.due_date) invoicePaymentTerm.setDueDate(obj.due_date);
    return invoicePaymentTerm;
  }
}
