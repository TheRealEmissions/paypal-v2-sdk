import { OfferType } from "../Enums/OfferType.js";
import { IUtility, Static, Utility } from "../Utility.js";
import { Money, TMoney } from "./Money.js";
import { OfferHistory, TOfferHistory } from "./OfferHistory.js";

export type TOffer = {
  buyer_requested_amount?: TMoney;
  history?: TOfferHistory[];
  offer_type?: keyof typeof OfferType;
  seller_offered_amount?: TMoney;
};

export class Offer extends Utility implements Static<IUtility, typeof Offer> {
  private buyerRequestedAmount?: Money;
  private history?: OfferHistory[];
  private offerType?: OfferType;
  private sellerOfferedAmount?: Money;

  public setBuyerRequestedAmount(buyerRequestedAmount: Money): this;
  public setBuyerRequestedAmount(buyerRequestedAmount: (type: Money) => void): this;
  public setBuyerRequestedAmount(buyerRequestedAmount: Money | ((type: Money) => void)) {
    if (buyerRequestedAmount instanceof Money) this.buyerRequestedAmount = buyerRequestedAmount;
    else buyerRequestedAmount((this.buyerRequestedAmount = new Money()));
    return this;
  }
  public getBuyerRequestedAmount() {
    return this.buyerRequestedAmount;
  }

  public setHistory(...history: OfferHistory[]): this;
  public setHistory(...history: ((type: OfferHistory) => void)[]): this;
  public setHistory(...history: (OfferHistory | ((type: OfferHistory) => void))[]) {
    this.history = history.map((item) => {
      if (item instanceof OfferHistory) return item;
      else {
        const newHistory = new OfferHistory();
        item(newHistory);
        return newHistory;
      }
    });
    return this;
  }
  public getHistory() {
    return this.history;
  }

  public setOfferType(offerType: OfferType): this;
  public setOfferType(offerType: (type: typeof OfferType) => OfferType): this;
  public setOfferType(offerType: OfferType | ((type: typeof OfferType) => OfferType)) {
    if (typeof offerType === "function") this.offerType = offerType(OfferType);
    else this.offerType = offerType;
    return this;
  }
  public getOfferType() {
    return this.offerType;
  }

  public setSellerOfferedAmount(sellerOfferedAmount: Money): this;
  public setSellerOfferedAmount(sellerOfferedAmount: (type: Money) => void): this;
  public setSellerOfferedAmount(sellerOfferedAmount: Money | ((type: Money) => void)) {
    if (sellerOfferedAmount instanceof Money) this.sellerOfferedAmount = sellerOfferedAmount;
    else sellerOfferedAmount((this.sellerOfferedAmount = new Money()));
    return this;
  }
  public getSellerOfferedAmount() {
    return this.sellerOfferedAmount;
  }

  public override getFields<T extends TOffer>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TOffer) {
    const offer = new Offer();
    if (obj.buyer_requested_amount) offer.setBuyerRequestedAmount(Money.fromObject(obj.buyer_requested_amount));
    if (obj.history) offer.setHistory(...obj.history.map((item) => OfferHistory.fromObject(item)));
    if (obj.offer_type) offer.setOfferType(OfferType[obj.offer_type]);
    if (obj.seller_offered_amount) offer.setSellerOfferedAmount(Money.fromObject(obj.seller_offered_amount));
    return offer;
  }
}
