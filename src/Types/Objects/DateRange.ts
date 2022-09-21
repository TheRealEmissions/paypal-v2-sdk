import Types from "../Types";

export type TDateRange = {
  end: string;
  start: string;
};

class DateRange extends Types {
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

  override fromObject(obj: TDateRange) {
    this.end = obj.end;
    this.start = obj.start;
    return this;
  }
}

export default DateRange;
