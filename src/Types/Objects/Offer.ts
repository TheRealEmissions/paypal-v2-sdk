import { OfferType } from "../Enums/OfferType";
import Types, { ITypes, Static } from "../Types";
import Money, { TMoney } from "./Money";
import OfferHistory, { TOfferHistory } from "./OfferHistory";

export type TOffer = {
  buyer_requested_amount?: TMoney;
  history?: TOfferHistory[];
  offer_type?: keyof typeof OfferType;
  seller_offered_amount?: TMoney;
};

class Offer extends Types implements Static<ITypes, typeof Offer> {
  buyerRequestedAmount?: Money;
  history?: OfferHistory[];
  offerType?: OfferType;
  sellerOfferedAmount?: Money;

  constructor() {
    super();
  }

  setBuyerRequestedAmount(buyerRequestedAmount: Money | ((type: Money) => void)) {
    if (buyerRequestedAmount instanceof Money) this.buyerRequestedAmount = buyerRequestedAmount;
    else buyerRequestedAmount((this.buyerRequestedAmount = new Money()));
    return this;
  }

  setHistory(...history: (OfferHistory | ((type: OfferHistory) => void))[]) {
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

  setOfferType(offerType: OfferType | ((type: typeof OfferType) => OfferType)) {
    if (typeof offerType === "function") this.offerType = offerType(OfferType);
    else this.offerType = offerType;
    return this;
  }

  setSellerOfferedAmount(sellerOfferedAmount: Money | ((type: Money) => void)) {
    if (sellerOfferedAmount instanceof Money) this.sellerOfferedAmount = sellerOfferedAmount;
    else sellerOfferedAmount((this.sellerOfferedAmount = new Money()));
    return this;
  }

  static fromObject(obj: TOffer) {
    const offer = new Offer();
    if (obj.buyer_requested_amount) offer.setBuyerRequestedAmount(Money.fromObject(obj.buyer_requested_amount));
    if (obj.history) offer.setHistory(...obj.history.map((item) => OfferHistory.fromObject(item)));
    if (obj.offer_type) offer.setOfferType(OfferType[obj.offer_type]);
    if (obj.seller_offered_amount) offer.setSellerOfferedAmount(Money.fromObject(obj.seller_offered_amount));
    return offer;
  }
}

export default Offer;
