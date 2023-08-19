import { Utility, IUtility, Static, OnlySetters } from "../../Utility";
import { AcceptClaim, TAcceptClaim } from "./AcceptClaim";
import { AcknowledgeReturnItem, TAcknowledgeReturnItem } from "./AcknowledgeReturnItem";
import { MakeOffer, TMakeOffer } from "./MakeOffer";

export type TAllowedResponseOptions = {
  accept_claim?: TAcceptClaim;
  acknowledge_return_item?: TAcknowledgeReturnItem;
  make_offer?: TMakeOffer;
};

type AllowedResponseOptionsFields = {
  readonly acceptClaim?: AcceptClaim;
  readonly acknowledgeReturnItem?: AcknowledgeReturnItem;
  readonly makeOffer?: MakeOffer;
};

export class AllowedResponseOptions extends Utility implements Static<IUtility, typeof AllowedResponseOptions> {
  private acceptClaim?: AcceptClaim;
  private acknowledgeReturnItem?: AcknowledgeReturnItem;
  private makeOffer?: MakeOffer;

  public setAcceptClaim(acceptClaim: AcceptClaim): OnlySetters<this>;
  public setAcceptClaim(acceptClaim: (claim: OnlySetters<AcceptClaim>) => void): OnlySetters<this>;
  public setAcceptClaim(acceptClaim: AcceptClaim | ((claim: OnlySetters<AcceptClaim>) => void)): OnlySetters<this> {
    if (acceptClaim instanceof AcceptClaim) this.acceptClaim = acceptClaim;
    else {
      const claim = new AcceptClaim();
      acceptClaim(claim);
      this.acceptClaim = claim;
    }
    return this;
  }
  public getAcceptClaim() {
    return this.acceptClaim;
  }

  public setAcknowledgeReturnItem(acknowledgeReturnItem: AcknowledgeReturnItem): OnlySetters<this>;
  public setAcknowledgeReturnItem(
    acknowledgeReturnItem: (item: OnlySetters<AcknowledgeReturnItem>) => void
  ): OnlySetters<this>;
  public setAcknowledgeReturnItem(
    acknowledgeReturnItem: AcknowledgeReturnItem | ((item: OnlySetters<AcknowledgeReturnItem>) => void)
  ): OnlySetters<this> {
    if (acknowledgeReturnItem instanceof AcknowledgeReturnItem) this.acknowledgeReturnItem = acknowledgeReturnItem;
    else {
      const item = new AcknowledgeReturnItem();
      acknowledgeReturnItem(item);
      this.acknowledgeReturnItem = item;
    }
    return this;
  }
  public getAcknowledgeReturnItem() {
    return this.acknowledgeReturnItem;
  }

  public setMakeOffer(makeOffer: MakeOffer): OnlySetters<this>;
  public setMakeOffer(makeOffer: (offer: OnlySetters<MakeOffer>) => void): OnlySetters<this>;
  public setMakeOffer(makeOffer: MakeOffer | ((offer: OnlySetters<MakeOffer>) => void)): OnlySetters<this> {
    if (makeOffer instanceof MakeOffer) this.makeOffer = makeOffer;
    else {
      const offer = new MakeOffer();
      makeOffer(offer);
      this.makeOffer = offer;
    }
    return this;
  }
  public getMakeOffer() {
    return this.makeOffer;
  }

  public override getFields<T extends AllowedResponseOptionsFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TAllowedResponseOptions) {
    const allowedResponseOptions = new AllowedResponseOptions();
    if (obj.accept_claim) allowedResponseOptions.setAcceptClaim(AcceptClaim.fromObject(obj.accept_claim));
    if (obj.acknowledge_return_item)
      allowedResponseOptions.setAcknowledgeReturnItem(AcknowledgeReturnItem.fromObject(obj.acknowledge_return_item));
    if (obj.make_offer) allowedResponseOptions.setMakeOffer(MakeOffer.fromObject(obj.make_offer));
    return allowedResponseOptions;
  }
}
