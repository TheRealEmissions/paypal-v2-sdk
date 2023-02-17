import Types, { ITypes, Static } from "../Types.js";

export type TGenerateInvoiceNumberResponse = {
  readonly invoice_number: string;
};

class GenerateInvoiceNumberResponse extends Types implements Static<ITypes, typeof GenerateInvoiceNumberResponse> {
  readonly invoiceNumber: string;
  constructor(invoiceNumber: string) {
    super();
    this.invoiceNumber = invoiceNumber;
  }

  static fromObject(obj: TGenerateInvoiceNumberResponse) {
    return new GenerateInvoiceNumberResponse(obj.invoice_number);
  }
}

export default GenerateInvoiceNumberResponse;
