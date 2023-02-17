import Types, { ITypes, StaticImplements } from "../Types.js";
import AcknowledgementType, { TAcknowledgementType } from "./AcknowledgementType.js";
import { AcknowledgementType as AcknowledgementTypeEnum } from "../Enums/AcknowledgementType.js";
import AcknowledgeReturnItemEvidence, { TAcknowledgeReturnItemEvidence } from "./AcknowledgeReturnItemEvidence.js";

export type TAcknowledgeReturnItem = {
  acknowledgement_types?: TAcknowledgementType[];
  acknowledgement_type?: keyof typeof AcknowledgementTypeEnum;
  evidences?: TAcknowledgeReturnItemEvidence[];
  note?: string;
};

class AcknowledgeReturnItem extends Types implements StaticImplements<ITypes, typeof AcknowledgeReturnItem> {
  acknowledgementTypes?: AcknowledgementType[];
  acknowledgementType?: AcknowledgementTypeEnum;
  evidences?: AcknowledgeReturnItemEvidence[];
  note?: string;
  constructor() {
    super();
  }

  setAcknowledgementTypes(acknowledgementTypes: AcknowledgementType[]) {
    this.acknowledgementTypes = acknowledgementTypes;
    return this;
  }

  setAcknowledgementType(acknowledgementType: AcknowledgementTypeEnum) {
    this.acknowledgementType = acknowledgementType;
    return this;
  }

  setEvidences(evidences: AcknowledgeReturnItemEvidence[]) {
    this.evidences = evidences;
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
        obj.acknowledgement_types.map((acknowledgementType) => AcknowledgementType.fromObject(acknowledgementType))
      );
    if (obj.acknowledgement_type !== undefined)
      acknowledgeReturnItem.setAcknowledgementType(AcknowledgementTypeEnum[obj.acknowledgement_type]);
    if (obj.evidences)
      acknowledgeReturnItem.setEvidences(
        obj.evidences.map((evidence) => AcknowledgeReturnItemEvidence.fromObject(evidence))
      );
    if (obj.note) acknowledgeReturnItem.setNote(obj.note);
    return acknowledgeReturnItem;
  }
}

export default AcknowledgeReturnItem;
