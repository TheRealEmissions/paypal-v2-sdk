import { IUtility, OnlySetters, Static, Utility } from "../../Utility.js";
import { TransactionInfoTransactionStatus } from "../Enums/TransactionInfoTransactionStatus.js";
import { Buyer, TBuyer } from "./Buyer.js";
import { Cryptocurrency, TCryptocurrency } from "./Cryptocurrency.js";
import { ItemInfo, TItemInfo } from "./ItemInfo.js";
import { Money, TMoney } from "./Money.js";
import { Seller, TSeller } from "./Seller.js";

export type TTransactionInfo = {
  buyer?: TBuyer;
  buyer_transaction_id?: string;
  create_time?: string;
  custom?: string;
  gross_amount?: TMoney;
  gross_asset?: TCryptocurrency;
  invoice_number?: string;
  items?: TItemInfo[];
  reference_id?: string;
  seller?: TSeller;
  seller_transaction_id?: string;
  transaction_status?: keyof typeof TransactionInfoTransactionStatus;
};

export class TransactionInfo extends Utility implements Static<IUtility, typeof TransactionInfo> {
  private buyer!: Buyer;
  private buyerTransactionId?: string;
  private createTime?: string;
  private custom?: string;
  private grossAmount?: Money;
  private grossAsset?: Cryptocurrency;
  private invoiceNumber?: string;
  private items?: ItemInfo[];
  private referenceId?: string;
  private seller?: Seller;
  private sellerTransactionId?: string;
  private transactionStatus?: TransactionInfoTransactionStatus;

  public setBuyer(buyer: Buyer): this;
  public setBuyer(buyer: (buyer: OnlySetters<Buyer>) => void): this;
  public setBuyer(buyer: Buyer | ((buyer: OnlySetters<Buyer>) => void)) {
    if (buyer instanceof Buyer) this.buyer = buyer;
    else buyer((this.buyer = new Buyer()));
    return this;
  }
  public getBuyer() {
    return this.buyer;
  }

  public setBuyerTransactionId(buyerTransactionId: string) {
    this.buyerTransactionId = buyerTransactionId;
    return this;
  }
  public getBuyerTransactionId() {
    return this.buyerTransactionId;
  }

  public setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }
  public getCreateTime() {
    return this.createTime;
  }

  public setCustom(custom: string) {
    this.custom = custom;
    return this;
  }
  public getCustom() {
    return this.custom;
  }

  public setGrossAmount(grossAmount: Money): this;
  public setGrossAmount(grossAmount: (grossAmount: OnlySetters<Money>) => void): this;
  public setGrossAmount(grossAmount: Money | ((grossAmount: OnlySetters<Money>) => void)) {
    if (grossAmount instanceof Money) this.grossAmount = grossAmount;
    else grossAmount((this.grossAmount = new Money()));
    return this;
  }
  public getGrossAmount() {
    return this.grossAmount;
  }

  public setGrossAsset(grossAsset: Cryptocurrency): this;
  public setGrossAsset(grossAsset: (grossAsset: OnlySetters<Cryptocurrency>) => void): this;
  public setGrossAsset(grossAsset: Cryptocurrency | ((grossAsset: OnlySetters<Cryptocurrency>) => void)) {
    if (grossAsset instanceof Cryptocurrency) this.grossAsset = grossAsset;
    else grossAsset((this.grossAsset = new Cryptocurrency()));
    return this;
  }
  public getGrossAsset() {
    return this.grossAsset;
  }

  public setInvoiceNumber(invoiceNumber: string) {
    this.invoiceNumber = invoiceNumber;
    return this;
  }
  public getInvoiceNumber() {
    return this.invoiceNumber;
  }

  public setItems(...items: ItemInfo[]): this;
  public setItems(...items: ((item: OnlySetters<ItemInfo>) => void)[]): this;
  public setItems(...items: (ItemInfo | ((item: OnlySetters<ItemInfo>) => void))[]) {
    this.items = items.map((item) => {
      if (item instanceof ItemInfo) return item;
      else {
        const newItem = new ItemInfo();
        item(newItem);
        return newItem;
      }
    });
    return this;
  }
  public getItems() {
    return this.items;
  }

  public setReferenceId(referenceId: string) {
    this.referenceId = referenceId;
    return this;
  }
  public getReferenceId() {
    return this.referenceId;
  }

  public setSeller(seller: Seller): this;
  public setSeller(seller: (seller: OnlySetters<Seller>) => void): this;
  public setSeller(seller: Seller | ((seller: OnlySetters<Seller>) => void)) {
    if (seller instanceof Seller) this.seller = seller;
    else seller((this.seller = new Seller()));
    return this;
  }
  public getSeller() {
    return this.seller;
  }

  public setSellerTransactionId(sellerTransactionId: string) {
    this.sellerTransactionId = sellerTransactionId;
    return this;
  }
  public getSellerTransactionId() {
    return this.sellerTransactionId;
  }

  public setTransactionStatus(transactionStatus: TransactionInfoTransactionStatus): this;
  public setTransactionStatus(
    transactionStatus: (type: typeof TransactionInfoTransactionStatus) => TransactionInfoTransactionStatus
  ): this;
  public setTransactionStatus(
    transactionStatus:
      | TransactionInfoTransactionStatus
      | ((type: typeof TransactionInfoTransactionStatus) => TransactionInfoTransactionStatus)
  ) {
    if (typeof transactionStatus === "function")
      this.transactionStatus = transactionStatus(TransactionInfoTransactionStatus);
    else this.transactionStatus = transactionStatus;
    return this;
  }
  public getTransactionStatus() {
    return this.transactionStatus;
  }

  public override getFields<T extends TTransactionInfo>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TTransactionInfo) {
    const transactionInfo = new TransactionInfo();
    if (obj.buyer) transactionInfo.setBuyer(Buyer.fromObject(obj.buyer));
    if (obj.buyer_transaction_id) transactionInfo.setBuyerTransactionId(obj.buyer_transaction_id);
    if (obj.create_time) transactionInfo.setCreateTime(obj.create_time);
    if (obj.custom) transactionInfo.setCustom(obj.custom);
    if (obj.gross_amount) transactionInfo.setGrossAmount(Money.fromObject(obj.gross_amount));
    if (obj.gross_asset) transactionInfo.setGrossAsset(Cryptocurrency.fromObject(obj.gross_asset));
    if (obj.invoice_number) transactionInfo.setInvoiceNumber(obj.invoice_number);
    if (obj.items) transactionInfo.setItems(...obj.items.map((item) => ItemInfo.fromObject(item)));
    if (obj.reference_id) transactionInfo.setReferenceId(obj.reference_id);
    if (obj.seller) transactionInfo.setSeller(Seller.fromObject(obj.seller));
    if (obj.seller_transaction_id) transactionInfo.setSellerTransactionId(obj.seller_transaction_id);
    if (obj.transaction_status)
      transactionInfo.setTransactionStatus(TransactionInfoTransactionStatus[obj.transaction_status]);
    return transactionInfo;
  }
}
