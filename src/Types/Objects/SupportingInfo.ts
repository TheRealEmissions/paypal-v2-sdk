import { DisputeLifeCycleStage } from "../Enums/DisputeLifeCycleStage";
import { EvidenceSource } from "../Enums/EvidenceSource";
import Types, { Static, ITypes } from "../Types";
import Document, { TDocument } from "./Document";

export type TSupportingInfo = {
  dispute_life_cycle_stage?: keyof typeof DisputeLifeCycleStage;
  documents?: TDocument[];
  notes?: string;
  provided_time?: string;
  source?: Exclude<keyof typeof EvidenceSource, "REQUESTED_FROM_BUYER" | "REQUESTED_FROM_SELLER">;
};

class SupportingInfo extends Types implements Static<ITypes, typeof SupportingInfo> {
  disputeLifeCycleStage?: DisputeLifeCycleStage;
  documents?: Document[];
  notes?: string;
  providedTime?: string;
  source?: Exclude<EvidenceSource, EvidenceSource.REQUESTED_FROM_BUYER | EvidenceSource.REQUESTED_FROM_SELLER>;

  constructor() {
    super();
  }

  setDisputeLifeCycleStage(
    disputeLifeCycleStage: DisputeLifeCycleStage | ((type: typeof DisputeLifeCycleStage) => DisputeLifeCycleStage)
  ) {
    if (typeof disputeLifeCycleStage === "function")
      this.disputeLifeCycleStage = disputeLifeCycleStage(DisputeLifeCycleStage);
    else this.disputeLifeCycleStage = disputeLifeCycleStage;
    return this;
  }

  setDocuments(...documents: (Document | ((document: Document) => void))[]) {
    this.documents = documents.map((document) => {
      if (document instanceof Document) return document;
      else {
        const d = new Document();
        document(d);
        return d;
      }
    });
    return this;
  }

  setNotes(notes: string) {
    this.notes = notes;
    return this;
  }

  setProvidedTime(providedTime: string) {
    this.providedTime = providedTime;
    return this;
  }

  setSource(
    source:
      | Exclude<EvidenceSource, EvidenceSource.REQUESTED_FROM_BUYER | EvidenceSource.REQUESTED_FROM_SELLER>
      | ((
          type: Exclude<
            typeof EvidenceSource,
            EvidenceSource.REQUESTED_FROM_BUYER | EvidenceSource.REQUESTED_FROM_SELLER
          >
        ) => Exclude<EvidenceSource, EvidenceSource.REQUESTED_FROM_BUYER | EvidenceSource.REQUESTED_FROM_SELLER>)
  ) {
    if (typeof source === "function")
      this.source = source(
        EvidenceSource as Exclude<
          typeof EvidenceSource,
          EvidenceSource.REQUESTED_FROM_BUYER | EvidenceSource.REQUESTED_FROM_SELLER
        >
      );
    else this.source = source;
    return this;
  }

  static fromObject(obj: TSupportingInfo) {
    const supportingInfo = new SupportingInfo();
    if (obj.dispute_life_cycle_stage)
      supportingInfo.setDisputeLifeCycleStage(DisputeLifeCycleStage[obj.dispute_life_cycle_stage]);
    if (obj.documents) supportingInfo.setDocuments(...obj.documents.map(Document.fromObject));
    if (obj.notes) supportingInfo.setNotes(obj.notes);
    if (obj.provided_time) supportingInfo.setProvidedTime(obj.provided_time);
    if (obj.source) supportingInfo.setSource(EvidenceSource[obj.source]);
    return supportingInfo;
  }
}

export default SupportingInfo;
