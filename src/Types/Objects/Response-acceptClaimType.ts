import Types from "../Types.js";

export type TResponseAcceptClaimType = {
  "response-accept_claim_type"?: string;
};

class ResponseAcceptClaimType extends Types {
  responseAcceptClaimType?: ResponseAcceptClaimType;
  constructor() {
    super();
  }

  setResponseAcceptClaimType(responseAcceptClaimType: ResponseAcceptClaimType) {
    this.responseAcceptClaimType = responseAcceptClaimType;
    return this;
  }

  override fromObject(obj: TResponseAcceptClaimType) {
    this.responseAcceptClaimType =
      ResponseAcceptClaimType[obj["response-accept_claim_type"] as keyof typeof ResponseAcceptClaimType];
    return this;
  }
}

export default ResponseAcceptClaimType;
