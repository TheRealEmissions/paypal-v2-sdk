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
const QrCodeQuery = require("./Types/Queries/QRCode");
const RecordPaymentQuery = require("./Types/Queries/RecordPayment");
const DeleteExternalQuery = require("./Types/Queries/DeleteExternal");
const AmountRange = require("./Types/General/AmountRange");
const DateRange = require("./Types/General/DateRange");
const Field = require("./Types/General/Field");
const NotificationQuery = require("./Types/Queries/NotificationQuery");
const RecordRefundQuery = require("./Types/Queries/RecordRefund");
const SearchInvoicesQuery = require("./Types/Queries/SearchInvoices");

// handlers
const invoices = {
  invoiceNumber: require("./Handlers/Invoices/InvoiceNumber"),
  invoices: require("./Handlers/Invoices/Invoices"),
};

class PayPal extends BasePayPal {
  constructor() {
    super();

    this.Handler = {
      invoiceNumber: new invoices.invoiceNumber(this),
      invoices: new invoices.invoices(this),
    };

    this.Queries = {
      ListInvoices: ListInvoicesQuery.bind(null, this),
      QRCode: QrCodeQuery.bind(null, this),
      RecordPayment: RecordPaymentQuery.bind(null, this),
      DeleteExternal: DeleteExternalQuery.bind(null, this),
      Notification: NotificationQuery.bind(null, this),
      RecordRefund: RecordRefundQuery.bind(null, this),
      SearchInvoices: SearchInvoicesQuery.bind(null, this),
    };

    this.AddressDetails = AddressDetails.bind(null, this);
    this.AddressPortable = AddressPortable.bind(null, this);
    this.AggregatedDiscount = AggregatedDiscount.bind(null, this);
    this.AmountSummaryDetail = AmountSummaryDetail.bind(null, this);
    this.AmountWithBreakDown = AmountWithBreakdown.bind(null, this);
    this.BillingInfo = BillingInfo.bind(null, this);
    this.Configuration = Configuration.bind(null, this);
    this.ContactInfo = ContactInfo.bind(null, this);
    this.CustomAmount = CustomAmount.bind(null, this);
    this.Discount = Discount.bind(null, this);
    this.FileReference = FileReference.bind(null, this);
    this.Item = Item.bind(null, this);
    this.LinkDescription = LinkDescription.bind(null, this);
    this.Metadata = Metadata.bind(null, this);
    this.Money = Money.bind(null, this);
    this.Name = Name.bind(null, this);
    this.PartialPayment = PartialPayment.bind(null, this);
    this.PaymentDetail = PaymentDetail.bind(null, this);
    this.Payments = Payments.bind(null, this);
    this.PhoneDetail = PhoneDetail.bind(null, this);
    this.RecipientInfo = RecipientInfo.bind(null, this);
    this.RefundDetail = RefundDetail.bind(null, this);
    this.Refunds = Refunds.bind(null, this);
    this.ShippingCost = ShippingCost.bind(null, this);
    this.Tax = Tax.bind(null, this);
    this.AmountRange = AmountRange.bind(null, this);
    this.DateRange = DateRange.bind(null, this);
    this.Field = Field.bind(null, this);
    this.Invoice = Invoice.bind(null, this);
    this.Detail = InvoiceDetail.bind(null, this);
    this.InvoicerInfo = InvoiceInvoicerInfo.bind(null, this);
    this.PaymentTerm = InvoicePaymentTerm.bind(null, this);
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
        this.clientSecret,
        this.sandbox
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
