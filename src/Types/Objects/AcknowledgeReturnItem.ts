import Types from "../Types.js";
import AcknowledgementType, { TAcknowledgementType } from "./AcknowledgementType.js";
import { AcknowledgementType as AcknowledgementTypeEnum } from "../Enums/AcknowledgementType.js";
import AcknowledgeReturnItemEvidence, { TAcknowledgeReturnItemEvidence } from "./AcknowledgeReturnItemEvidence.js";

export type TAcknowledgeReturnItem = {
  acknowledgement_types?: TAcknowledgementType[];
  acknowledgement_type?: string;
  evidences?: TAcknowledgeReturnItemEvidence[];
  note?: string;
};

class AcknowledgeReturnItem extends Types {
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

  override fromObject(obj: TAcknowledgeReturnItem) {
    this.acknowledgementTypes = obj.acknowledgement_types?.map((ack) => new AcknowledgementType().fromObject(ack));
    this.acknowledgementType =
      AcknowledgementTypeEnum[obj.acknowledgement_type as keyof typeof AcknowledgementTypeEnum];
    this.evidences = obj.evidences?.map((evidence) => new AcknowledgeReturnItemEvidence().fromObject(evidence));
    this.note = obj.note;
    return this;
  }
}

export default AcknowledgeReturnItem;
