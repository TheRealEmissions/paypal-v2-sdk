import BasePayPal from "./BasePayPal.js";

class PayPal extends BasePayPal {
  async authenticate() {
    if (this.getClientId() === null || this.getClientSecret() === null) {
      throw new Error("PayPal not configured! Try PayPal.Configure() first!");
    }

    try {
      await this.getAuth().requestNewToken(
        this.getClientId() as string,
        this.getClientSecret() as string,
        this.isSandbox()
      );
    } catch (e) {
      this.emit("error", e);
      throw e;
    }

    this.emit("debug", "PayPal Authenticated!");
  }
}

export default PayPal;
