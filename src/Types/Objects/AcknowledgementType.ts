import Types from "../Types.js";
import { AcknowledgementType as AcknowledgementTypeEnum } from "../Enums/AcknowledgementType.js";

export type TAcknowledgementType = {
  acknowledgement_type?: string;
};

class AcknowledgementType extends Types {
  acknowledgementType?: AcknowledgementTypeEnum;
  constructor() {
    super();
  }

  setAcknowledgementType(acknowledgementType: AcknowledgementTypeEnum) {
    this.acknowledgementType = acknowledgementType;
    return this;
  }

  override fromObject(obj: TAcknowledgementType) {
    this.acknowledgementType =
      AcknowledgementTypeEnum[obj.acknowledgement_type as keyof typeof AcknowledgementTypeEnum];
    return this;
  }
}

export default AcknowledgementType;
