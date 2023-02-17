import Types, { ITypes, StaticImplements } from "../Types.js";

export type TBusinessName = {
  business_name?: string;
};

class BusinessName extends Types implements StaticImplements<ITypes, typeof BusinessName> {
  businessName?: string;
  constructor() {
    super();
  }

  setBusinessName(businessName: string) {
    this.businessName = businessName;
    return this;
  }

  static fromObject(obj: TBusinessName) {
    const businessName = new BusinessName();
    if (obj.business_name) businessName.setBusinessName(obj.business_name);
    return businessName;
  }
}

export default BusinessName;
