import BasePayPal from "./BasePayPal.js";

class PayPal extends BasePayPal {
  async authenticate() {
    if (this.clientId === null || this.clientSecret === null) {
      throw new Error("PayPal not configured! Try PayPal.Configure() first!");
    }

    try {
      await this.Auth.requestNewToken(this.clientId, this.clientSecret, this.sandbox);
    } catch (e) {
      this.emit("error", e);
      throw e;
    }

    this.emit("debug", "PayPal Authenticated!");
  }
}

export default PayPal;
