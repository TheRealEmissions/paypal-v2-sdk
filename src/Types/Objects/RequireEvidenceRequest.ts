import { RequireEvidenceRequest as RequireEvidenceRequestEnum } from "../Enums/RequireEvidenceRequest";
import { IUtility, Static, Utility } from "../Utility";

export type TRequireEvidenceRequest = {
  action: keyof typeof RequireEvidenceRequestEnum;
};

export class RequireEvidenceRequest extends Utility implements Static<IUtility, typeof RequireEvidenceRequest> {
  private action!: RequireEvidenceRequestEnum;

  public setAction(
    action: RequireEvidenceRequestEnum | ((action: typeof RequireEvidenceRequestEnum) => RequireEvidenceRequestEnum)
  ) {
    if (typeof action === "function") {
      this.action = action(RequireEvidenceRequestEnum);
    } else {
      this.action = action;
    }
    return this;
  }
  public getAction() {
    return this.action;
  }

  public override getFields<T extends Partial<TRequireEvidenceRequest>>() {
    return super.getFields<T>();
  }

  static fromObject(obj: TRequireEvidenceRequest) {
    const requireEvidenceRequest = new RequireEvidenceRequest();
    requireEvidenceRequest.setAction(RequireEvidenceRequestEnum[obj.action]);
    return requireEvidenceRequest;
  }
}
