import Types, { ITypes, Static } from "../Types";

export type TSeller = {
  email?: string;
  merchant_id?: string;
  name?: string;
};

class Seller extends Types implements Static<ITypes, typeof Seller> {
  email?: string;
  merchantId?: string;
  name?: string;

  constructor() {
    super();
  }

  setEmail(email: string) {
    this.email = email;
    return this;
  }

  setMerchantId(merchantId: string) {
    this.merchantId = merchantId;
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  static fromObject(obj: TSeller) {
    const seller = new Seller();
    if (obj.email) seller.setEmail(obj.email);
    if (obj.merchant_id) seller.setMerchantId(obj.merchant_id);
    if (obj.name) seller.setName(obj.name);
    return seller;
  }
}

export default Seller;
