const BasePayPal = require("./BasePayPal");

const Token = require("./API/Authentication/Token");

class PayPal extends BasePayPal {
  constructor() {
    super();
  }

  async authenticate() {
    if (this.clientId === null || this.clientSecret === null) {
      throw new Error(
        "You must configure Client ID & Secret before authenticating!"
      );
    }

    this.token = new Token().requestNewToken(this.clientId, this.clientSecret);
  }
}

module.exports = PayPal;
