import { DisputeLifecycleStage } from "../Enums/DisputeLifecycleStage.js";
import { IUtility, Static, Utility, OnlySetters } from "../../Utility.js";
import { Document, TDocument } from "./Document.js";
import { EvidenceSource } from "../Enums/EvidenceSource.js";

export type TSupportingInfo = {
  dispute_life_cycle_stage?: keyof typeof DisputeLifecycleStage;
  documents?: TDocument[];
  notes?: string;
  provided_time?: string;
  source?: Exclude<keyof typeof EvidenceSource, "REQUESTED_FROM_BUYER" | "REQUESTED_FROM_SELLER">;
};

export class SupportingInfo extends Utility implements Static<IUtility, typeof SupportingInfo> {
  private disputeLifeCycleStage?: DisputeLifecycleStage;
  private documents?: Document[];
  private notes?: string;
  private providedTime?: string;
  private source?: Exclude<EvidenceSource, EvidenceSource.REQUESTED_FROM_BUYER | EvidenceSource.REQUESTED_FROM_SELLER>;

  public setDisputeLifeCycleStage(disputeLifeCycleStage: DisputeLifecycleStage): this;
  public setDisputeLifeCycleStage(
    disputeLifeCycleStage: (type: typeof DisputeLifecycleStage) => DisputeLifecycleStage
  ): this;
  public setDisputeLifeCycleStage(
    disputeLifeCycleStage: DisputeLifecycleStage | ((type: typeof DisputeLifecycleStage) => DisputeLifecycleStage)
  ) {
    if (typeof disputeLifeCycleStage === "function")
      this.disputeLifeCycleStage = disputeLifeCycleStage(DisputeLifecycleStage);
    else this.disputeLifeCycleStage = disputeLifeCycleStage;
    return this;
  }
  public getDisputeLifeCycleStage() {
    return this.disputeLifeCycleStage;
  }

  public setDocuments(...documents: Document[]): this;
  public setDocuments(...documents: ((document: OnlySetters<Document>) => void)[]): this;
  public setDocuments(...documents: (Document | ((document: OnlySetters<Document>) => void))[]) {
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
  public getDocuments() {
    return this.documents;
  }

  public setNotes(notes: string) {
    this.notes = notes;
    return this;
  }
  public getNotes() {
    return this.notes;
  }

  public setProvidedTime(providedTime: string) {
    this.providedTime = providedTime;
    return this;
  }
  public getProvidedTime() {
    return this.providedTime;
  }

  public setSource(
    source: Exclude<EvidenceSource, EvidenceSource.REQUESTED_FROM_BUYER | EvidenceSource.REQUESTED_FROM_SELLER>
  ): this;
  public setSource(
    source: (
      type: Exclude<typeof EvidenceSource, EvidenceSource.REQUESTED_FROM_BUYER | EvidenceSource.REQUESTED_FROM_SELLER>
    ) => Exclude<EvidenceSource, EvidenceSource.REQUESTED_FROM_BUYER | EvidenceSource.REQUESTED_FROM_SELLER>
  ): this;
  public setSource(
    source:
      | Exclude<EvidenceSource, EvidenceSource.REQUESTED_FROM_BUYER | EvidenceSource.REQUESTED_FROM_SELLER>
      | ((
          type: Exclude<
            typeof EvidenceSource,
            EvidenceSource.REQUESTED_FROM_BUYER | EvidenceSource.REQUESTED_FROM_SELLER
          >
        ) => Exclude<EvidenceSource, EvidenceSource.REQUESTED_FROM_BUYER | EvidenceSource.REQUESTED_FROM_SELLER>)
  ) {
    if (typeof source === "function") this.source = source(EvidenceSource);
    else this.source = source;
    return this;
  }
  public getSource() {
    return this.source;
  }

  public override getFields<T extends TSupportingInfo>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TSupportingInfo) {
    const supportingInfo = new SupportingInfo();
    if (obj.dispute_life_cycle_stage)
      supportingInfo.setDisputeLifeCycleStage(DisputeLifecycleStage[obj.dispute_life_cycle_stage]);
    if (obj.documents) supportingInfo.setDocuments(...obj.documents.map(Document.fromObject));
    if (obj.notes) supportingInfo.setNotes(obj.notes);
    if (obj.provided_time) supportingInfo.setProvidedTime(obj.provided_time);
    if (obj.source) supportingInfo.setSource(EvidenceSource[obj.source]);
    return supportingInfo;
  }
}
