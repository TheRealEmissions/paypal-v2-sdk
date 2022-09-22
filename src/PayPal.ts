import BasePayPal from "./BasePayPal";

class PayPal extends BasePayPal {
  constructor() {
    super();
  }

  async authenticate() {
    if (this.clientId === null || this.clientSecret === null) {
      throw new Error("PayPal not configured! Try PayPal.Configure() first!");
    }

    try {
      await this.Auth.requestNewToken(this.clientId, this.clientSecret, this.sandbox);
    } catch (e) {
      throw e;
    }

    this.emit("debug", "PayPal Authenticated!");
  }
}

export default PayPal;
