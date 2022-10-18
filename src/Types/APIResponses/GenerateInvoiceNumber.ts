import TypeResponse from "./TypeResponse.js";

export type TGenerateInvoiceNumberResponse = {
  readonly invoice_number: string;
};

class GenerateInvoiceNumberResponse extends TypeResponse {
  readonly invoiceNumber: string;
  constructor(invoiceNumber: string) {
    super();
    this.invoiceNumber = invoiceNumber;
  }
}

export default GenerateInvoiceNumberResponse;
