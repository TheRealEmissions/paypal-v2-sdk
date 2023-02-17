import Types, { ITypes, Static } from "../Types";
import AcceptClaim, { TAcceptClaim } from "./AcceptClaim";
import AcknowledgeReturnItem, { TAcknowledgeReturnItem } from "./AcknowledgeReturnItem";
import MakeOffer, { TMakeOffer } from "./MakeOffer";

export type TAllowedResponseOptions = {
  accept_claim?: TAcceptClaim;
  acknowledge_return_item?: TAcknowledgeReturnItem;
  make_offer?: TMakeOffer;
};

class AllowedResponseOptions extends Types implements Static<ITypes, typeof AllowedResponseOptions> {
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

  static fromObject(obj: TAllowedResponseOptions) {
    const allowedResponseOptions = new AllowedResponseOptions();
    if (obj.accept_claim) allowedResponseOptions.setAcceptClaim(AcceptClaim.fromObject(obj.accept_claim));
    if (obj.acknowledge_return_item)
      allowedResponseOptions.setAcknowledgeReturnItem(AcknowledgeReturnItem.fromObject(obj.acknowledge_return_item));
    if (obj.make_offer) allowedResponseOptions.setMakeOffer(MakeOffer.fromObject(obj.make_offer));
    return allowedResponseOptions;
  }
}

export default AllowedResponseOptions;
