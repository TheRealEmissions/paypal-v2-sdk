import { Utility, IUtility, Static } from "../../Utility";
import { OfferType } from "../Enums/OfferType";
import { Money, TMoney } from "./Money";
import { PortablePostalAddress, TPortablePostalAddress } from "./PortablePostalAddress";

export type TMakeOffer = {
  offer_types?: (keyof typeof OfferType)[];
  note?: string;
  offer_type?: keyof typeof OfferType;
  invoice_id?: string;
  offer_amount?: TMoney;
  return_shipping_address?: TPortablePostalAddress;
};

export class MakeOffer extends Utility implements Static<IUtility, typeof MakeOffer> {
  private offerTypes?: OfferType[];
  private note!: string;
  private offerType!: OfferType;
  private invoiceId?: string;
  private offerAmount?: Money;
  private returnShippingAddress?: PortablePostalAddress;

  public setOfferTypes(...offerTypes: OfferType[]): this;
  public setOfferTypes(...offerTypes: ((offerType: typeof OfferType) => OfferType)[]): this;
  public setOfferTypes(...offerTypes: (OfferType | ((offerType: typeof OfferType) => OfferType))[]) {
    this.offerTypes = offerTypes.map((offerType) => {
      if (typeof offerType === "function") return offerType(OfferType);
      else return offerType;
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
  public setOfferType(offerType: (offerType: typeof OfferType) => OfferType): this;
  public setOfferType(offerType: OfferType | ((offerType: typeof OfferType) => OfferType)) {
    if (typeof offerType === "function") this.offerType = offerType(OfferType);
    else this.offerType = offerType;
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

  public setReturnShippingAddress(returnShippingAddress: PortablePostalAddress): this;
  public setReturnShippingAddress(returnShippingAddress: (address: PortablePostalAddress) => void): this;
  public setReturnShippingAddress(
    returnShippingAddress: PortablePostalAddress | ((address: PortablePostalAddress) => void)
  ) {
    if (returnShippingAddress instanceof PortablePostalAddress) this.returnShippingAddress = returnShippingAddress;
    else {
      const address = new PortablePostalAddress();
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
      makeOffer.setOfferTypes(
        ...obj.offer_types.map((offerType) => {
          return OfferType[offerType];
        })
      );
    if (obj.note) makeOffer.setNote(obj.note);
    if (obj.offer_type) makeOffer.setOfferType(OfferType[obj.offer_type]);
    if (obj.invoice_id) makeOffer.setInvoiceId(obj.invoice_id);
    if (obj.offer_amount) makeOffer.setOfferAmount(Money.fromObject(obj.offer_amount));
    if (obj.return_shipping_address)
      makeOffer.setReturnShippingAddress(PortablePostalAddress.fromObject(obj.return_shipping_address));
    return makeOffer;
  }
}
