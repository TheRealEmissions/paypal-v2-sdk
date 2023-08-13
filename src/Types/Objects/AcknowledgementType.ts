import Types, { ITypes, Static } from "../Types.js";
import { AcknowledgementType as AcknowledgementTypeEnum } from "../Enums/AcknowledgementType.js";

export type TAcknowledgementType = {
  acknowledgement_type?: keyof typeof AcknowledgementTypeEnum;
};

export class AcknowledgementType extends Types implements Static<ITypes, typeof AcknowledgementType> {
  acknowledgementType?: AcknowledgementTypeEnum;

  setAcknowledgementType(acknowledgementType: AcknowledgementTypeEnum): this;
  setAcknowledgementType(
    acknowledgementType: (acknowledgementType: typeof AcknowledgementTypeEnum) => AcknowledgementTypeEnum
  ): this;
  setAcknowledgementType(
    acknowledgementType:
      | AcknowledgementTypeEnum
      | ((acknowledgementType: typeof AcknowledgementTypeEnum) => AcknowledgementTypeEnum)
  ) {
    if (typeof acknowledgementType === "function")
      this.acknowledgementType = acknowledgementType(AcknowledgementTypeEnum);
    else this.acknowledgementType = acknowledgementType;
    return this;
  }

  static fromObject(obj: TAcknowledgementType) {
    const acknowledgementType = new AcknowledgementType();
    if (obj.acknowledgement_type !== undefined)
      acknowledgementType.setAcknowledgementType(AcknowledgementTypeEnum[obj.acknowledgement_type]);
    return acknowledgementType;
  }
}
