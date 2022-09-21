import PayPal from "../../PayPal";
import Types from "../Types";

class DateRange extends Types {
  end: string;
  start: string;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setEnd(end: string) {
    this.end = end;
    return this;
  }

  setStart(start: string) {
    this.start = start;
    return this;
  }
}

export default DateRange;
