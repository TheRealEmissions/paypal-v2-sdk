import PayPal from "../../PayPal";
import Types from "../Types";

export type TBusinessName = {
  business_name: string;
};

class BusinessName extends Types {
  businessName: string;
  constructor() {
    super();
  }

  setBusinessName(businessName: string) {
    this.businessName = businessName;
    return this;
  }

  override fromObject(obj: TBusinessName) {
    this.businessName = obj.business_name;
    return this;
  }
}

export default BusinessName;
