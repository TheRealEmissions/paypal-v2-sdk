import PayPal from "../../PayPal";
import Types from "../Types";

class BusinessName extends Types {
  businessName: string;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setBusinessName(businessName: string) {
    this.businessName = businessName;
    return this;
  }
}

export default BusinessName;
