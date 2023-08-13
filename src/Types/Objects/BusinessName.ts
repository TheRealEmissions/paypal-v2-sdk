import Types, { ITypes, Static } from "../Types.js";

export type TBusinessName = {
  business_name?: string;
};

export class BusinessName extends Types implements Static<ITypes, typeof BusinessName> {
  businessName?: string;

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
