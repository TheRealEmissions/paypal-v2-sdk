import { AdjudicationOutcome } from "../Enums/AdjudicationOutcome";
import { Utility, IUtility, Static } from "../Utility";

export type TAdjudicate = {
  adjudication_outcome?: keyof typeof AdjudicationOutcome;
};

export class Adjudicate extends Utility implements Static<IUtility, typeof Adjudicate> {
  private adjudicationOutcome!: AdjudicationOutcome;

  public setAdjudicationOutcome(adjudicationOutcome: AdjudicationOutcome): this;
  public setAdjudicationOutcome(
    adjudicationOutcome: (adjudicationOutcome: typeof AdjudicationOutcome) => AdjudicationOutcome
  ): this;
  public setAdjudicationOutcome(
    adjudicationOutcome:
      | AdjudicationOutcome
      | ((adjudicationOutcome: typeof AdjudicationOutcome) => AdjudicationOutcome)
  ) {
    if (typeof adjudicationOutcome === "function") this.adjudicationOutcome = adjudicationOutcome(AdjudicationOutcome);
    else this.adjudicationOutcome = adjudicationOutcome;
    return this;
  }
  public getAdjucationOutcome() {
    return this.adjudicationOutcome;
  }

  public override getFields<T extends TAdjudicate>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TAdjudicate) {
    const adjudicate = new Adjudicate();
    if (obj.adjudication_outcome !== undefined)
      adjudicate.setAdjudicationOutcome(AdjudicationOutcome[obj.adjudication_outcome]);
    return adjudicate;
  }
}
