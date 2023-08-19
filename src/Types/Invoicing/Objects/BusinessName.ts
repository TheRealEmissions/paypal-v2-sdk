import { Utility, IUtility, Static } from "../../Utility.js";

export type TBusinessName = {
  business_name?: string;
};

type BusinessNameFields = {
  readonly businessName?: string;
};

export class BusinessName extends Utility implements Static<IUtility, typeof BusinessName> {
  private businessName?: string;

  public setBusinessName(businessName: string) {
    this.businessName = businessName;
    return this;
  }
  public getBusinessName() {
    return this.businessName;
  }

  public override getFields<T extends BusinessNameFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TBusinessName) {
    const businessName = new BusinessName();
    if (obj.business_name) businessName.setBusinessName(obj.business_name);
    return businessName;
  }
}
