import { Utility, IUtility, Static } from "../Utility";
import { OfferType as OfferTypeEnum } from "../Enums/OfferType";

export type TOfferType = {
  offer_type?: keyof typeof OfferTypeEnum;
};

export class OfferType extends Utility implements Static<IUtility, typeof OfferType> {
  private offerType?: OfferTypeEnum;

  public setOfferType(offerType: OfferTypeEnum): this;
  public setOfferType(offerType: (offerType: typeof OfferTypeEnum) => OfferTypeEnum): this;
  public setOfferType(offerType: OfferTypeEnum | ((offerType: typeof OfferTypeEnum) => OfferTypeEnum)) {
    if (typeof offerType === "function") this.offerType = offerType(OfferTypeEnum);
    else this.offerType = offerType;
    return this;
  }
  public getOfferType() {
    return this.offerType;
  }

  public override getFields<T extends TOfferType>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TOfferType) {
    const offerType = new OfferType();
    if (obj.offer_type) offerType.setOfferType(OfferTypeEnum[obj.offer_type]);
    return offerType;
  }
}
