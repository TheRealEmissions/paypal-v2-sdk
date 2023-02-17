import { EvidenceType } from "../Enums/EvidenceType.js";
import Types from "../Types.js";
import Document, { TDocument } from "./Document.js";

export type TAcknowledgeReturnItemEvidence = {
  documents?: TDocument[];
  evidence_type?: keyof typeof EvidenceType;
};

class AcknowledgeReturnItemEvidence extends Types {
  documents?: Document[];
  evidenceType?: EvidenceType;
  constructor() {
    super();
  }

  setDocuments(documents: Document[]) {
    this.documents = documents;
    return this;
  }

  setEvidenceType(evidenceType: EvidenceType) {
    this.evidenceType = evidenceType;
    return this;
  }

  fromObject(obj: TAcknowledgeReturnItemEvidence) {
    this.documents = obj.documents?.map((doc) => new Document().fromObject(doc));
    this.evidenceType = EvidenceType[obj.evidence_type as keyof typeof EvidenceType];
    return this;
  }
}

export default AcknowledgeReturnItemEvidence;
