import Types from "../Types.js";
import { ResponseAcceptClaimType as ResponseAcceptClaimTypeEnum } from "../Enums/ResponseAcceptClaimType.js";

export type TResponseAcceptClaimType = {
  "response-accept_claim_type"?: keyof typeof ResponseAcceptClaimTypeEnum;
};

class ResponseAcceptClaimType extends Types {
  responseAcceptClaimType?: ResponseAcceptClaimTypeEnum;
  constructor() {
    super();
  }

  setResponseAcceptClaimType(responseAcceptClaimType: ResponseAcceptClaimTypeEnum) {
    this.responseAcceptClaimType = responseAcceptClaimType;
    return this;
  }

  override fromObject(obj: TResponseAcceptClaimType) {
    this.responseAcceptClaimType =
      ResponseAcceptClaimTypeEnum[obj["response-accept_claim_type"] as keyof typeof ResponseAcceptClaimTypeEnum];
    return this;
  }
}

export default ResponseAcceptClaimType;
