const BasePayPal = require("./BasePayPal");

const Token = require("./API/Authentication/Token");
const AddressDetails = require("./Types/General/AddressDetails");
const AddressPortable = require("./Types/General/AddressPortable");
const AggregatedDiscount = require("./Types/General/AggregatedDiscount");
const AmountSummaryDetail = require("./Types/General/AmountSummaryDetail");
const AmountWithBreakdown = require("./Types/General/AmountWithBreakdown");
const BillingInfo = require("./Types/General/BillingInfo");
const Configuration = require("./Types/General/Configuration");
const ContactInfo = require("./Types/General/ContactInfo");
const CustomAmount = require("./Types/General/CustomAmount");
const Discount = require("./Types/General/Discount");
const FileReference = require("./Types/General/FileReference");
const Item = require("./Types/General/Item");
const LinkDescription = require("./Types/General/LinkDescription");
const Metadata = require("./Types/General/Metadata");
const Money = require("./Types/General/Money");
const Name = require("./Types/General/Name");
const PartialPayment = require("./Types/General/PartialPayment");
const PaymentDetail = require("./Types/General/PaymentDetail");
const Payments = require("./Types/General/Payments");
const PhoneDetail = require("./Types/General/PhoneDetail");
const RecipientInfo = require("./Types/General/RecipientInfo");
const RefundDetail = require("./Types/General/RefundDetail");
const Refunds = require("./Types/General/Refunds");
const ShippingCost = require("./Types/General/ShippingCost");
const Tax = require("./Types/General/Tax");
const Invoice = require("./Types/Invoices/Invoice");
const InvoiceDetail = require("./Types/Invoices/InvoiceDetail");
const InvoiceInvoicerInfo = require("./Types/Invoices/InvoiceInvoicerInfo");
const InvoicePaymentTerm = require("./Types/Invoices/InvoicePaymentTerm");
const ListInvoicesQuery = require("./Types/Queries/ListInvoices");
const ListInvoicesResponse = require("./Types/Responses/ListInvoices");
const CancelInvoiceQuery = require("./Types/Queries/CancelInvoice");
const QrCodeQuery = require("./Types/Queries/QRCode");
const RecordPaymentQuery = require("./Types/Queries/RecordPayment");
const DeleteExternalPaymentQuery = require("./Types/Queries/DeleteExternalPayment");

// handlers
const invoices = {
  invoiceNumber: require("./Handlers/Invoices/InvoiceNumber"),
  invoices: require("./Handlers/Invoices/Invoices"),
};

class PayPal extends BasePayPal {
  constructor() {
    super();

    this.invoices = {
      invoiceNumber: new invoices.invoiceNumber(this),
      invoices: new invoices.invoices(this),
    };

    this.types = {
      general: {
        AddressDetails: AddressDetails.bind(null, this),
        AddressPortable: AddressPortable.bind(null, this),
        AggregatedDiscount: AggregatedDiscount.bind(null, this),
        AmountSummaryDetail: AmountSummaryDetail.bind(null, this),
        AmountWithBreakDown: AmountWithBreakdown.bind(null, this),
        BillingInfo: BillingInfo.bind(null, this),
        Configuration: Configuration.bind(null, this),
        ContactInfo: ContactInfo.bind(null, this),
        CustomAmount: CustomAmount.bind(null, this),
        Discount: Discount.bind(null, this),
        FileReference: FileReference.bind(null, this),
        Item: Item.bind(null, this),
        LinkDescription: LinkDescription.bind(null, this),
        Metadata: Metadata.bind(null, this),
        Money: Money.bind(null, this),
        Name: Name.bind(null, this),
        PartialPayment: PartialPayment.bind(null, this),
        PaymentDetail: PaymentDetail.bind(null, this),
        Payments: Payments.bind(null, this),
        PhoneDetail: PhoneDetail.bind(null, this),
        RecipientInfo: RecipientInfo.bind(null, this),
        RefundDetail: RefundDetail.bind(null, this),
        Refunds: Refunds.bind(null, this),
        ShippingCost: ShippingCost.bind(null, this),
        Tax: Tax.bind(null, this),
      },
      invoice: {
        Invoice: Invoice.bind(null, this),
        Detail: InvoiceDetail.bind(null, this),
        InvoicerInfo: InvoiceInvoicerInfo.bind(null, this),
        PaymentTerm: InvoicePaymentTerm.bind(null, this),
      },
      queries: {
        ListInvoices: ListInvoicesQuery.bind(null, this),
        CancelInvoice: CancelInvoiceQuery.bind(null, this),
        QRCode: QrCodeQuery.bind(null, this),
        RecordPayment: RecordPaymentQuery.bind(null, this),
        DeleteExternalPayment: DeleteExternalPaymentQuery.bind(null, this),
      },
    };
  }

  async authenticate() {
    if (this.clientId === null || this.clientSecret === null) {
      throw new Error(
        "You must configure Client ID & Secret before authenticating!"
      );
    }

    try {
      this.token = await new Token(this).requestNewToken(
        this.clientId,
        this.clientSecret
      );
    } catch (e) {
      throw e;
    }
  }

  on(event, callback) {
    return this.eventHandler.on(event, callback);
  }

  once(event, callback) {
    return this.eventHandler.once(event, callback);
  }
}

module.exports = PayPal;
