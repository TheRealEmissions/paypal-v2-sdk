const PayPalClass = require("../../PayPal");
const InvoicesAPI = require("../../API/Invoices/Invoices");

const Invoice = require("../../Types/Invoices/Invoice");
const InvoiceDetail = require("../../Types/Invoices/InvoiceDetail");
const FileReference = require("../../Types/General/FileReference");
const InvoicePaymentTerm = require("../../Types/Invoices/InvoicePaymentTerm");
const Metadata = require("../../Types/General/Metadata");
const InvoiceInvoicerInfo = require("../../Types/Invoices/InvoiceInvoicerInfo");
const PhoneDetail = require("../../Types/General/PhoneDetail");
const RecipientInfo = require("../../Types/General/RecipientInfo");
const BillingInfo = require("../../Types/General/BillingInfo");
const ContactInfo = require("../../Types/General/ContactInfo");

class Invoices extends InvoicesAPI {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    super(PayPal.token);
    this.PayPal = PayPal;
  }

  // list invoices OR view invoice details
  // returns invoice object (type)
  /**
   *
   * @param {String} id
   * @returns {Invoice}
   */
  async get(id) {
    const data = await super.get(id);

    const invoice = new Invoice(this.PayPal)
      .setId(data.id)
      .setParentId(data.parent_id)
      .setStatus(data.status)
      .setDetail(
        new InvoiceDetail(this.PayPal)
          .setReference(data.detail.reference)
          .setCurrencyCode(data.detail.currency_code)
          .setNote(data.detail.note)
          .setTermsAndConditions(data.detail.terms_and_conditions)
          .setMemo(data.detail.memo)
          .setAttachments(
            data.detail.attachments.map((x) =>
              new FileReference(this.PayPal)
                .setId(x.id)
                .setReferenceUrl(x.reference_url)
                .setContentType(x.content_type)
                .setCreateTime(x.create_time)
                .setSize(x.size)
            )
          )
          .setInvoiceNumber(data.detail.invoice_number)
          .setInvoiceDate(data.detail.invoice_date)
          .setPaymentTerm(
            new InvoicePaymentTerm(this.PayPal)
              .setTermType(data.detail.payment_term.term_type)
              .setDueDate(data.detail.payment_term.due_date)
          )
          .setMetadata(
            new Metadata(this.PayPal)
              .setCreateTime(data.detail.metadata.create_time)
              .setCreatedBy(data.detail.metadata.created_by)
              .setLastUpdateTime(data.detail.metadata.last_update_time)
              .setLastUpdatedBy(data.detail.metadata.last_updated_by)
              .setCancelTime(data.detail.metadata.cancel_time)
              .setCancelledBy(data.detail.metadata.cancelled_by)
              .setFirstTimeSent(data.detail.metadata.first_sent_time)
              .setLastTimeSent(data.detail.metadata.last_sent_time)
              .setLastSentBy(data.detail.metadata.last_sent_by)
              .setCreatedByFlow(data.detail.metadata.created_by_flow)
              .setRecipientViewUrl(data.detail.metadata.recipient_view_url)
              .setInvoicerViewUrl(data.detail.metadata.invoicer_view_url)
          )
      )
      .setInvoicer(
        new InvoiceInvoicerInfo(this.PayPal)
          .setEmailAddress(data.invoicer.email_address)
          .setPhones(
            data.invoicer.phones.map((x) =>
              new PhoneDetail(this.PayPal)
                .setCountryCode(x.country_code)
                .setNationalNumber(x.national_numer)
                .setExtensionNumber(x.extension_number)
                .setPhoneType(x.phone_type)
            )
          )
          .setWebsite(data.invoicer.website)
          .setTaxId(data.invoicer.tax_id)
          .setAdditionalNotes(data.invoicer.additional_notes)
          .setLogoUrl(data.invoicer.logo_url)
      )
      // data.primary_recipients
      .setPrimaryRecipients(
        data.primary_recipients.map((x) => new RecipientInfo(this.PayPal))
      );
  }

  // create new invoice
  // returns invoice object (type)
  async create() {}

  // delete an invoice BY ID (can also delete via invoice object)
  async delete() {}

  // uses same builder as create BY ID (can also update via invoice object)
  async fullUpdate() {}

  // cancel a SENT invoice BY ID (can also cancel via invoice object)
  async cancel() {}
}

module.exports = Invoices;
