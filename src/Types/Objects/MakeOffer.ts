import Types, { ITypes, StaticImplements } from "../Types";
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

class MakeOffer extends Types implements StaticImplements<ITypes, typeof MakeOffer> {
  offerTypes?: OfferType[];
  note!: string;
  offerType!: OfferType;
  invoiceId?: string;
  offerAmount?: Money;
  returnShippingAddress?: AddressPortable;
  constructor() {
    super();
  }

  setOfferTypes(offerTypes: OfferType[]) {
    this.offerTypes = offerTypes;
    return this;
  }

  setNote(note: string) {
    this.note = note;
    return this;
  }

  setOfferType(offerType: OfferType) {
    this.offerType = offerType;
    return this;
  }

  setInvoiceId(invoiceId: string) {
    this.invoiceId = invoiceId;
    return this;
  }

  setOfferAmount(offerAmount: Money) {
    this.offerAmount = offerAmount;
    return this;
  }

  setReturnShippingAddress(returnShippingAddress: AddressPortable) {
    this.returnShippingAddress = returnShippingAddress;
    return this;
  }

  static fromObject(obj: TMakeOffer) {
    const makeOffer = new MakeOffer();
    if (obj.offer_types) makeOffer.setOfferTypes(obj.offer_types.map((offerType) => OfferType.fromObject(offerType)));
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
