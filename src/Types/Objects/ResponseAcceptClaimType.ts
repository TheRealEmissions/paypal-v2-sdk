import { Utility, IUtility, Static } from "../Utility.js";
import { ResponseAcceptClaimType as ResponseAcceptClaimTypeEnum } from "../Enums/ResponseAcceptClaimType.js";

export type TResponseAcceptClaimType = {
  "response-accept_claim_type"?: keyof typeof ResponseAcceptClaimTypeEnum;
};

export class ResponseAcceptClaimType extends Utility implements Static<IUtility, typeof ResponseAcceptClaimType> {
  private responseAcceptClaimType?: ResponseAcceptClaimTypeEnum;

  public setResponseAcceptClaimType(responseAcceptClaimType: ResponseAcceptClaimTypeEnum): this;
  public setResponseAcceptClaimType(
    responseAcceptClaimType: (
      responseAcceptClaimType: typeof ResponseAcceptClaimTypeEnum
    ) => ResponseAcceptClaimTypeEnum
  ): this;
  public setResponseAcceptClaimType(
    responseAcceptClaimType:
      | ResponseAcceptClaimTypeEnum
      | ((responseAcceptClaimType: typeof ResponseAcceptClaimTypeEnum) => ResponseAcceptClaimTypeEnum)
  ) {
    if (typeof responseAcceptClaimType === "function")
      this.responseAcceptClaimType = responseAcceptClaimType(ResponseAcceptClaimTypeEnum);
    else this.responseAcceptClaimType = responseAcceptClaimType;
    return this;
  }
  public getResponseAcceptClaimType() {
    return this.responseAcceptClaimType;
  }

  public override getFields<T extends TResponseAcceptClaimType>() {
    const fields = super.getFields<T & { response_accept_claim_type?: keyof typeof ResponseAcceptClaimTypeEnum }>();
    const temp = fields["response_accept_claim_type"];
    delete fields["response_accept_claim_type"];
    fields["response-accept_claim_type"] = temp;
    return fields as T;
  }

  static fromObject(obj: TResponseAcceptClaimType) {
    const responseAcceptClaimType = new ResponseAcceptClaimType();
    if (obj["response-accept_claim_type"])
      responseAcceptClaimType.setResponseAcceptClaimType(
        ResponseAcceptClaimTypeEnum[obj["response-accept_claim_type"]]
      );
    return responseAcceptClaimType;
  }
}
