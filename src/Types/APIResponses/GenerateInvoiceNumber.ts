import TypeResponse from "./TypeResponse";

export type TGenerateInvoiceNumberResponse = {
  invoice_number: string;
};

class GenerateInvoiceNumberResponse extends TypeResponse {
  readonly invoiceNumber: string;
  constructor(invoiceNumber: string) {
    super();
    this.invoiceNumber = invoiceNumber;
  }
}

export default GenerateInvoiceNumberResponse;
