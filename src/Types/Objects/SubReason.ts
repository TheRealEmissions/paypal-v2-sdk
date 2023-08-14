import { ServiceIssueSubreason } from "../Enums/ServiceIssueSubreason.js";
import { IUtility, Static, Utility } from "../Utility.js";

export type TSubReason = {
  sub_reason?: keyof typeof ServiceIssueSubreason;
};

export class SubReason extends Utility implements Static<IUtility, typeof SubReason> {
  private subReason?: ServiceIssueSubreason;

  public setSubReason(subReason: ServiceIssueSubreason): this;
  public setSubReason(subReason: (subReason: typeof ServiceIssueSubreason) => ServiceIssueSubreason): this;
  public setSubReason(
    subReason: ServiceIssueSubreason | ((subReason: typeof ServiceIssueSubreason) => ServiceIssueSubreason)
  ) {
    if (typeof subReason === "function") this.subReason = subReason(ServiceIssueSubreason);
    else this.subReason = subReason;
    return this;
  }
  public getSubReason() {
    return this.subReason;
  }

  public override getFields<T extends TSubReason>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TSubReason) {
    const subReason = new SubReason();
    if (obj.sub_reason) subReason.setSubReason(ServiceIssueSubreason[obj.sub_reason]);
    return subReason;
  }
}
