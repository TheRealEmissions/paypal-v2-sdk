import { Utility, IUtility, Static, OnlySetters } from "../../Utility";
import { AdjudicationOutcome } from "../Enums/AdjudicationOutcome";

export type TAdjudicate = {
  adjudication_outcome?: keyof typeof AdjudicationOutcome;
};

type AdjudicateFields = {
  readonly adjudicationOutcome: AdjudicationOutcome;
};

export class Adjudicate extends Utility implements Static<IUtility, typeof Adjudicate> {
  private adjudicationOutcome!: AdjudicationOutcome;

  public setAdjudicationOutcome(adjudicationOutcome: AdjudicationOutcome): OnlySetters<this>;
  public setAdjudicationOutcome(
    adjudicationOutcome: (adjudicationOutcome: typeof AdjudicationOutcome) => AdjudicationOutcome
  ): OnlySetters<this>;
  public setAdjudicationOutcome(
    adjudicationOutcome:
      | AdjudicationOutcome
      | ((adjudicationOutcome: typeof AdjudicationOutcome) => AdjudicationOutcome)
  ): OnlySetters<this> {
    if (typeof adjudicationOutcome === "function") this.adjudicationOutcome = adjudicationOutcome(AdjudicationOutcome);
    else this.adjudicationOutcome = adjudicationOutcome;
    return this;
  }
  public getAdjucationOutcome() {
    return this.adjudicationOutcome;
  }

  public override getFields<T extends Partial<AdjudicateFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TAdjudicate) {
    const adjudicate = new Adjudicate();
    if (obj.adjudication_outcome !== undefined)
      adjudicate.setAdjudicationOutcome(AdjudicationOutcome[obj.adjudication_outcome]);
    return adjudicate;
  }
}
