import Types, { ITypes, Static } from "@Types/Types";
import AddressPortable, { TAddressPortable } from "./AddressPortable";
import Money, { TMoney } from "./Money";
import OfferType, { TOfferType } from "./OfferType";

export type TMakeOffer = {
  offer_types?: TOfferType[];
  note?: string;
  offer_type?: TOfferType;
  invoice_id?: string;
  offer_amount?: TMoney;
  return_shipping_address?: TAddressPortable;
};

class MakeOffer extends Types implements Static<ITypes, typeof MakeOffer> {
  offerTypes?: OfferType[];
  note!: string;
  offerType!: OfferType;
  invoiceId?: string;
  offerAmount?: Money;
  returnShippingAddress?: AddressPortable;
  constructor() {
    super();
  }

  setOfferTypes(...offerTypes: (OfferType | ((offerType: OfferType) => void))[]) {
    this.offerTypes = offerTypes.map((offerType) => {
      if (offerType instanceof OfferType) return offerType;
      const _offerType = new OfferType();
      offerType(_offerType);
      return _offerType;
    });
    return this;
  }

  setNote(note: string) {
    this.note = note;
    return this;
  }

  setOfferType(offerType: OfferType | ((offerType: OfferType) => void)) {
    if (offerType instanceof OfferType) this.offerType = offerType;
    else {
      const _offerType = new OfferType();
      offerType(_offerType);
      this.offerType = _offerType;
    }
    return this;
  }

  setInvoiceId(invoiceId: string) {
    this.invoiceId = invoiceId;
    return this;
  }

  setOfferAmount(offerAmount: Money | ((money: Money) => void)) {
    if (offerAmount instanceof Money) this.offerAmount = offerAmount;
    else {
      const money = new Money();
      offerAmount(money);
      this.offerAmount = money;
    }
    return this;
  }

  setReturnShippingAddress(returnShippingAddress: AddressPortable | ((address: AddressPortable) => void)) {
    if (returnShippingAddress instanceof AddressPortable) this.returnShippingAddress = returnShippingAddress;
    else {
      const address = new AddressPortable();
      returnShippingAddress(address);
      this.returnShippingAddress = address;
    }
    return this;
  }

  static fromObject(obj: TMakeOffer) {
    const makeOffer = new MakeOffer();
    if (obj.offer_types)
      makeOffer.setOfferTypes(...obj.offer_types.map((offerType) => OfferType.fromObject(offerType)));
    if (obj.note) makeOffer.setNote(obj.note);
    if (obj.offer_type) makeOffer.setOfferType(OfferType.fromObject(obj.offer_type));
    if (obj.invoice_id) makeOffer.setInvoiceId(obj.invoice_id);
    if (obj.offer_amount) makeOffer.setOfferAmount(Money.fromObject(obj.offer_amount));
    if (obj.return_shipping_address)
      makeOffer.setReturnShippingAddress(AddressPortable.fromObject(obj.return_shipping_address));
    return makeOffer;
  }
}

export default MakeOffer;
