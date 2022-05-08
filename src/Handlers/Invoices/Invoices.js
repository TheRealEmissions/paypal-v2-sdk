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
const Name = require("../../Types/General/Name");
const AddressPortable = require("../../Types/General/AddressPortable");
const AddressDetails = require("../../Types/General/AddressDetails");
const Item = require("../../Types/General/Item");
const Money = require("../../Types/General/Money");
const Tax = require("../../Types/General/Tax");
const Discount = require("../../Types/General/Discount");
const Configuration = require("../../Types/General/Configuration");
const PartialPayment = require("../../Types/General/PartialPayment");
const AmountSummaryDetail = require("../../Types/General/AmountSummaryDetail");
const AmountWithBreakdown = require("../../Types/General/AmountWithBreakdown");
const AggregatedDiscount = require("../../Types/General/AggregatedDiscount");
const ShippingCost = require("../../Types/General/ShippingCost");
const CustomAmount = require("../../Types/General/CustomAmount");
const Payments = require("../../Types/General/Payments");
const PaymentDetail = require("../../Types/General/PaymentDetail");
const Refunds = require("../../Types/General/Refunds");
const RefundDetail = require("../../Types/General/RefundDetail");
const LinkDescription = require("../../Types/General/LinkDescription");

class Invoices extends InvoicesAPI {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    super(PayPal.token);
    this.PayPal = PayPal;
  }

  constructInvoice(data) {
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
        data.primary_recipients.map((x) =>
          new RecipientInfo(this.PayPal)
            .setBillingInfo(
              new BillingInfo(this.PayPal)
                .setEmailAddress(x.billing_info.email_address)
                .setPhones(
                  x.phones.map((y) =>
                    new PhoneDetail()
                      .setCountryCode(y.country_code)
                      .setNationalNumber(y.national_number)
                      .setExtensionNumber(y.extension_number)
                      .setPhoneType(x.phone_type)
                  )
                )
                .setAdditionalInfo(x.additional_info)
                .setLanguage(x.language)
            )
            .setShippingInfo(
              new ContactInfo(this.PayPal)
                .setBusinessName(x.shipping_info.business_name)
                .setName(
                  new Name(this.PayPal)
                    .setPrefix(x.shipping_info.name.prefix)
                    .setGivenName(x.shipping_info.name.given_name)
                    .setSurname(x.shipping_info.name.surname)
                    .setMiddleName(x.shipping_info.name.middle_name)
                    .setSuffix(x.shipping_info.name.suffix)
                    .setFullName(x.shipping_info.name.full_name)
                )
                .setAddress(
                  new AddressPortable(this.PayPal)
                    .setAddressLines([
                      x.shipping_info.address.address_line_1,
                      x.shipping_info.address.address_line_2,
                      x.shipping_info.address.address_line_3,
                    ])
                    .setAdminArea([
                      x.shipping_info.address.admin_area_4,
                      x.shipping_info.address.admin_area_3,
                      x.shipping_info.address.admin_area_2,
                      x.shipping_info.address.admin_area_1,
                    ])
                    .setPostalCode(x.shipping_info.address.postal_code)
                    .setCountryCode(x.shipping_info.address.country_code)
                    .setAddressDetails(
                      new AddressDetails(this.PayPal)
                        .setStreetNumber(
                          x.shipping_info.address.address_details.street_number
                        )
                        .setStreetName(
                          x.shipping_info.address.address_details.street_name
                        )
                        .setStreetType(
                          x.shipping_info.address.address_details.street_type
                        )
                        .setDeliveryService(
                          x.shipping_info.address.address_details
                            .delivery_service
                        )
                        .setBuildingName(
                          x.shipping_info.address.address_details.building_name
                        )
                        .setSubBuilding(
                          x.shipping_info.address.address_details.sub_building
                        )
                    )
                )
            )
        )
      )
      .setAdditionalRecipients(
        data.additional_recipients.map((x) => x.email_address)
      )
      .setItems(
        data.items.map((x) =>
          new Item(this.PayPal)
            .setId(x.id)
            .setName(x.name)
            .setDescription(x.description)
            .setQuantity(x.quantity)
            .setUnitAmount(
              new Money(this.PayPal)
                .setCurrencyCode(x.unit_amount.currency_code)
                .setValue(x.unit_amount.value)
            )
            .setTax(
              new Tax(this.PayPal)
                .setName(x.tax.name)
                .setPercent(x.tax.percent)
                .setAmount(
                  new Money(this.PayPal)
                    .setCurrencyCode(x.tax.amount.currency_code)
                    .setValue(x.tax.amount.value)
                )
            )
            .setItemDate(x.item_date)
            .setDiscount(
              new Discount(this.PayPal)
                .setPercent(x.discount.percent)
                .setAmount(
                  new Money(this.PayPal)
                    .setCurrencyCode(x.discount.amount.currency_code)
                    .setValue(x.discount.amount.value)
                )
            )
            .setUnitOfMeasure(x.unit_of_measure)
        )
      )
      .setConfiguration(
        new Configuration(this.PayPal)
          .setTaxCalculatedAfterDiscount(
            data.configuration.tax_calculated_after_discount
          )
          .setTaxInclusive(data.configuration.tax_inclusive)
          .setAllowTip(data.configuration.allow_tip)
          .setPartialPayment(
            new PartialPayment(this.PayPal)
              .setAllowPartialPayment(
                data.configuration.partial_payment.allow_partial_payment
              )
              .setMinimumAmountDue(
                new Money(this.PayPal)
                  .setCurrencyCode(
                    data.configuration.partial_payment.minimum_amount_due
                      .currency_code
                  )
                  .setValue(
                    data.configuration.partial_payment.minimum_amount_due.value
                  )
              )
          )
          .setTemplateId(data.configuration.template_id)
      )
      .setAmount(
        new AmountSummaryDetail(this.PayPal)
          .setCurrencyCode(data.amount.currency_code)
          .setValue(data.amount.value)
          .setBreakdown(
            new AmountWithBreakdown(this.PayPal)
              .setItemTotal(
                new Money(this.PayPal)
                  .setCurrencyCode(
                    data.amount.breakdown.item_total.currency_code
                  )
                  .setValue(data.amount.breakdown.item_total.value)
              )
              .setDiscount(
                new AggregatedDiscount(this.PayPal)
                  .setInvoiceDiscount(
                    new Discount(this.PayPal)
                      .setPercent(
                        data.amount.breakdown.discount.invoice_discount.percent
                      )
                      .setAmount(
                        new Money(this.PayPal)
                          .setCurrencyCode(
                            data.amount.breakdown.discount.invoice_discount
                              .amount.currency_code
                          )
                          .setValue(
                            data.amount.breakdown.discount.invoice_discount
                              .amount.value
                          )
                      )
                  )
                  .setItemDiscount(
                    new Money(this.PayPal)
                      .setCurrencyCode(
                        data.amount.breakdown.discount.item_discount
                          .currency_code
                      )
                      .setValue(
                        data.amount.breakdown.discount.item_discount.value
                      )
                  )
              )
              .setTaxTotal(
                new Money(this.PayPal)
                  .setCurrencyCode(
                    data.amount.breakdown.tax_total.currency_code
                  )
                  .setValue(data.amount.breakdown.tax_total.value)
              )
              .setShipping(
                new ShippingCost(this.PayPal)
                  .setAmount(
                    new Money(this.PayPal)
                      .setCurrencyCode(
                        data.amount.breakdown.shipping.amount.currency_code
                      )
                      .setValue(data.amount.breakdown.shipping.amount.value)
                  )
                  .setTax(
                    new Tax(this.PayPal)
                      .setName(data.amount.breakdown.shipping.tax.name)
                      .setPercent(data.amount.breakdown.shipping.tax.percent)
                      .setAmount(
                        new Money(this.PayPal)
                          .setCurrencyCode(
                            data.amount.breakdown.shipping.tax.amount
                              .currency_code
                          )
                          .setValue(
                            data.amount.breakdown.shipping.tax.amount.value
                          )
                      )
                  )
              )
              .setCustom(
                new CustomAmount(this.PayPal)
                  .setLabel(data.amount.breakdown.custom.label)
                  .setAmount(
                    new Money(this.PayPal)
                      .setCurrencyCode(
                        data.amount.breakdown.custom.amount.currency_code
                      )
                      .setValue(data.amount.breakdown.custom.amount.value)
                  )
              )
          )
      )
      .setDueAmount(
        new Money(this.PayPal)
          .setCurrencyCode(data.due_amount.currency_code)
          .setValue(data.due_amount.value)
      )
      .setGratuity(
        new Money(this.PayPal)
          .setCurrencyCode(data.gratuity.currency_code)
          .setValue(data.gratuity.value)
      )
      .setPayments(
        new Payments(this.PayPal)
          .setPaidAmount(
            new Money(this.PayPal)
              .setCurrencyCode(data.payments.paid_amount.currency_code)
              .setValue(data.payments.paid_amount.value)
          )
          .setTransactions(
            data.payments.transactions.map((x) =>
              new PaymentDetail(this.PayPal)
                .setType(x.type)
                .setPaymentId(x.payment_id)
                .setPaymentDate(x.payment_date)
                .setMethod(x.method)
                .setNote(x.note)
                .setAmount(
                  new Money(this.PayPal)
                    .setCurrencyCode(x.amount.currency_code)
                    .setValue(x.amount.value)
                )
                .setShippingInfo(
                  new ContactInfo(this.PayPal)
                    .setBusinessName(x.shipping_info.business_name)
                    .setName(
                      new Name(this.PayPal)
                        .setPrefix(x.shipping_info.name.prefix)
                        .setGivenName(x.shipping_info.name.given_name)
                        .setSurname(x.shipping_info.name.surname)
                        .setMiddleName(x.shipping_info.name.middle_name)
                        .setSuffix(x.shipping_info.name.suffix)
                        .setFullName(x.shipping_info.name.full_name)
                    )
                    .setAddress(
                      new AddressPortable(this.PayPal)
                        .setAddressLines([
                          x.shipping_info.address.address_line_1,
                          x.shipping_info.address.address_line_2,
                          x.shipping_info.address.address_line_3,
                        ])
                        .setAdminArea([
                          x.shipping_info.address.admin_area_4,
                          x.shipping_info.address.admin_area_3,
                          x.shipping_info.address.admin_area_2,
                          x.shipping_info.address.admin_area_1,
                        ])
                        .setPostalCode(x.shipping_info.address.postal_code)
                        .setCountryCode(x.shipping_info.address.country_code)
                        .setAddressDetails(
                          new AddressDetails(this.PayPal)
                            .setStreetNumber(
                              x.shipping_info.address.address_details
                                .street_number
                            )
                            .setStreetName(
                              x.shipping_info.address.address_details
                                .street_name
                            )
                            .setStreetType(
                              x.shipping_info.address.address_details
                                .street_type
                            )
                            .setDeliveryService(
                              x.shipping_info.address.address_details
                                .delivery_service
                            )
                            .setBuildingName(
                              x.shipping_info.address.address_details
                                .building_name
                            )
                            .setSubBuilding(
                              x.shipping_info.address.address_details
                                .sub_building
                            )
                        )
                    )
                )
            )
          )
      )
      .setRefunds(
        new Refunds(this.PayPal)
          .setRefundAmount(
            new Money(this.PayPal)
              .setCurrencyCode(data.refunds.refund_amount.currency_code)
              .setValue(data.refunds.refund_amount.value)
          )
          .setTransactions(
            data.refunds.transactions.map((x) =>
              new RefundDetail(this.PayPal)
                .setType(x.type)
                .setRefundId(x.refund_id)
                .setRefundDate(x.refund_date)
                .setAmount(
                  new Money(this.PayPal)
                    .setCurrencyCode(x.amount.currency_code)
                    .setValue(x.amount.value)
                )
                .setMethod(x.method)
            )
          )
      )
      .setLinks(
        data.links.map((x) =>
          new LinkDescription(this.PayPal)
            .setHref(x.href)
            .setRel(x.rel)
            .setMethod(x.method)
        )
      );
    return invoice;
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
    const invoice = this.constructInvoice(data);
    return invoice;
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
