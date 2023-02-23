import { DisputeLifeCycleStage } from "../Enums/DisputeLifeCycleStage";
import { EvidenceSource } from "../Enums/EvidenceSource";
import { DisputeEvidenceType } from "../Enums/EvidenceType";
import { ItemType } from "../Enums/ItemType";
import Types, { Static, ITypes } from "../Types";
import ActionInfo, { TActionInfo } from "./ActionInfo";
import Document, { TDocument } from "./Document";
import EvidenceInfo, { TEvidenceInfo } from "./EvidenceInfo";

export type TEvidence = {
  action_info?: TActionInfo;
  date?: string;
  dispute_life_cycle_stage?: keyof typeof DisputeLifeCycleStage;
  documents?: TDocument[];
  evidence_info?: TEvidenceInfo;
  evidence_type?: keyof typeof DisputeEvidenceType;
  item_id?: string;
  item_type?: keyof typeof ItemType;
  notes?: string;
  source?: keyof typeof EvidenceSource;
};

class Evidence extends Types implements Static<ITypes, typeof Evidence> {
  actionInfo?: ActionInfo;
  date?: string;
  disputeLifeCycleStage?: DisputeLifeCycleStage;
  documents?: Document[];
  evidenceInfo?: EvidenceInfo;
  evidenceType?: DisputeEvidenceType;
  itemId?: string;
  itemType?: ItemType;
  notes?: string;
  source?: EvidenceSource;

  constructor() {
    super();
  }

  setActionInfo(actionInfo: ActionInfo | ((type: ActionInfo) => void)) {
    if (actionInfo instanceof ActionInfo) this.actionInfo = actionInfo;
    else actionInfo((this.actionInfo = new ActionInfo()));
    return this;
  }

  setDate(date: string) {
    this.date = date;
    return this;
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

  setEvidenceInfo(evidenceInfo: EvidenceInfo | ((type: EvidenceInfo) => void)) {
    if (evidenceInfo instanceof EvidenceInfo) this.evidenceInfo = evidenceInfo;
    else evidenceInfo((this.evidenceInfo = new EvidenceInfo()));
    return this;
  }

  setEvidenceType(evidenceType: DisputeEvidenceType | ((type: typeof DisputeEvidenceType) => DisputeEvidenceType)) {
    if (typeof evidenceType === "function") this.evidenceType = evidenceType(DisputeEvidenceType);
    else this.evidenceType = evidenceType;
    return this;
  }

  setItemId(itemId: string) {
    this.itemId = itemId;
    return this;
  }

  setItemType(itemType: ItemType | ((type: typeof ItemType) => ItemType)) {
    if (typeof itemType === "function") this.itemType = itemType(ItemType);
    else this.itemType = itemType;
    return this;
  }

  setNotes(notes: string) {
    this.notes = notes;
    return this;
  }

  setSource(source: EvidenceSource | ((type: typeof EvidenceSource) => EvidenceSource)) {
    if (typeof source === "function") this.source = source(EvidenceSource);
    else this.source = source;
    return this;
  }

  static fromObject(obj: TEvidence) {
    const evidence = new Evidence();
    if (obj.action_info) evidence.setActionInfo(ActionInfo.fromObject(obj.action_info));
    if (obj.date) evidence.setDate(obj.date);
    if (obj.dispute_life_cycle_stage)
      evidence.setDisputeLifeCycleStage(DisputeLifeCycleStage[obj.dispute_life_cycle_stage]);
    if (obj.documents) evidence.setDocuments(...obj.documents.map((document) => Document.fromObject(document)));
    if (obj.evidence_info) evidence.setEvidenceInfo(EvidenceInfo.fromObject(obj.evidence_info));
    if (obj.evidence_type) evidence.setEvidenceType(DisputeEvidenceType[obj.evidence_type]);
    if (obj.item_id) evidence.setItemId(obj.item_id);
    if (obj.item_type) evidence.setItemType(ItemType[obj.item_type]);
    if (obj.notes) evidence.setNotes(obj.notes);
    if (obj.source) evidence.setSource(EvidenceSource[obj.source]);
    return evidence;
  }
}

export default Evidence;
