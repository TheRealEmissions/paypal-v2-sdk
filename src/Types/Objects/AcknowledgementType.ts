import Types, { ITypes, Static } from "../Types.js";
import { AcknowledgementType as AcknowledgementTypeEnum } from "../Enums/AcknowledgementType.js";

export type TAcknowledgementType = {
  acknowledgement_type?: keyof typeof AcknowledgementTypeEnum;
};

class AcknowledgementType extends Types implements Static<ITypes, typeof AcknowledgementType> {
  acknowledgementType?: AcknowledgementTypeEnum;
  constructor() {
    super();
  }

  setAcknowledgementType(acknowledgementType: AcknowledgementTypeEnum) {
    this.acknowledgementType = acknowledgementType;
    return this;
  }

  static fromObject(obj: TAcknowledgementType) {
    const acknowledgementType = new AcknowledgementType();
    if (obj.acknowledgement_type !== undefined)
      acknowledgementType.setAcknowledgementType(AcknowledgementTypeEnum[obj.acknowledgement_type]);
    return acknowledgementType;
  }
}

export default AcknowledgementType;
