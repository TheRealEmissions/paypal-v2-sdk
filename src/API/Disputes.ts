import PayPal from "../PayPal";

class Disputes {
  protected PayPal: PayPal;
  constructor(PayPal: PayPal) {
    this.PayPal = PayPal;
  }
}
