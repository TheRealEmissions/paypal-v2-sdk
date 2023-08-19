import { IUtility, OnlySetters, Static, Utility } from "../../Utility";
import { AcknowledgementType } from "../Enums/AcknowledgementType";
import { AcknowledgeReturnItemEvidence, TAcknowledgeReturnItemEvidence } from "./AcknowledgeReturnItemEvidence";

export type TAcknowledgeReturnItem = {
  acknowledgement_type?: keyof typeof AcknowledgementType;
  evidences?: TAcknowledgeReturnItemEvidence[];
  note?: string;
};

type AcknowledgeReturnItemFields = {
  readonly acknowledgementType?: AcknowledgementType;
  readonly evidences?: AcknowledgeReturnItemEvidence[];
  readonly note?: string;
};

export class AcknowledgeReturnItem extends Utility implements Static<IUtility, typeof AcknowledgeReturnItem> {
  private acknowledgementType?: AcknowledgementType;
  private evidences?: AcknowledgeReturnItemEvidence[];
  private note?: string;

  public setAcknowledgementType(acknowledgementType: AcknowledgementType): OnlySetters<this>;
  public setAcknowledgementType(
    acknowledgementType: (type: typeof AcknowledgementType) => AcknowledgementType
  ): OnlySetters<this>;
  public setAcknowledgementType(
    acknowledgementType: AcknowledgementType | ((type: typeof AcknowledgementType) => AcknowledgementType)
  ): OnlySetters<this> {
    if (typeof acknowledgementType === "function") this.acknowledgementType = acknowledgementType(AcknowledgementType);
    else this.acknowledgementType = acknowledgementType;
    return this;
  }
  public getAcknowledgementType() {
    return this.acknowledgementType;
  }

  public setEvidences(...evidences: AcknowledgeReturnItemEvidence[]): OnlySetters<this>;
  public setEvidences(
    ...evidences: ((evidence: OnlySetters<AcknowledgeReturnItemEvidence>) => void)[]
  ): OnlySetters<this>;
  public setEvidences(
    ...evidences: (AcknowledgeReturnItemEvidence | ((evidence: OnlySetters<AcknowledgeReturnItemEvidence>) => void))[]
  ): OnlySetters<this> {
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

  public setNote(note: string): OnlySetters<this> {
    this.note = note;
    return this;
  }
  public getNote() {
    return this.note;
  }

  public override getFields<T extends AcknowledgeReturnItemFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TAcknowledgeReturnItem) {
    const acknowledgeReturnItem = new AcknowledgeReturnItem();
    if (obj.acknowledgement_type !== undefined)
      acknowledgeReturnItem.setAcknowledgementType(AcknowledgementType[obj.acknowledgement_type]);
    if (obj.evidences)
      acknowledgeReturnItem.setEvidences(
        ...obj.evidences.map((evidence) => AcknowledgeReturnItemEvidence.fromObject(evidence))
      );
    if (obj.note) acknowledgeReturnItem.setNote(obj.note);
    return acknowledgeReturnItem;
  }
}
