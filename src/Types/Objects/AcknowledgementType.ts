import { Utility, IUtility, Static } from "../Utility.js";
import { AcknowledgementType as AcknowledgementTypeEnum } from "../Enums/AcknowledgementType.js";

export type TAcknowledgementType = {
  acknowledgement_type?: keyof typeof AcknowledgementTypeEnum;
};

export class AcknowledgementType extends Utility implements Static<IUtility, typeof AcknowledgementType> {
  private acknowledgementType?: AcknowledgementTypeEnum;

  public setAcknowledgementType(acknowledgementType: AcknowledgementTypeEnum): this;
  public setAcknowledgementType(
    acknowledgementType: (acknowledgementType: typeof AcknowledgementTypeEnum) => AcknowledgementTypeEnum
  ): this;
  public setAcknowledgementType(
    acknowledgementType:
      | AcknowledgementTypeEnum
      | ((acknowledgementType: typeof AcknowledgementTypeEnum) => AcknowledgementTypeEnum)
  ) {
    if (typeof acknowledgementType === "function")
      this.acknowledgementType = acknowledgementType(AcknowledgementTypeEnum);
    else this.acknowledgementType = acknowledgementType;
    return this;
  }
  public getAcknowledgementType() {
    return this.acknowledgementType;
  }

  public override getFields<T extends TAcknowledgementType>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TAcknowledgementType) {
    const acknowledgementType = new AcknowledgementType();
    if (obj.acknowledgement_type !== undefined)
      acknowledgementType.setAcknowledgementType(AcknowledgementTypeEnum[obj.acknowledgement_type]);
    return acknowledgementType;
  }
}
