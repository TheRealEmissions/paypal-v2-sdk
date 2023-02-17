import { AdjudicationOutcome } from "../Enums/AdjudicationOutcome";
import Types from "../Types";

export type TAdjudicate = {
  adjudication_outcome?: keyof typeof AdjudicationOutcome;
};

class Adjudicate extends Types {
  adjudication_outcome!: AdjudicationOutcome;
  constructor() {
    super();
  }

  setAdjudicationOutcome(adjudicationOutcome: AdjudicationOutcome) {
    this.adjudication_outcome = adjudicationOutcome;
    return this;
  }

  override fromObject(obj: TAdjudicate) {
    this.adjudication_outcome = AdjudicationOutcome[obj.adjudication_outcome as keyof typeof AdjudicationOutcome];
    return this;
  }
}

export default Adjudicate;
