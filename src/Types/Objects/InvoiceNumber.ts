import { IUtility, Static, Utility } from "../Utility";

export type TInvoiceNumber = {
  invoice_number: string;
};

export class InvoiceNumber extends Utility implements Static<IUtility, typeof InvoiceNumber> {
  private invoiceNumber?: string;

  public setInvoiceNumber(invoiceNumber: string) {
    this.invoiceNumber = invoiceNumber;
    return this;
  }
  public getInvoiceNumber() {
    return this.invoiceNumber;
  }

  public override getFields<T extends Partial<TInvoiceNumber>>() {
    return super.getFields<T>();
  }

  static fromObject(obj: TInvoiceNumber) {
    const invoiceNumber = new InvoiceNumber();
    invoiceNumber.setInvoiceNumber(obj.invoice_number);
    return invoiceNumber;
  }
}
