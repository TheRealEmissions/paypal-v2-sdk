import { IUtility, Static, Utility } from "../../Utility";
import { AcceptClaimReason } from "../Enums/AcceptClaimReason";
import { AcceptClaimType } from "../Enums/AcceptClaimType";
import { Money, TMoney } from "./Money";
import { PortablePostalAddress, TPortablePostalAddress } from "./PortablePostalAddress";
import { ResponseShipmentInfo, TResponseShipmentInfo } from "./ResponseShipmentInfo";

export type TAcceptClaim = {
  note?: string;
  accept_claim_reason?: keyof typeof AcceptClaimReason;
  accept_claim_type?: keyof typeof AcceptClaimType;
  invoice_id?: string;
  refund_amount?: TMoney;
  return_shipment_info?: TResponseShipmentInfo[];
  return_shipping_address?: TPortablePostalAddress;
};

export class AcceptClaim extends Utility implements Static<IUtility, typeof AcceptClaim> {
  private note?: string;
  private acceptClaimReason?: AcceptClaimReason;
  private acceptClaimType?: AcceptClaimType;
  private invoiceId?: string;
  private refundAmount?: Money;
  private returnShipmentInfo?: ResponseShipmentInfo[];
  private returnShippingAddress?: PortablePostalAddress;

  public setNote(note: string) {
    this.note = note;
    return this;
  }
  public getNote() {
    return this.note;
  }

  public setAcceptClaimReason(acceptClaimReason: AcceptClaimReason): this;
  public setAcceptClaimReason(
    acceptClaimReason: (acceptClaimReason: typeof AcceptClaimReason) => AcceptClaimReason
  ): this;
  public setAcceptClaimReason(
    acceptClaimReason: AcceptClaimReason | ((acceptClaimReason: typeof AcceptClaimReason) => AcceptClaimReason)
  ) {
    if (typeof acceptClaimReason === "function") this.acceptClaimReason = acceptClaimReason(AcceptClaimReason);
    else this.acceptClaimReason = acceptClaimReason;
    return this;
  }
  public getAcceptClaimReason() {
    return this.acceptClaimReason;
  }

  public setAcceptClaimType(acceptClaimType: AcceptClaimType): this;
  public setAcceptClaimType(acceptClaimType: (acceptClaimType: typeof AcceptClaimType) => AcceptClaimType): this;
  public setAcceptClaimType(acceptClaimType: AcceptClaimType | ((x: typeof AcceptClaimType) => AcceptClaimType)) {
    if (typeof acceptClaimType === "function") this.acceptClaimType = acceptClaimType(AcceptClaimType);
    else this.acceptClaimType = acceptClaimType;
    return this;
  }
  public getAcceptClaimType() {
    return this.acceptClaimType;
  }

  public setInvoiceId(invoiceId: string) {
    this.invoiceId = invoiceId;
    return this;
  }
  public getInvoiceId() {
    return this.invoiceId;
  }

  public setRefundAmount(refundAmount: Money): this;
  public setRefundAmount(refundAmount: (money: Money) => void): this;
  public setRefundAmount(refundAmount: Money | ((money: Money) => void)) {
    if (refundAmount instanceof Money) this.refundAmount = refundAmount;
    else {
      const money = new Money();
      refundAmount(money);
      this.refundAmount = money;
    }
    return this;
  }
  public getRefundAmount() {
    return this.refundAmount;
  }

  public setReturnShipmentInfo(...returnShipmentInfo: ResponseShipmentInfo[]): this;
  public setReturnShipmentInfo(...returnShipmentInfo: ((x: ResponseShipmentInfo) => void)[]): this;
  public setReturnShipmentInfo(...returnShipmentInfo: (ResponseShipmentInfo | ((x: ResponseShipmentInfo) => void))[]) {
    this.returnShipmentInfo = returnShipmentInfo.map((returnShipmentInfo) => {
      if (returnShipmentInfo instanceof ResponseShipmentInfo) return returnShipmentInfo;
      const response = new ResponseShipmentInfo();
      returnShipmentInfo(response);
      return response;
    });
    return this;
  }
  public getReturnShipmentInfo() {
    return this.returnShipmentInfo;
  }

  public setReturnShippingAddress(returnShippingAddress: PortablePostalAddress): this;
  public setReturnShippingAddress(returnShippingAddress: (x: PortablePostalAddress) => void): this;
  public setReturnShippingAddress(returnShippingAddress: PortablePostalAddress | ((x: PortablePostalAddress) => void)) {
    if (returnShippingAddress instanceof PortablePostalAddress) this.returnShippingAddress = returnShippingAddress;
    else {
      const addressPortable = new PortablePostalAddress();
      returnShippingAddress(addressPortable);
      this.returnShippingAddress = addressPortable;
    }
    return this;
  }
  public getReturnShippingAddress() {
    return this.returnShippingAddress;
  }

  public override getFields<T extends TAcceptClaim>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TAcceptClaim) {
    const acceptClaim = new AcceptClaim();
    if (obj.note) acceptClaim.setNote(obj.note);
    if (obj.accept_claim_reason) acceptClaim.setAcceptClaimReason(AcceptClaimReason[obj.accept_claim_reason]);
    if (obj.accept_claim_type) acceptClaim.setAcceptClaimType(AcceptClaimType[obj.accept_claim_type]);
    if (obj.invoice_id) acceptClaim.setInvoiceId(obj.invoice_id);
    if (obj.refund_amount) acceptClaim.setRefundAmount(Money.fromObject(obj.refund_amount));
    if (obj.return_shipment_info)
      acceptClaim.setReturnShipmentInfo(
        ...obj.return_shipment_info.map((returnShipmentInfo) => ResponseShipmentInfo.fromObject(returnShipmentInfo))
      );
    if (obj.return_shipping_address)
      acceptClaim.setReturnShippingAddress(PortablePostalAddress.fromObject(obj.return_shipping_address));
    return acceptClaim;
  }
}
