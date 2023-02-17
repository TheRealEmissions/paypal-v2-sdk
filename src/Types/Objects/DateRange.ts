import Types, { ITypes, Static } from "../Types.js";

export type TDateRange = {
  end: string;
  start: string;
};

class DateRange extends Types implements Static<ITypes, typeof DateRange> {
  end?: string;
  start?: string;
  constructor() {
    super();
  }

  setEnd(end: string) {
    this.end = end;
    return this;
  }

  setStart(start: string) {
    this.start = start;
    return this;
  }

  static fromObject(obj: TDateRange) {
    const dateRange = new DateRange();
    if (obj.end) dateRange.setEnd(obj.end);
    if (obj.start) dateRange.setStart(obj.start);
    return dateRange;
  }
}

export default DateRange;
