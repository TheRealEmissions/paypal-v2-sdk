import PayPal from "../PayPal";
import GenerateInvoiceNumberResponse from "../Types/APIResponses/GenerateInvoiceNumber";

class Invoicing {
  PayPal: PayPal;
  constructor(PayPal: PayPal) {
    this.PayPal = PayPal;
  }

  async generateInvoiceNumber(): Promise<GenerateInvoiceNumberResponse> {
    const response = await this.PayPal.API.post(
      "/v2/invoicing/generate-next-invoice-number"
    );
    const invoiceNumber = response.data.invoice_number;
    return new GenerateInvoiceNumberResponse(this.PayPal).setInvoiceNumber(
      invoiceNumber
    );
  }

  async listInvoices(
    fields?: string,
    page?: number,
    pageSize?: number,
    totalRequired?: boolean
  ) {
    if (page !== undefined) {
      if (!Number.isInteger(page)) {
        throw new Error("Page must be an integer");
      }
      if (page < 1 || page > 1000) {
        throw new Error("Page must be between 1 and 1000");
      }
    }
    if (pageSize !== undefined) {
      if (!Number.isInteger(pageSize)) {
        throw new Error("Page size must be an integer");
      }
      if (pageSize < 1 || pageSize > 100) {
        throw new Error("Page size must be between 1 and 100");
      }
    }

    const response = await this.PayPal.API.get("/v2/invoicing/invoices", {
      params: {
        fields,
        page,
        page_size: pageSize,
        total_required: totalRequired,
      },
    });
  }
}

export default Invoicing;
