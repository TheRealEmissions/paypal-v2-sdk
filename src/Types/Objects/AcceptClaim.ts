import { AcceptClaimReason } from "../Enums/AcceptClaimReason.js";
import { AcceptClaimType } from "../Enums/AcceptClaimType.js";
import Types from "../Types.js";
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

class AcceptClaim extends Types {
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

  setAcceptClaimTypes(acceptClaimTypes: ResponseAcceptClaimType[]) {
    this.acceptClaimTypes = acceptClaimTypes;
    return this;
  }

  setNote(note: string) {
    this.note = note;
    return this;
  }

  setAcceptClaimReason(acceptClaimReason: AcceptClaimReason) {
    this.acceptClaimReason = acceptClaimReason;
    return this;
  }

  setAcceptClaimType(acceptClaimType: AcceptClaimType) {
    this.acceptClaimType = acceptClaimType;
    return this;
  }

  setInvoiceId(invoiceId: string) {
    this.invoiceId = invoiceId;
    return this;
  }

  setRefundAmount(refundAmount: Money) {
    this.refundAmount = refundAmount;
    return this;
  }

  setReturnShipmentInfo(returnShipmentInfo: ResponseShipmentInfo[]) {
    this.returnShipmentInfo = returnShipmentInfo;
    return this;
  }

  setReturnShippingAddress(returnShippingAddress: AddressPortable) {
    this.returnShippingAddress = returnShippingAddress;
    return this;
  }

  override fromObject(obj: TAcceptClaim) {
    this.acceptClaimTypes = obj.accept_claim_types
      ? obj.accept_claim_types.map((acceptClaimType) => new ResponseAcceptClaimType().fromObject(acceptClaimType))
      : undefined;
    this.note = obj.note;
    this.acceptClaimReason = AcceptClaimReason[obj.accept_claim_reason as keyof typeof AcceptClaimReason];
    this.acceptClaimType = AcceptClaimType[obj.accept_claim_type as keyof typeof AcceptClaimType];
    this.invoiceId = obj.invoice_id;
    this.refundAmount = obj.refund_amount ? new Money().fromObject(obj.refund_amount) : undefined;
    this.returnShipmentInfo = obj.return_shipment_info
      ? obj.return_shipment_info.map((returnShipmentInfo) => new ResponseShipmentInfo().fromObject(returnShipmentInfo))
      : undefined;
    this.returnShippingAddress = obj.return_shipping_address
      ? new AddressPortable().fromObject(obj.return_shipping_address)
      : undefined;
    return this;
  }
}

export default AcceptClaim;
