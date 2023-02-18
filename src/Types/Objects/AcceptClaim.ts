import { AcceptClaimReason } from "@Types/Enums/AcceptClaimReason.js";
import { AcceptClaimType } from "@Types/Enums/AcceptClaimType.js";
import Types, { ITypes, Static } from "@Types/Types.js";
import AddressPortable, { TAddressPortable } from "./AddressPortable.js";
import Money, { TMoney } from "./Money.js";
import ResponseAcceptClaimType, { TResponseAcceptClaimType } from "./ResponseAcceptClaimType.js";
import ResponseShipmentInfo, { TResponseShipmentInfo } from "./ResponseShipmentInfo.js";

export type TAcceptClaim = {
  accept_claim_types?: TResponseAcceptClaimType[];
  note?: string;
  accept_claim_reason?: keyof typeof AcceptClaimReason;
  accept_claim_type?: keyof typeof AcceptClaimType;
  invoice_id?: string;
  refund_amount?: TMoney;
  return_shipment_info?: TResponseShipmentInfo[];
  return_shipping_address?: TAddressPortable;
};

class AcceptClaim extends Types implements Static<ITypes, typeof AcceptClaim> {
  acceptClaimTypes?: ResponseAcceptClaimType[];
  note?: string;
  acceptClaimReason?: AcceptClaimReason;
  acceptClaimType?: AcceptClaimType;
  invoiceId?: string;
  refundAmount?: Money;
  returnShipmentInfo?: ResponseShipmentInfo[];
  returnShippingAddress?: AddressPortable;
  constructor() {
    super();
  }

  setAcceptClaimTypes(
    ...acceptClaimTypes: (ResponseAcceptClaimType | ((response: ResponseAcceptClaimType) => void))[]
  ) {
    this.acceptClaimTypes = acceptClaimTypes.map((acceptClaimType) => {
      if (acceptClaimType instanceof ResponseAcceptClaimType) return acceptClaimType;
      const response = new ResponseAcceptClaimType();
      acceptClaimType(response);
      return response;
    });
    return this;
  }

  setNote(note: string) {
    this.note = note;
    return this;
  }

  setAcceptClaimReason(acceptClaimReason: AcceptClaimReason | ((x: typeof AcceptClaimReason) => AcceptClaimReason)) {
    if (typeof acceptClaimReason === "function") this.acceptClaimReason = acceptClaimReason(AcceptClaimReason);
    else this.acceptClaimReason = acceptClaimReason;
    return this;
  }

  setAcceptClaimType(acceptClaimType: AcceptClaimType | ((x: typeof AcceptClaimType) => AcceptClaimType)) {
    if (typeof acceptClaimType === "function") this.acceptClaimType = acceptClaimType(AcceptClaimType);
    else this.acceptClaimType = acceptClaimType;
    return this;
  }

  setInvoiceId(invoiceId: string) {
    this.invoiceId = invoiceId;
    return this;
  }

  setRefundAmount(refundAmount: Money | ((money: Money) => void)) {
    if (refundAmount instanceof Money) this.refundAmount = refundAmount;
    else {
      const money = new Money();
      refundAmount(money);
      this.refundAmount = money;
    }
    return this;
  }

  setReturnShipmentInfo(...returnShipmentInfo: (ResponseShipmentInfo | ((x: ResponseShipmentInfo) => void))[]) {
    this.returnShipmentInfo = returnShipmentInfo.map((returnShipmentInfo) => {
      if (returnShipmentInfo instanceof ResponseShipmentInfo) return returnShipmentInfo;
      const response = new ResponseShipmentInfo();
      returnShipmentInfo(response);
      return response;
    });
    return this;
  }

  setReturnShippingAddress(returnShippingAddress: AddressPortable | ((x: AddressPortable) => void)) {
    if (returnShippingAddress instanceof AddressPortable) this.returnShippingAddress = returnShippingAddress;
    else {
      const addressPortable = new AddressPortable();
      returnShippingAddress(addressPortable);
      this.returnShippingAddress = addressPortable;
    }
    return this;
  }

  static fromObject(obj: TAcceptClaim) {
    const acceptClaim = new AcceptClaim();
    if (obj.accept_claim_types)
      acceptClaim.setAcceptClaimTypes(
        ...obj.accept_claim_types.map((acceptClaimType) => ResponseAcceptClaimType.fromObject(acceptClaimType))
      );
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
      acceptClaim.setReturnShippingAddress(AddressPortable.fromObject(obj.return_shipping_address));
    return acceptClaim;
  }
}

export default AcceptClaim;
