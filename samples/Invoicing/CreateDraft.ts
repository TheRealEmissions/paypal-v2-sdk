import { PayPal } from "../../index";
const invoice = await PayPal.getInvoicing().createDraft((invoice) =>
  invoice
    .setAdditionalRecipients("someone@website.com", "another@website.com")
    .setAmount((amount) => amount.setCurrencyCode("USD").setValue("10.00"))
    .setConfiguration((config) =>
      config
        .setAllowTip(true)
        .setPartialPayment((partial) =>
          partial
            .setAllowPartialPayment(true)
            .setMinimumAmountDue((money) => money.setCurrencyCode("USD").setValue("5.00"))
        )
        .setTaxCalculatedAfterDiscount(true)
        .setTaxInclusive(false)
    )
    .setDetail((detail) =>
      detail
        .setCurrencyCode("USD")
        .setInvoiceNumber("0001")
        .setMemo("This is a test invoice")
        .setNote("This is a note to the payer")
        .setTermsAndConditions("https://tos.somewebsite.com/")
    )
    .setItems(
      (item) =>
        item
          .setItemDescription("Test Item")
          .setItemName("Test Item")
          .setItemQuantity("1")
          .setItemTax((tax) => tax.setPercent("10").setName("Processing Fee"))
          .setItemUnitAmount((money) => money.setCurrencyCode("USD").setValue("10.00")),
      (item) =>
        item
          .setItemDescription("Another Test Item")
          .setItemName("Another Test Item")
          .setItemQuantity("3")
          .setItemTax((tax) => tax.setPercent("10").setName("Processing Fee"))
          .setItemUnitAmount((money) => money.setCurrencyCode("USD").setValue("10.00"))
    )
);

console.log(invoice.toJson());
