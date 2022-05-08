const BasePayPal = require("./BasePayPal");

const Token = require("./API/Authentication/Token");

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
