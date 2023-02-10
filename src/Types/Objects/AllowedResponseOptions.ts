import Types from "../Types";
import AcceptClaim, { TAcceptClaim } from "./AcceptClaim";
import AcknowledgeReturnItem, { TAcknowledgeReturnItem } from "./AcknowledgeReturnItem";
import MakeOffer, { TMakeOffer } from "./MakeOffer";

export type TAllowedResponseOptions = {
  accept_claim?: TAcceptClaim;
  acknowledge_return_item?: TAcknowledgeReturnItem;
  make_offer?: TMakeOffer;
};

class AllowedResponseOptions extends Types {
  acceptClaim?: AcceptClaim;
  acknowledgeReturnItem?: AcknowledgeReturnItem;
  makeOffer?: MakeOffer;
  constructor() {
    super();
  }

  setAcceptClaim(acceptClaim: AcceptClaim) {
    this.acceptClaim = acceptClaim;
    return this;
  }

  setAcknowledgeReturnItem(acknowledgeReturnItem: AcknowledgeReturnItem) {
    this.acknowledgeReturnItem = acknowledgeReturnItem;
    return this;
  }

  setMakeOffer(makeOffer: MakeOffer) {
    this.makeOffer = makeOffer;
    return this;
  }

  override fromObject(obj: TAllowedResponseOptions) {
    this.acceptClaim = obj.accept_claim ? new AcceptClaim().fromObject(obj.accept_claim) : undefined;
    this.acknowledgeReturnItem = obj.acknowledge_return_item
      ? new AcknowledgeReturnItem().fromObject(obj.acknowledge_return_item)
      : undefined;
    this.makeOffer = obj.make_offer ? new MakeOffer().fromObject(obj.make_offer) : undefined;
    return this;
  }
}

export default AllowedResponseOptions;
