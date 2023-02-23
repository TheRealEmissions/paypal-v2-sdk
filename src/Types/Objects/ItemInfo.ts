import { ItemType } from "../Enums/ItemType";
import Types, { Static, ITypes } from "../Types";
import Money, { TMoney } from "./Money";
import { DisputeReason } from "../Enums/DisputeReason";

export type TItemInfo = {
  dispute_amount?: TMoney;
  item_description?: string;
  item_id?: string;
  item_name?: string;
  item_quantity?: string;
  item_type?: keyof typeof ItemType;
  notes?: string;
  partner_transaction_id?: string;
  reason?: keyof typeof DisputeReason;
};

class ItemInfo extends Types implements Static<ITypes, typeof ItemInfo> {
  disputeAmount?: Money;
  itemDescription?: string;
  itemId?: string;
  itemName?: string;
  itemQuantity?: string;
  itemType?: ItemType;
  notes?: string;
  partnerTransactionId?: string;
  reason?: DisputeReason;

  constructor() {
    super();
  }

  setDisputeAmount(disputeAmount: Money | ((type: Money) => void)) {
    if (disputeAmount instanceof Money) this.disputeAmount = disputeAmount;
    else disputeAmount((this.disputeAmount = new Money()));
    return this;
  }

  setItemDescription(itemDescription: string) {
    this.itemDescription = itemDescription;
    return this;
  }

  setItemId(itemId: string) {
    this.itemId = itemId;
    return this;
  }

  setItemName(itemName: string) {
    this.itemName = itemName;
    return this;
  }

  setItemQuantity(itemQuantity: string) {
    this.itemQuantity = itemQuantity;
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

  setPartnerTransactionId(partnerTransactionId: string) {
    this.partnerTransactionId = partnerTransactionId;
    return this;
  }

  setReason(reason: DisputeReason | ((type: typeof DisputeReason) => DisputeReason)) {
    if (typeof reason === "function") this.reason = reason(DisputeReason);
    else this.reason = reason;
    return this;
  }

  static fromObject(obj: TItemInfo) {
    const itemInfo = new ItemInfo();
    if (obj.dispute_amount) itemInfo.setDisputeAmount(Money.fromObject(obj.dispute_amount));
    if (obj.item_description) itemInfo.setItemDescription(obj.item_description);
    if (obj.item_id) itemInfo.setItemId(obj.item_id);
    if (obj.item_name) itemInfo.setItemName(obj.item_name);
    if (obj.item_quantity) itemInfo.setItemQuantity(obj.item_quantity);
    if (obj.item_type) itemInfo.setItemType(ItemType[obj.item_type]);
    if (obj.notes) itemInfo.setNotes(obj.notes);
    if (obj.partner_transaction_id) itemInfo.setPartnerTransactionId(obj.partner_transaction_id);
    if (obj.reason) itemInfo.setReason(DisputeReason[obj.reason]);
    return itemInfo;
  }
}

export default ItemInfo;
