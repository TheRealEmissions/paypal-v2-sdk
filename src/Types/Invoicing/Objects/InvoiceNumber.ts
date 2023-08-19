import { IUtility, Static, Utility } from "../../Utility";

export type TInvoiceNumber = {
  invoice_number: string;
};

type InvoiceNumberFields = {
  readonly invoiceNumber?: string;
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

  public override getFields<T extends Partial<InvoiceNumberFields>>() {
    return super._getFields<T>();
  }

  static fromObject(obj: TInvoiceNumber) {
    const invoiceNumber = new InvoiceNumber();
    invoiceNumber.setInvoiceNumber(obj.invoice_number);
    return invoiceNumber;
  }
}
