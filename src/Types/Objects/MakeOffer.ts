import { Utility, IUtility, Static } from "../Utility";
import { AddressPortable, TAddressPortable } from "./AddressPortable";
import { Money, TMoney } from "./Money";
import { OfferType, TOfferType } from "./OfferType";

export type TMakeOffer = {
  offer_types?: TOfferType[];
  note?: string;
  offer_type?: TOfferType;
  invoice_id?: string;
  offer_amount?: TMoney;
  return_shipping_address?: TAddressPortable;
};

export class MakeOffer extends Utility implements Static<IUtility, typeof MakeOffer> {
  private offerTypes?: OfferType[];
  private note!: string;
  private offerType!: OfferType;
  private invoiceId?: string;
  private offerAmount?: Money;
  private returnShippingAddress?: AddressPortable;

  public setOfferTypes(...offerTypes: OfferType[]): this;
  public setOfferTypes(...offerTypes: ((offerType: OfferType) => void)[]): this;
  public setOfferTypes(...offerTypes: (OfferType | ((offerType: OfferType) => void))[]) {
    this.offerTypes = offerTypes.map((offerType) => {
      if (offerType instanceof OfferType) return offerType;
      const _offerType = new OfferType();
      offerType(_offerType);
      return _offerType;
    });
    return this;
  }
  public getOfferTypes() {
    return this.offerTypes;
  }

  public setNote(note: string) {
    this.note = note;
    return this;
  }
  public getNote() {
    return this.note;
  }

  public setOfferType(offerType: OfferType): this;
  public setOfferType(offerType: (offerType: OfferType) => void): this;
  public setOfferType(offerType: OfferType | ((offerType: OfferType) => void)) {
    if (offerType instanceof OfferType) this.offerType = offerType;
    else {
      const _offerType = new OfferType();
      offerType(_offerType);
      this.offerType = _offerType;
    }
    return this;
  }
  public getOfferType() {
    return this.offerType;
  }

  public setInvoiceId(invoiceId: string) {
    this.invoiceId = invoiceId;
    return this;
  }
  public getInvoiceId() {
    return this.invoiceId;
  }

  public setOfferAmount(offerAmount: Money): this;
  public setOfferAmount(offerAmount: (money: Money) => void): this;
  public setOfferAmount(offerAmount: Money | ((money: Money) => void)) {
    if (offerAmount instanceof Money) this.offerAmount = offerAmount;
    else {
      const money = new Money();
      offerAmount(money);
      this.offerAmount = money;
    }
    return this;
  }
  public getOfferAmount() {
    return this.offerAmount;
  }

  public setReturnShippingAddress(returnShippingAddress: AddressPortable): this;
  public setReturnShippingAddress(returnShippingAddress: (address: AddressPortable) => void): this;
  public setReturnShippingAddress(returnShippingAddress: AddressPortable | ((address: AddressPortable) => void)) {
    if (returnShippingAddress instanceof AddressPortable) this.returnShippingAddress = returnShippingAddress;
    else {
      const address = new AddressPortable();
      returnShippingAddress(address);
      this.returnShippingAddress = address;
    }
    return this;
  }
  public getReturnShippingAddress() {
    return this.returnShippingAddress;
  }

  public override getFields<T extends TMakeOffer>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TMakeOffer) {
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
