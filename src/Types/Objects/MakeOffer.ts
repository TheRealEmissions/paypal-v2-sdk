import Types from "../Types";
import AddressPortable, { TAddressPortable } from "./AddressPortable";
import Money, { TMoney } from "./Money";
import OfferType, { TOfferType } from "./OfferType";

export type TMakeOffer = {
  offer_types?: TOfferType[];
  note?: string;
  offer_type?: string;
  invoice_id?: string;
  offer_amount?: TMoney;
  return_shipping_address?: TAddressPortable;
};

class MakeOffer extends Types {
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

  override fromObject(obj: TMakeOffer) {
    this.offerTypes = obj.offer_types?.map((offerType) => {
      return new OfferType().fromObject(offerType);
    });
    this.note = obj.note || "";
    this.offerType = new OfferType().fromObject(obj);
    this.invoiceId = obj.invoice_id;
    this.offerAmount = obj.offer_amount ? new Money().fromObject(obj.offer_amount) : undefined;
    this.returnShippingAddress = obj.return_shipping_address
      ? new AddressPortable().fromObject(obj.return_shipping_address)
      : undefined;
    return this;
  }
}

export default MakeOffer;
