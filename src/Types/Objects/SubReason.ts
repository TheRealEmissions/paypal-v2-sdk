import { ServiceIssueSubreason } from "../Enums/ServiceIssueSubreason";
import Types, { ITypes, Static } from "../Types";

export type TSubReason = {
  sub_reason?: keyof typeof ServiceIssueSubreason;
};

class SubReason extends Types implements Static<ITypes, typeof SubReason> {
  subReason?: ServiceIssueSubreason;

  constructor() {
    super();
  }

  setSubReason(
    subReason: ServiceIssueSubreason | ((subReason: typeof ServiceIssueSubreason) => ServiceIssueSubreason)
  ) {
    if (typeof subReason === "function") this.subReason = subReason(ServiceIssueSubreason);
    else this.subReason = subReason;
    return this;
  }

  static fromObject(obj: TSubReason) {
    const subReason = new SubReason();
    if (obj.sub_reason) subReason.setSubReason(ServiceIssueSubreason[obj.sub_reason]);
    return subReason;
  }
}

export default SubReason;
