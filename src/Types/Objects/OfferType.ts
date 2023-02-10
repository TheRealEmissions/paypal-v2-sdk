import Types from "../Types";
import { OfferType as OfferTypeEnum } from "../Enums/OfferType";

export type TOfferType = {
  offer_type?: string;
};

class OfferType extends Types {
  offerType?: OfferTypeEnum;
  constructor() {
    super();
  }

  setOfferType(offerType: OfferTypeEnum) {
    this.offerType = offerType;
    return this;
  }

  override fromObject(obj: TOfferType) {
    this.offerType = OfferTypeEnum[obj.offer_type as keyof typeof OfferTypeEnum];
    return this;
  }
}

export default OfferType;
