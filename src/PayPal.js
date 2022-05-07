const BasePayPal = require("./BasePayPal");

const Token = require("./API/Authentication/Token");

class PayPal extends BasePayPal {
  token = null;
  clientId = null;
  clientSecret = null;

  constructor() {
    super();
  }

  async authenticate() {
    if (this.clientId === null || this.clientSecret === null) {
      throw new Error(
        "You must configure Client ID & Secret before authenticating!"
      );
    }

    try {
      this.token = await new Token(this.eventHandler).requestNewToken(
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
