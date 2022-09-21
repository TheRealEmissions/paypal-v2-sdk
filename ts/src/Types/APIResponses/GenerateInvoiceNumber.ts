import PayPal from "../../PayPal";
import Types from "../Types";

class GenerateInvoiceNumberResponse extends Types {
  invoiceNumber: string;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setInvoiceNumber(invoiceNumber: string) {
    this.invoiceNumber = invoiceNumber;
    return this;
  }
}

export default GenerateInvoiceNumberResponse;
