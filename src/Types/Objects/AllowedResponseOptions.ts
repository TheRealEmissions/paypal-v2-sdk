import Types, { ITypes, Static } from "../Types";
import { AcceptClaim, TAcceptClaim } from "./AcceptClaim";
import { AcknowledgeReturnItem, TAcknowledgeReturnItem } from "./AcknowledgeReturnItem";
import { MakeOffer, TMakeOffer } from "./MakeOffer";

export type TAllowedResponseOptions = {
  accept_claim?: TAcceptClaim;
  acknowledge_return_item?: TAcknowledgeReturnItem;
  make_offer?: TMakeOffer;
};

export class AllowedResponseOptions extends Types implements Static<ITypes, typeof AllowedResponseOptions> {
  acceptClaim?: AcceptClaim;
  acknowledgeReturnItem?: AcknowledgeReturnItem;
  makeOffer?: MakeOffer;

  setAcceptClaim(acceptClaim: AcceptClaim): this;
  setAcceptClaim(acceptClaim: (claim: AcceptClaim) => void): this;
  setAcceptClaim(acceptClaim: AcceptClaim | ((claim: AcceptClaim) => void)) {
    if (acceptClaim instanceof AcceptClaim) this.acceptClaim = acceptClaim;
    else {
      const claim = new AcceptClaim();
      acceptClaim(claim);
      this.acceptClaim = claim;
    }
    return this;
  }

  setAcknowledgeReturnItem(acknowledgeReturnItem: AcknowledgeReturnItem): this;
  setAcknowledgeReturnItem(acknowledgeReturnItem: (item: AcknowledgeReturnItem) => void): this;
  setAcknowledgeReturnItem(acknowledgeReturnItem: AcknowledgeReturnItem | ((item: AcknowledgeReturnItem) => void)) {
    if (acknowledgeReturnItem instanceof AcknowledgeReturnItem) this.acknowledgeReturnItem = acknowledgeReturnItem;
    else {
      const item = new AcknowledgeReturnItem();
      acknowledgeReturnItem(item);
      this.acknowledgeReturnItem = item;
    }
    return this;
  }

  setMakeOffer(makeOffer: MakeOffer): this;
  setMakeOffer(makeOffer: (offer: MakeOffer) => void): this;
  setMakeOffer(makeOffer: MakeOffer | ((offer: MakeOffer) => void)) {
    if (makeOffer instanceof MakeOffer) this.makeOffer = makeOffer;
    else {
      const offer = new MakeOffer();
      makeOffer(offer);
      this.makeOffer = offer;
    }
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
