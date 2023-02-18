import Types, { ITypes, Static } from "@Types/Types.js";
import AcknowledgementType, { TAcknowledgementType } from "./AcknowledgementType.js";
import { AcknowledgementType as AcknowledgementTypeEnum } from "@Types/Enums/AcknowledgementType.js";
import AcknowledgeReturnItemEvidence, { TAcknowledgeReturnItemEvidence } from "./AcknowledgeReturnItemEvidence.js";

export type TAcknowledgeReturnItem = {
  acknowledgement_types?: TAcknowledgementType[];
  acknowledgement_type?: keyof typeof AcknowledgementTypeEnum;
  evidences?: TAcknowledgeReturnItemEvidence[];
  note?: string;
};

class AcknowledgeReturnItem extends Types implements Static<ITypes, typeof AcknowledgeReturnItem> {
  acknowledgementTypes?: AcknowledgementType[];
  acknowledgementType?: AcknowledgementTypeEnum;
  evidences?: AcknowledgeReturnItemEvidence[];
  note?: string;
  constructor() {
    super();
  }

  setAcknowledgementTypes(...acknowledgementTypes: (AcknowledgementType | ((type: AcknowledgementType) => void))[]) {
    this.acknowledgementTypes = acknowledgementTypes.map((acknowledgementType) => {
      if (acknowledgementType instanceof AcknowledgementType) return acknowledgementType;
      const type = new AcknowledgementType();
      acknowledgementType(type);
      return type;
    });
    return this;
  }

  setAcknowledgementType(
    acknowledgementType: AcknowledgementTypeEnum | ((type: typeof AcknowledgementTypeEnum) => AcknowledgementTypeEnum)
  ) {
    if (typeof acknowledgementType === "function")
      this.acknowledgementType = acknowledgementType(AcknowledgementTypeEnum);
    else this.acknowledgementType = acknowledgementType;
    return this;
  }

  setEvidences(...evidences: (AcknowledgeReturnItemEvidence | ((evidence: AcknowledgeReturnItemEvidence) => void))[]) {
    this.evidences = evidences.map((evidence) => {
      if (evidence instanceof AcknowledgeReturnItemEvidence) return evidence;
      const itemEvidence = new AcknowledgeReturnItemEvidence();
      evidence(itemEvidence);
      return itemEvidence;
    });
    return this;
  }

  setNote(note: string) {
    this.note = note;
    return this;
  }

  static fromObject(obj: TAcknowledgeReturnItem) {
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

export default AcknowledgeReturnItem;
