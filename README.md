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
  Returns Invoice object

```ts
import PayPal from "paypal-v2-sdk";
import Invoice from "paypal-v2-sdk/dist/src/Types/Objects/Invoice";
const invoice: Invoice = await PayPal.Invoicing.get("id of invoice");
```

- Getting an invoice and then deleting it

```ts
import PayPal from "paypal-v2-sdk";
import Invoice from "paypal-v2-sdk/dist/src/Types/Objects/Invoice";

const invoice: Invoice = await PayPal.Invoicing.get("id of invoice");
const deleted = await invoice.delete();
console.log(deleted); // true if deleted, false if not
```

- Creating an invoice object and then creating a draft invoice on PayPal (fetches next invoice number for you)

```ts
import PayPal from "paypal-v2-sdk";
import { UnitOfMeasure } from "paypal-v2-sdk/dist/src/Types/Enums/UnitOfMeasure";
import AddressDetails from "paypal-v2-sdk/dist/src/Types/Objects/AddressDetails";
import AddressPortable from "paypal-v2-sdk/dist/src/Types/Objects/AddressPortable";
import BillingInfo from "paypal-v2-sdk/dist/src/Types/Objects/BillingInfo";
import Configuration from "paypal-v2-sdk/dist/src/Types/Objects/Configuration";
import ContactInformation from "paypal-v2-sdk/dist/src/Types/Objects/ContactInformation";
import EmailAddress from "paypal-v2-sdk/dist/src/Types/Objects/EmailAddress";
import Invoice from "paypal-v2-sdk/dist/src/Types/Objects/Invoice";
import InvoiceDetail from "paypal-v2-sdk/dist/src/Types/Objects/InvoiceDetail";
import InvoicePaymentTerm from "paypal-v2-sdk/dist/src/Types/Objects/InvoicePaymentTerm";
import InvoicerInfo from "paypal-v2-sdk/dist/src/Types/Objects/InvoicerInfo";
import Item from "paypal-v2-sdk/dist/src/Types/Objects/Item";
import Money from "paypal-v2-sdk/dist/src/Types/Objects/Money";
import Name from "paypal-v2-sdk/dist/src/Types/Objects/Name";
import PartialPayment from "paypal-v2-sdk/dist/src/Types/Objects/PartialPayment";
import PhoneDetail from "paypal-v2-sdk/dist/src/Types/Objects/PhoneDetail";
import RecipientInfo from "paypal-v2-sdk/dist/src/Types/Objects/RecipientInfo";
import Tax from "paypal-v2-sdk/dist/src/Types/Objects/Tax";

let invoice: Invoice = new Invoice(PayPal)
  .setAdditionalRecipients([
    new EmailAddress().setEmailAddress("some@email.com"),
    new EmailAddress().setEmailAddress("another@website.com"),
  ])
  .setConfiguration(
    new Configuration()
      .setAllowTip(true)
      .setPartialPayment(
        new PartialPayment()
          .setAllowPartialPayment(true)
          .setMinimumAmountDue(new Money().setCurrencyCode("USD").setValue("10.00"))
      )
      .setTaxCalculatedAfterDiscount(false)
  )
  .setDetail(
    new InvoiceDetail()
      .setCurrencyCode("USD")
      .setMemo("Some memo")
      .setNote("some note")
      .setPaymentTerm(new InvoicePaymentTerm().setTermType("NET_45"))
  )
  .setInvoicer(
    new InvoicerInfo()
      .setEmailAddress("company@some.com")
      .setAdditionalNotes("some additional notes")
      .setLogoUrl("https://logo.com/image.png")
      .setPhones([new PhoneDetail().setCountryCode("44").setNationalNumber("123456")])
      .setTaxId("123456789")
      .setWebsite("https://website.com")
  )
  .setItems([
    new Item()
      .setItemDescription("some description")
      .setItemName("some name")
      .setItemUnitAmount(new Money().setCurrencyCode("USD").setValue("20.00"))
      .setItemTax(new Tax().setPercent("10").setName("Processing Fee"))
      .setItemUnitOfMeasure(UnitOfMeasure.QUANTITY),
  ])
  .setPrimaryRecipients([
    new RecipientInfo()
      .setBillingInfo(new BillingInfo().setEmailAddress("customer@some.com").setLanguage("en_US"))
      .setShippingInfo(
        new ContactInformation()
          .setAddress(
            new AddressPortable()
              .setAddressDetails(
                new AddressDetails()
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
          .setName(
            new Name()
              .setFullName("some full name")
              .setGivenName("some given name")
              .setSurname("some surname")
              .setMiddleName("some middle name")
              .setPrefix("some prefix")
              .setSuffix("some suffix")
              .setSurname("some surname")
          )
      ),
  ]);
invoice = await invoice.createDraft(true);
const sentInvoice = await invoice.send(undefined, undefined, true, true, undefined);
if (typeof sentInvoice === "string") {
  console.error("invoice failed to send", sentInvoice);
} else {
  invoice = sentInvoice;
}
```

- Getting the next invoice number & creating an invoice **via an object**

```js
import PayPal from "paypal-v2-sdk";
import Invoice from "paypal-v2-sdk/dist/src/Types/Objects/Invoice";

let invoice: Invoice = new Invoice(PayPal).fromObject({
  detail: {
    invoice_number: "#123",
    reference: "deal-ref",
    invoice_date: "2018-11-12",
    currency_code: "USD",
    note: "Thank you for your business.",
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
});
invoice = await invoice.createDraft(true);
const sentInvoice = await invoice.send(undefined, undefined, true, true, undefined);
if (typeof sentInvoice === "string") {
  console.error("invoice failed to send", sentInvoice);
} else {
  invoice = sentInvoice;
}
```

# Debugging

`paypal-v2-sdk` has a built-in Event Emitter.

You can output debug messages:

```js
PayPal.on("debug", (str) => console.debug(str));
```
