# Installation

```
npm install paypal-v2-sdk
```

# Usage

To write an app using this unofficial PayPal SDK (for v2 api)

- Register for a Developer account and get your `client_id` and `client_secret` from the [PayPal Developer Portal](https://developer.paypal.com/)
- Install `paypal-v2-sdk` (ensure dependency is in your package.json)
- Import `paypal-v2-sdk` in your file

```ts
import PayPal from "paypal-v2-sdk";
```

- Configure your PayPal instance (last param, true = sandbox, false = live)

```js
PayPal.configure("YOUR CLIENT ID", "YOUR CLIENT SECRET", true);
```

- Authenticate your connection (you only need to do this once)

```js
try {
  await PayPal.authenticate();
} catch (e) {
  console.error(e); // error while authenticating
}
```

# Samples

## Invoices

- Getting an invoice
  Returns instance of Invoice

```ts
import { default as PayPal, Invoice } from "paypal-v2-sdk";
// Specifying Invoice as the type is not necessary as #get() returns Invoice as the type, it
// is displayed here for information purposes only
const invoice: Invoice = await PayPal.Invoicing.get("id of invoice");
```

- Getting an invoice and then deleting it

```ts
import { default as PayPal, Invoice } from "paypal-v2-sdk";

const invoice: Invoice = await PayPal.Invoicing.get("id of invoice");
const deleted = await invoice.delete();
console.log(deleted); // true if deleted, false if not
```

- Creating an invoice object and then creating a draft invoice on PayPal (fetches next invoice number for you)

```ts
import { default as PayPal, Invoice } from "paypal-v2-sdk";
let invoice: Invoice = new Invoice(PayPal)
  .setAdditionalRecipients(
    (recipient) => recipient.setEmailAddress("some@email.com"),
    (recipient) => recipient.setEmailAddress("another@website.com")
  )
  .setConfiguration((configuration) =>
    configuration
      .setAllowTip(true)
      .setPartialPayment((partialPayment) =>
        partialPayment
          .setAllowPartialPayment(true)
          .setMinimumAmountDue((money) => money.setCurrencyCode("USD").setValue("10.00"))
      )
      .setTaxCalculatedAfterDiscount(false)
  )
  .setDetail((invoiceDetail) =>
    invoiceDetail
      .setCurrencyCode("USD")
      .setMemo("some memo")
      .setNote("some note")
      .setPaymentTerm((paymentTerm) => paymentTerm.setTermType("NET_45"))
  )
  .setInvoicer((invoicer) =>
    invoicer
      .setEmailAddress("company@some.com")
      .setAdditionalNotes("some additional notes")
      .setLogoUrl("https://logo.com/image.png")
      .setPhones(
        (phone) => phone.setCountryCode("44").setNationalNumber("123456"),
        (phone) => phone.setCountryCode("44").setNationalNumber("345678")
      )
      .setTaxId("123456789")
      .setWebsite("https://website.com/")
  )
  .setItems(
    (item) =>
      item
        .setItemDescription("some description")
        .setItemName("some name")
        .setItemUnitAmount((money) => money.setCurrencyCode("USD").setValue("20.00"))
        .setItemTax((tax) => tax.setPercent("10").setName("Processing Fee"))
        .setItemUnitOfMeasure((unitOfMeasure) => unitOfMeasure.QUANTITY),
    (item) =>
      item
        .setItemDescription("another description")
        .setItemName("another name")
        .setItemUnitAmount((money) => money.setCurrencyCode("USD").setValue("10.00"))
        .setItemTax((tax) => tax.setPercent("10").setName("Processing Fee"))
        .setItemUnitOfMeasure((unitOfMeasure) => unitOfMeasure.QUANTITY)
  )
  .setPrimaryRecipients((recipient) =>
    recipient
      .setBillingInfo((billingInfo) => billingInfo.setEmailAddress("customer@some.com").setLanguage("en_US"))
      .setShippingInfo((contactInfo) =>
        contactInfo
          .setAddress((address) =>
            address
              .setAddressDetails((addressDetails) =>
                addressDetails
                  .setBuildingName("some building")
                  .setStreetName("some street")
                  .setStreetNumber("123")
                  .setStreetType("some street type")
                  .setSubBuilding("some sub building")
              )
              .setAddressLine1("some address line 1")
              .setAddressLine2("some address line 2")
              .setAddressLine3("some address line 3")
              .setAdminArea1("some area 1")
              .setCountryCode("GB")
              .setPostalCode("12345")
          )
          .setBusinessName("some business name")
          .setName((name) =>
            name
              .setFullName("some full name")
              .setGivenName("some given name")
              .setSurname("some surname")
              .setMiddleName("some middle name")
              .setPrefix("some prefix")
              .setSuffix("some suffix")
              .setSurname("some surname")
          )
      )
  );
invoice = await invoice.createDraft(/* Generate Next Invoice Number */ true);

try {
  invoice = await invoice.send(
    /*Additional Recipients*/ undefined,
    /*Note*/ undefined,
    /*Send to Invoicer*/ true,
    /*Send to Recipient*/ true,
    /*Subject*/ undefined
  );
} catch (e) {
  console.error(e);
  return;
}

console.log(invoice.toJson()); // the updated invoice
```

- Getting the next invoice number & creating an invoice **via an object**

```js
import { default as PayPal, Invoice } from "paypal-v2-sdk";

let invoice: Invoice = Invoice.fromObject({
  detail: {
    invoice_number: "123",
    reference: "deal-ref",
    invoice_date: "2018-11-12",
    currency_code: "USD",
    note: "Thank you for your busin.0ess.",
    term: "No refunds after 30 days.",
    memo: "This is a long contract",
    payment_term: {
      term_type: "NET_10",
      due_date: "2018-11-22",
    },
  },
  invoicer: {
    name: {
      given_name: "David",
      surname: "Larusso",
    },
    address: {
      address_line_1: "1234 First Street",
      address_line_2: "337673 Hillside Court",
      admin_area_2: "Anytown",
      admin_area_1: "CA",
      postal_code: "98765",
      country_code: "US",
    },
    email_address: "merchant@example.com",
    phones: [
      {
        country_code: "001",
        national_number: "4085551234",
        phone_type: "MOBILE",
      },
    ],
    website: "www.test.com",
    tax_id: "ABcNkWSfb5ICTt73nD3QON1fnnpgNKBy- Jb5SeuGj185MNNw6g",
    logo_url: "https://example.com/logo.PNG",
    additional_notes: "2-4",
  },
  primary_recipients: [
    {
      billing_info: {
        name: {
          given_name: "Stephanie",
          surname: "Meyers",
        },
        address: {
          address_line_1: "1234 Main Street",
          admin_area_2: "Anytown",
          admin_area_1: "CA",
          postal_code: "98765",
          country_code: "US",
        },
        email_address: "bill-me@example.com",
        phones: [
          {
            country_code: "001",
            national_number: "4884551234",
            phone_type: "HOME",
          },
        ],
        additional_info_value: "add-info",
      },
      shipping_info: {
        name: {
          given_name: "Stephanie",
          surname: "Meyers",
        },
        address: {
          address_line_1: "1234 Main Street",
          admin_area_2: "Anytown",
          admin_area_1: "CA",
          postal_code: "98765",
          country_code: "US",
        },
      },
    },
  ],
  items: [
    {
      name: "Yoga Mat",
      description: "Elastic mat to practice yoga.",
      quantity: "1",
      unit_amount: {
        currency_code: "USD",
        value: "50.00",
      },
      tax: {
        name: "Sales Tax",
        percent: "7.25",
      },
      discount: {
        percent: "5",
      },
      unit_of_measure: "QUANTITY",
    },
    {
      name: "Yoga t-shirt",
      quantity: "1",
      unit_amount: {
        currency_code: "USD",
        value: "10.00",
      },
      tax: {
        name: "Sales Tax",
        percent: "7.25",
      },
      discount: {
        amount: {
          currency_code: "USD",
          value: "5.00",
        },
      },
      unit_of_measure: "QUANTITY",
    },
  ],
  configuration: {
    partial_payment: {
      allow_partial_payment: true,
      minimum_amount_due: {
        currency_code: "USD",
        value: "20.00",
      },
    },
    allow_tip: true,
    tax_calculated_after_discount: true,
    tax_inclusive: false,
    template_id: "TEMP-19V05281TU309413B",
  },
  amount: {
    breakdown: {
      custom: {
        label: "Packing Charges",
        amount: {
          currency_code: "USD",
          value: "10.00",
        },
      },
      shipping: {
        amount: {
          currency_code: "USD",
          value: "10.00",
        },
        tax: {
          name: "Sales Tax",
          percent: "7.25",
        },
      },
      discount: {
        invoice_discount: {
          percent: "5",
        },
      },
    },
  },
}).setPayPal(PayPal);

invoice = await invoice.createDraft(
  /*Generate Next Invoice Number*/ true
);

try {
  // Re-assign invoice as #send() updates the Invoice object from PayPal
  invoice = await invoice.send(
    /*Additional Recipients*/ undefined,
    /*Note*/ undefined, 
    /*Send to Invoicer*/ true, 
    /*Send to Recipient*/ true, 
    /*Subject*/ undefined
  );
} catch (e) {
  // invoice failed to send, outputs statusText from API
  console.error(e);
}

console.log(invoice); // contains all updated details for the invoice
```

# Debugging

`paypal-v2-sdk` has a built-in Event Emitter.

You can output debug messages:

```js
PayPal.on("debug", (str) => console.debug(str));
```
