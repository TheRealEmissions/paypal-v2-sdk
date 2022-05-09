Installation
===
```
npm install paypal-v2-sdk
```

Usage
===
To write an app using this unofficial PayPal SDK (for v2 api)
- Register for a Developer account and get your `client_id` and `client_secret` from the [PayPal Developer Portal](https://developer.paypal.com/)
- Install `paypal-v2-sdk` (ensure dependency is in your package.json)
- Require `paypal-v2-sdk` in your file (or import for ES6)
```js
const PayPal = require("paypal-v2-sdk");
```
- Configure your PayPal instance
```js
PayPal.configure("YOUR CLIENT ID", "YOUR CLIENT SECRET");
```
- Authenticate your connection (you only need to do this once)
```js
try {
  await PayPal.authenticate();
} catch (e) {
  // handle your error
}
```

Samples
===
Invoices
---
- Getting an invoice
- Returns Invoice object
```js
const Invoice = PayPal.invoices.invoices.get("id of invoice");
```

- Getting an invoice and then deleting it
```js
const Invoice = PayPal.invoices.invoices.get("id of invoice");
const deleted = await Invoice.delete();
console.log(deleted); // true
```

- Getting the next invoice number & then creating an invoice **using the builder** (EXAMPLE)
```js
const nextNumber = await PayPal.invoices.invoiceNumber.generate()
const Invoice = new PayPal.types.invoice.Invoice()
  .setDetail(
    new PayPal.types.invoice.Detail()
      .setCurrencyCode("USD")
      .setNote("Creating an invoice!")
      .setTermsAndConditions("url here")
      .setInvoiceNumber(nextNumber)
  )
  .setInvoicer(
    new PayPal.types.invoice.InvoicerInfo()
      .setEmailAddress("test@test.com")
      .setPhones(
        [
          new PayPal.types.general.PhoneDetail()
            .setCountryCode("44")
            .setNationalNumber("123456")
        ]
      )
      .setWebsite("https://mystore.com/")
      .setTaxId("your tax id")
      .setLogoUrl("url")
  )
  .setPrimaryRecipients(
    [
      new PayPal.types.general.RecipientInfo()
        .setBillingInfo(
          new PayPal.types.general.BillingInfo()
            .setEmailAddress("test@test.com")
            .setAdditionalInfo("additional info")
        )
        .setShippingInfo(
          new PayPal.types.general.ContactInfo()
            .setBusinessName("My Cool Business")
            .setName(
              new PayPal.types.general.Name()
                .setPrefix("Mr")
                .setGivenName("Thomas")
                .setSurname("Whoever")
            )
            .setAddress(
              new PayPal.types.general.AddressPortable()
                .setAddressLines(["12 London Way"])
                .setAdminArea(["Admin area 4", "Some neighborhood", "Leeds", "East Yorkshire"])
                .setPostalCode("LE12 AH7")
                .setCountryCode("GB")
            )
        )
    ],
    [ // another one? ]
  )
  .setItems(
    [
      new PayPal.types.general.Item()
        .setName("T-Shirt")
        .setDescription("A very cool T-Shirt")
        .setQuantity("1")
        .setUnitAmount(
          new PayPal.types.general.Money()
            .setCurrencyCode("USD")
            .setValue("25")
        )
        .setTax(
          new PayPal.types.general.Tax()
            .setName("VAT")
            .setPercent("20")
        )
        .setDiscount(
          new PayPal.types.general.Discount()
            .setPercent("5")
        )
    ],
    [
      new PayPal.types.general.Item()
        .setName("Hoodie")
        .setDescription("A very very cool Hoodie")
        .setQuantity("3")
        .setUnitAmount(
          new PayPal.types.general.Money()
            .setCurrencyCode("USD")
            .setValue("40")
        )
        .setTax(
          new PayPal.types.general.Tax()
            .setName("VAT")
            .setPercent("20")
        )
        .setDiscount(
          new PayPal.types.general.Discount()
            .setPercent("15")
        )
    ]
  )
  .setConfiguration(
    new PayPal.types.general.Configuration()
      .setTaxCalculatedAfterDiscount(true)
      .setTaxInclusive(false)
      .setAllowTip(true)
      .setPartialPayment(
        new PayPal.types.general.PartialPayment()
          .setAllowPartialPayment(true)
          .setMinimumAmountDue(
            new PayPal.types.general.Money()
              .setCurrencyCode("USD")
              .setValue("72.5")
          )
      )
  )
  .setAmount(
    new PayPal.types.general.AmountSummaryDetail()
      .setBreakdown(
        new PayPal.types.general.AmountWithBreakdown()
          .setShipping(
            new PayPal.types.general.ShippingCost()
              .setTax(
                new PayPal.types.general.Tax()
                  .setName("Shipping Fee")
                  .setAmount(
                    new PayPal.types.general.Money()
                      .setCurrencyCode("USD")
                      .setValue("5.99")
                  )
              )
          )
          .setDiscount(
            new PayPal.types.general.AggregatedDiscount()
              .setInvoiceDiscount(
                new PayPal.types.general.Discount()
                  .setPercent("10")
              )
          )
      )
  )
```

Debugging
===
`paypal-v2-sdk` has a built-in Event Emitter.

You can output debug messages:
```js
PayPal.on("debug", (str) => console.debug(str));
```