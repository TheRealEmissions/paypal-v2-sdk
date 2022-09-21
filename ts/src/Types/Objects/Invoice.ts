import Types from "../Types";
import AmountSummaryDetail from "./AmountSummaryDetail";
import Configuration from "./Configuration";
import EmailAddress from "./EmailAddress";
import InvoiceDetail from "./InvoiceDetail";
import InvoicerInfo from "./InvoicerInfo";
import Money from "./Money";

class Invoice extends Types {
  detail: InvoiceDetail;
  additionalRecipients: EmailAddress[];
  amount: AmountSummaryDetail;
  configuration: Configuration;
  dueAmount: Money;
  gratuity: Money;
  id: string;
  invoicer: InvoicerInfo;
  items: 
}

export default Invoice;
