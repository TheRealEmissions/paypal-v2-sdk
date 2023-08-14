import { Utility, IUtility, Static } from "../Utility.js";
import { AcknowledgementType, TAcknowledgementType } from "./AcknowledgementType.js";
import { AcknowledgementType as AcknowledgementTypeEnum } from "../Enums/AcknowledgementType.js";
import { AcknowledgeReturnItemEvidence, TAcknowledgeReturnItemEvidence } from "./AcknowledgeReturnItemEvidence.js";

export type TAcknowledgeReturnItem = {
  acknowledgement_types?: TAcknowledgementType[];
  acknowledgement_type?: keyof typeof AcknowledgementTypeEnum;
  evidences?: TAcknowledgeReturnItemEvidence[];
  note?: string;
};

export class AcknowledgeReturnItem extends Utility implements Static<IUtility, typeof AcknowledgeReturnItem> {
  private acknowledgementTypes?: AcknowledgementType[];
  private acknowledgementType?: AcknowledgementTypeEnum;
  private evidences?: AcknowledgeReturnItemEvidence[];
  private note?: string;

  public setAcknowledgementTypes(...acknowledgementTypes: AcknowledgementType[]): this;
  public setAcknowledgementTypes(...acknowledgementTypes: ((type: AcknowledgementType) => void)[]): this;
  public setAcknowledgementTypes(
    ...acknowledgementTypes: (AcknowledgementType | ((type: AcknowledgementType) => void))[]
  ) {
    this.acknowledgementTypes = acknowledgementTypes.map((acknowledgementType) => {
      if (acknowledgementType instanceof AcknowledgementType) return acknowledgementType;
      const type = new AcknowledgementType();
      acknowledgementType(type);
      return type;
    });
    return this;
  }
  public getAcknowledgementTypes() {
    return this.acknowledgementTypes;
  }

  public setAcknowledgementType(acknowledgementType: AcknowledgementTypeEnum): this;
  public setAcknowledgementType(
    acknowledgementType: (type: typeof AcknowledgementTypeEnum) => AcknowledgementTypeEnum
  ): this;
  public setAcknowledgementType(
    acknowledgementType: AcknowledgementTypeEnum | ((type: typeof AcknowledgementTypeEnum) => AcknowledgementTypeEnum)
  ) {
    if (typeof acknowledgementType === "function")
      this.acknowledgementType = acknowledgementType(AcknowledgementTypeEnum);
    else this.acknowledgementType = acknowledgementType;
    return this;
  }
  public getAcknowledgementType() {
    return this.acknowledgementType;
  }

  public setEvidences(...evidences: AcknowledgeReturnItemEvidence[]): this;
  public setEvidences(...evidences: ((evidence: AcknowledgeReturnItemEvidence) => void)[]): this;
  public setEvidences(
    ...evidences: (AcknowledgeReturnItemEvidence | ((evidence: AcknowledgeReturnItemEvidence) => void))[]
  ) {
    this.evidences = evidences.map((evidence) => {
      if (evidence instanceof AcknowledgeReturnItemEvidence) return evidence;
      const itemEvidence = new AcknowledgeReturnItemEvidence();
      evidence(itemEvidence);
      return itemEvidence;
    });
    return this;
  }
  public getEvidences() {
    return this.evidences;
  }

  public setNote(note: string) {
    this.note = note;
    return this;
  }
  public getNote() {
    return this.note;
  }

  public override getFields<T extends TAcknowledgeReturnItem>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TAcknowledgeReturnItem) {
    const acknowledgeReturnItem = new AcknowledgeReturnItem();
    if (obj.acknowledgement_types)
      acknowledgeReturnItem.setAcknowledgementTypes(
        ...obj.acknowledgement_types.map((acknowledgementType) => AcknowledgementType.fromObject(acknowledgementType))
      );
    if (obj.acknowledgement_type !== undefined)
      acknowledgeReturnItem.setAcknowledgementType(AcknowledgementTypeEnum[obj.acknowledgement_type]);
    if (obj.evidences)
      acknowledgeReturnItem.setEvidences(
        ...obj.evidences.map((evidence) => AcknowledgeReturnItemEvidence.fromObject(evidence))
      );
    if (obj.note) acknowledgeReturnItem.setNote(obj.note);
    return acknowledgeReturnItem;
  }
}
