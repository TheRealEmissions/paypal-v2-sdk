import { DisputeLifecycleStage } from "../Enums/DisputeLifecycleStage.js";
import { ItemType } from "../Enums/ItemType.js";
import { IUtility, Static, Utility } from "../../Utility.js";
import { ActionInfo, TActionInfo } from "./ActionInfo.js";
import { Document, TDocument } from "./Document.js";
import { EvidenceInfo, TEvidenceInfo } from "./EvidenceInfo.js";
import { EvidenceType } from "../Enums/EvidenceType.js";
import { EvidenceSource } from "../Enums/EvidenceSource.js";

export type TEvidence = {
  action_info?: TActionInfo;
  date?: string;
  dispute_life_cycle_stage?: keyof typeof DisputeLifecycleStage;
  documents?: TDocument[];
  evidence_info?: TEvidenceInfo;
  evidence_type?: keyof typeof EvidenceType;
  item_id?: string;
  item_type?: keyof typeof ItemType;
  notes?: string;
  source?: keyof typeof EvidenceSource;
};

export class Evidence extends Utility implements Static<IUtility, typeof Evidence> {
  private actionInfo?: ActionInfo;
  private date?: string;
  private disputeLifeCycleStage?: DisputeLifecycleStage;
  private documents?: Document[];
  private evidenceInfo?: EvidenceInfo;
  private evidenceType?: EvidenceType;
  private itemId?: string;
  private itemType?: ItemType;
  private notes?: string;
  private source?: EvidenceSource;

  public setActionInfo(actionInfo: ActionInfo): this;
  public setActionInfo(actionInfo: (type: ActionInfo) => void): this;
  public setActionInfo(actionInfo: ActionInfo | ((type: ActionInfo) => void)) {
    if (actionInfo instanceof ActionInfo) this.actionInfo = actionInfo;
    else actionInfo((this.actionInfo = new ActionInfo()));
    return this;
  }
  public getActionInfo() {
    return this.actionInfo;
  }

  public setDate(date: string) {
    this.date = date;
    return this;
  }
  public getDate() {
    return this.date;
  }

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
  public setDocuments(...documents: ((document: Document) => void)[]): this;
  public setDocuments(...documents: (Document | ((document: Document) => void))[]) {
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

  public setEvidenceInfo(evidenceInfo: EvidenceInfo): this;
  public setEvidenceInfo(evidenceInfo: (type: EvidenceInfo) => void): this;
  public setEvidenceInfo(evidenceInfo: EvidenceInfo | ((type: EvidenceInfo) => void)) {
    if (evidenceInfo instanceof EvidenceInfo) this.evidenceInfo = evidenceInfo;
    else evidenceInfo((this.evidenceInfo = new EvidenceInfo()));
    return this;
  }
  public getEvidenceInfo() {
    return this.evidenceInfo;
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

  public setItemId(itemId: string) {
    this.itemId = itemId;
    return this;
  }
  public getItemId() {
    return this.itemId;
  }

  public setItemType(itemType: ItemType): this;
  public setItemType(itemType: (type: typeof ItemType) => ItemType): this;
  public setItemType(itemType: ItemType | ((type: typeof ItemType) => ItemType)) {
    if (typeof itemType === "function") this.itemType = itemType(ItemType);
    else this.itemType = itemType;
    return this;
  }
  public getItemType() {
    return this.itemType;
  }

  public setNotes(notes: string) {
    this.notes = notes;
    return this;
  }
  public getNotes() {
    return this.notes;
  }

  public setSource(source: EvidenceSource): this;
  public setSource(source: (type: typeof EvidenceSource) => EvidenceSource): this;
  public setSource(source: EvidenceSource | ((type: typeof EvidenceSource) => EvidenceSource)) {
    if (typeof source === "function") this.source = source(EvidenceSource);
    else this.source = source;
    return this;
  }
  public getSource() {
    return this.source;
  }

  public override getFields<T extends TEvidence>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TEvidence) {
    const evidence = new Evidence();
    if (obj.action_info) evidence.setActionInfo(ActionInfo.fromObject(obj.action_info));
    if (obj.date) evidence.setDate(obj.date);
    if (obj.dispute_life_cycle_stage)
      evidence.setDisputeLifeCycleStage(DisputeLifecycleStage[obj.dispute_life_cycle_stage]);
    if (obj.documents) evidence.setDocuments(...obj.documents.map((document) => Document.fromObject(document)));
    if (obj.evidence_info) evidence.setEvidenceInfo(EvidenceInfo.fromObject(obj.evidence_info));
    if (obj.evidence_type) evidence.setEvidenceType(EvidenceType[obj.evidence_type]);
    if (obj.item_id) evidence.setItemId(obj.item_id);
    if (obj.item_type) evidence.setItemType(ItemType[obj.item_type]);
    if (obj.notes) evidence.setNotes(obj.notes);
    if (obj.source) evidence.setSource(EvidenceSource[obj.source]);
    return evidence;
  }
}
