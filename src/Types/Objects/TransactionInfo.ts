import { TransactionStatus } from "../Enums/TransactionStatus";
import Types, { Static, ITypes } from "../Types";
import Buyer, { TBuyer } from "./Buyer";
import Cryptocurrency, { TCryptocurrency } from "./Cryptocurrency";
import ItemInfo, { TItemInfo } from "./ItemInfo";
import Money, { TMoney } from "./Money";
import Seller, { TSeller } from "./Seller";

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
  transaction_status?: keyof typeof TransactionStatus;
};

class TransactionInfo extends Types implements Static<ITypes, typeof TransactionInfo> {
  buyer!: Buyer;
  buyerTransactionId?: string;
  createTime?: string;
  custom?: string;
  grossAmount?: Money;
  grossAsset?: Cryptocurrency;
  invoiceNumber?: string;
  items?: ItemInfo[];
  referenceId?: string;
  seller?: Seller;
  sellerTransactionId?: string;
  transactionStatus?: TransactionStatus;

  constructor() {
    super();
  }

  setBuyer(buyer: Buyer | ((buyer: Buyer) => void)) {
    if (buyer instanceof Buyer) this.buyer = buyer;
    else buyer((this.buyer = new Buyer()));
  }

  setBuyerTransactionId(buyerTransactionId: string) {
    this.buyerTransactionId = buyerTransactionId;
    return this;
  }

  setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }

  setCustom(custom: string) {
    this.custom = custom;
    return this;
  }

  setGrossAmount(grossAmount: Money | ((grossAmount: Money) => void)) {
    if (grossAmount instanceof Money) this.grossAmount = grossAmount;
    else grossAmount((this.grossAmount = new Money()));
    return this;
  }

  setGrossAsset(grossAsset: Cryptocurrency | ((grossAsset: Cryptocurrency) => void)) {
    if (grossAsset instanceof Cryptocurrency) this.grossAsset = grossAsset;
    else grossAsset((this.grossAsset = new Cryptocurrency()));
    return this;
  }

  setInvoiceNumber(invoiceNumber: string) {
    this.invoiceNumber = invoiceNumber;
    return this;
  }

  setItems(...items: (ItemInfo | ((item: ItemInfo) => void))[]) {
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

  setReferenceId(referenceId: string) {
    this.referenceId = referenceId;
    return this;
  }

  setSeller(seller: Seller | ((seller: Seller) => void)) {
    if (seller instanceof Seller) this.seller = seller;
    else seller((this.seller = new Seller()));
    return this;
  }

  setSellerTransactionId(sellerTransactionId: string) {
    this.sellerTransactionId = sellerTransactionId;
    return this;
  }

  setTransactionStatus(transactionStatus: TransactionStatus | ((type: typeof TransactionStatus) => TransactionStatus)) {
    if (typeof transactionStatus === "function") this.transactionStatus = transactionStatus(TransactionStatus);
    else this.transactionStatus = transactionStatus;
    return this;
  }

  static fromObject(obj: TTransactionInfo) {
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
    if (obj.transaction_status) transactionInfo.setTransactionStatus(TransactionStatus[obj.transaction_status]);
    return transactionInfo;
  }
}

export default TransactionInfo;
