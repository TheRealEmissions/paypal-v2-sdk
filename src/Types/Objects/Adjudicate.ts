import { AdjudicationOutcome } from "../Enums/AdjudicationOutcome";
import Types, { ITypes, Static } from "../Types";

export type TAdjudicate = {
  adjudication_outcome?: keyof typeof AdjudicationOutcome;
};

export class Adjudicate extends Types implements Static<ITypes, typeof Adjudicate> {
  adjudicationOutcome!: AdjudicationOutcome;

  setAdjudicationOutcome(adjudicationOutcome: AdjudicationOutcome): this;
  setAdjudicationOutcome(
    adjudicationOutcome: (adjudicationOutcome: typeof AdjudicationOutcome) => AdjudicationOutcome
  ): this;
  setAdjudicationOutcome(
    adjudicationOutcome:
      | AdjudicationOutcome
      | ((adjudicationOutcome: typeof AdjudicationOutcome) => AdjudicationOutcome)
  ) {
    if (typeof adjudicationOutcome === "function") this.adjudicationOutcome = adjudicationOutcome(AdjudicationOutcome);
    else this.adjudicationOutcome = adjudicationOutcome;
    return this;
  }

  static fromObject(obj: TAdjudicate) {
    const adjudicate = new Adjudicate();
    if (obj.adjudication_outcome !== undefined)
      adjudicate.setAdjudicationOutcome(AdjudicationOutcome[obj.adjudication_outcome]);
    return adjudicate;
  }
}
