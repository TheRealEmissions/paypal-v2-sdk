import Types, { ITypes, Static } from "../Types";
import { OfferType as OfferTypeEnum } from "../Enums/OfferType";

export type TOfferType = {
  offer_type?: keyof typeof OfferTypeEnum;
};

export class OfferType extends Types implements Static<ITypes, typeof OfferType> {
  offerType?: OfferTypeEnum;

  setOfferType(offerType: OfferTypeEnum): this;
  setOfferType(offerType: (offerType: typeof OfferTypeEnum) => OfferTypeEnum): this;
  setOfferType(offerType: OfferTypeEnum | ((offerType: typeof OfferTypeEnum) => OfferTypeEnum)) {
    if (typeof offerType === "function") this.offerType = offerType(OfferTypeEnum);
    else this.offerType = offerType;
    return this;
  }

  static fromObject(obj: TOfferType) {
    const offerType = new OfferType();
    if (obj.offer_type) offerType.setOfferType(OfferTypeEnum[obj.offer_type]);
    return offerType;
  }
}
