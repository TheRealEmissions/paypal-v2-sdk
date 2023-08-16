import { Utility, IUtility, Static } from "../../Utility.js";

export type TDateRange = {
  end: string;
  start: string;
};

export class DateRange extends Utility implements Static<IUtility, typeof DateRange> {
  private end?: string;
  private start?: string;

  public setEnd(end: string) {
    this.end = end;
    return this;
  }
  public getEnd() {
    return this.end;
  }

  public setStart(start: string) {
    this.start = start;
    return this;
  }
  public getStart() {
    return this.start;
  }

  public override getFields<T extends Partial<TDateRange>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TDateRange) {
    const dateRange = new DateRange();
    if (obj.end) dateRange.setEnd(obj.end);
    if (obj.start) dateRange.setStart(obj.start);
    return dateRange;
  }
}
