import { ItemType } from "../Enums/ItemType.js";
import { Money, TMoney } from "./Money.js";
import { Reason } from "../Enums/Reason.js";
import { IUtility, OnlySetters, Static, Utility } from "../../Utility.js";

export type TItemInfo = {
  dispute_amount?: TMoney;
  item_description?: string;
  item_id?: string;
  item_name?: string;
  item_quantity?: string;
  item_type?: keyof typeof ItemType;
  notes?: string;
  partner_transaction_id?: string;
  reason?: keyof typeof Reason;
};

export class ItemInfo extends Utility implements Static<IUtility, typeof ItemInfo> {
  private disputeAmount?: Money;
  private itemDescription?: string;
  private itemId?: string;
  private itemName?: string;
  private itemQuantity?: string;
  private itemType?: ItemType;
  private notes?: string;
  private partnerTransactionId?: string;
  private reason?: Reason;

  public setDisputeAmount(disputeAmount: Money): this;
  public setDisputeAmount(disputeAmount: (type: OnlySetters<Money>) => void): this;
  public setDisputeAmount(disputeAmount: Money | ((type: OnlySetters<Money>) => void)) {
    if (disputeAmount instanceof Money) this.disputeAmount = disputeAmount;
    else disputeAmount((this.disputeAmount = new Money()));
    return this;
  }
  public getDisputeAmount() {
    return this.disputeAmount;
  }

  public setItemDescription(itemDescription: string) {
    this.itemDescription = itemDescription;
    return this;
  }
  public getItemDescription() {
    return this.itemDescription;
  }

  public setItemId(itemId: string) {
    this.itemId = itemId;
    return this;
  }
  public getItemId() {
    return this.itemId;
  }

  public setItemName(itemName: string) {
    this.itemName = itemName;
    return this;
  }
  public getItemName() {
    return this.itemName;
  }

  public setItemQuantity(itemQuantity: string) {
    this.itemQuantity = itemQuantity;
    return this;
  }
  public getItemQuantity() {
    return this.itemQuantity;
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

  public setPartnerTransactionId(partnerTransactionId: string) {
    this.partnerTransactionId = partnerTransactionId;
    return this;
  }
  public getPartnerTransactionId() {
    return this.partnerTransactionId;
  }

  public setReason(reason: Reason): this;
  public setReason(reason: (type: typeof Reason) => Reason): this;
  public setReason(reason: Reason | ((type: typeof Reason) => Reason)) {
    if (typeof reason === "function") this.reason = reason(Reason);
    else this.reason = reason;
    return this;
  }
  public getReason() {
    return this.reason;
  }

  public override getFields<T extends Partial<TItemInfo>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TItemInfo) {
    const itemInfo = new ItemInfo();
    if (obj.dispute_amount) itemInfo.setDisputeAmount(Money.fromObject(obj.dispute_amount));
    if (obj.item_description) itemInfo.setItemDescription(obj.item_description);
    if (obj.item_id) itemInfo.setItemId(obj.item_id);
    if (obj.item_name) itemInfo.setItemName(obj.item_name);
    if (obj.item_quantity) itemInfo.setItemQuantity(obj.item_quantity);
    if (obj.item_type) itemInfo.setItemType(ItemType[obj.item_type]);
    if (obj.notes) itemInfo.setNotes(obj.notes);
    if (obj.partner_transaction_id) itemInfo.setPartnerTransactionId(obj.partner_transaction_id);
    if (obj.reason) itemInfo.setReason(Reason[obj.reason]);
    return itemInfo;
  }
}
