import PayPal from "../../PayPal";
import Types from "../Types";

class EmailAddress extends Types {
  emailAddress: string;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setEmailAddress(emailAddress: string) {
    this.emailAddress = emailAddress;
    return this;
  }
}

export default EmailAddress;
