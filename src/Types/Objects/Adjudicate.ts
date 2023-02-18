import { AdjudicationOutcome } from "@Types/Enums/AdjudicationOutcome";
import Types, { ITypes, Static } from "@Types/Types";

export type TAdjudicate = {
  adjudication_outcome?: keyof typeof AdjudicationOutcome;
};

class Adjudicate extends Types implements Static<ITypes, typeof Adjudicate> {
  adjudicationOutcome!: AdjudicationOutcome;
  constructor() {
    super();
  }

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

export default Adjudicate;
