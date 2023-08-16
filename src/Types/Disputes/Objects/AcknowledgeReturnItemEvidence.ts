import { Utility, IUtility, Static } from "../../Utility.js";
import { EvidenceType } from "../Enums/EvidenceType.js";
import { Document, TDocument } from "./Document.js";

export type TAcknowledgeReturnItemEvidence = {
  documents?: TDocument[];
  evidence_type?: keyof typeof EvidenceType;
};

export class AcknowledgeReturnItemEvidence
  extends Utility
  implements Static<IUtility, typeof AcknowledgeReturnItemEvidence>
{
  private documents?: Document[];
  private evidenceType?: EvidenceType;

  public setDocuments(...documents: Document[]): this;
  public setDocuments(...documents: ((document: Document) => void)[]): this;
  public setDocuments(...documents: (Document | ((document: Document) => void))[]) {
    this.documents = documents.map((document) => {
      if (document instanceof Document) return document;
      const doc = new Document();
      document(doc);
      return doc;
    });
    return this;
  }
  public getDocuments() {
    return this.documents;
  }

  public setEvidenceType(evidenceType: EvidenceType): this;
  public setEvidenceType(evidenceType: (type: typeof EvidenceType) => EvidenceType): this;
  public setEvidenceType(evidenceType: EvidenceType | ((type: typeof EvidenceType) => EvidenceType)) {
    if (typeof evidenceType === "function") this.evidenceType = evidenceType(EvidenceType);
    else this.evidenceType = evidenceType;
    return this;
  }
  public getEvidenceType() {
    return this.evidenceType;
  }

  public override getFields<T extends TAcknowledgeReturnItemEvidence>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TAcknowledgeReturnItemEvidence) {
    const acknowledgeReturnItemEvidence = new AcknowledgeReturnItemEvidence();
    if (obj.documents)
      acknowledgeReturnItemEvidence.setDocuments(...obj.documents.map((document) => Document.fromObject(document)));
    if (obj.evidence_type !== undefined) acknowledgeReturnItemEvidence.setEvidenceType(EvidenceType[obj.evidence_type]);
    return acknowledgeReturnItemEvidence;
  }
}
