import { IUtility, Static, Utility } from "../../Utility.js";

export type TSeller = {
  email?: string;
  merchant_id?: string;
  name?: string;
};

type SellerFields = {
  readonly email?: string;
  readonly merchantId?: string;
  readonly name?: string;
};

export class Seller extends Utility implements Static<IUtility, typeof Seller> {
  private email?: string;
  private merchantId?: string;
  private name?: string;

  public setEmail(email: string) {
    this.email = email;
    return this;
  }
  public getEmail() {
    return this.email;
  }

  public setMerchantId(merchantId: string) {
    this.merchantId = merchantId;
    return this;
  }
  public getMerchantId() {
    return this.merchantId;
  }

  public setName(name: string) {
    this.name = name;
    return this;
  }
  public getName() {
    return this.name;
  }

  public override getFields<T extends SellerFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TSeller) {
    const seller = new Seller();
    if (obj.email) seller.setEmail(obj.email);
    if (obj.merchant_id) seller.setMerchantId(obj.merchant_id);
    if (obj.name) seller.setName(obj.name);
    return seller;
  }
}
