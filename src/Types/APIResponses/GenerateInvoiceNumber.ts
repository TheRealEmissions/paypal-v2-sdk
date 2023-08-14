import { Utility, IUtility, Static } from "../Utility.js";

export type TGenerateInvoiceNumberResponse = {
  readonly invoice_number: string;
};

export class GenerateInvoiceNumberResponse
  extends Utility
  implements Static<IUtility, typeof GenerateInvoiceNumberResponse>
{
  private readonly invoiceNumber: string;
  constructor(invoiceNumber: string) {
    super();
    this.invoiceNumber = invoiceNumber;
  }

  public getInvoiceNumber() {
    return this.invoiceNumber;
  }

  public override getFields<T extends Partial<TGenerateInvoiceNumberResponse>>() {
    return super.getFields<T>();
  }

  static fromObject(obj: TGenerateInvoiceNumberResponse) {
    return new GenerateInvoiceNumberResponse(obj.invoice_number);
  }
}
