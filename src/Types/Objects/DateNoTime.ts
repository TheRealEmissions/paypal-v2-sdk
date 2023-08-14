import { Utility, IUtility, Static } from "../Utility.js";

export type TDateNoTime = {
  date_no_time?: string;
};

export class DateNoTime extends Utility implements Static<IUtility, typeof DateNoTime> {
  private dateNoTime?: string;

  public setDateNoTime(dateNoTime: string) {
    const DATE_LENGTH_REQ = 10;
    if (dateNoTime.length !== DATE_LENGTH_REQ) {
      throw new Error("DateNoTime must be in YYYY-MM-DD format");
    }

    const regex = new RegExp(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])$/);
    if (!regex.test(dateNoTime)) {
      throw new Error("DateNoTime must be in YYYY-MM-DD format");
    }
    this.dateNoTime = dateNoTime;
    return this;
  }
  public getDateNoTime() {
    return this.dateNoTime;
  }

  public override getFields<T extends TDateNoTime>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TDateNoTime) {
    const dateNoTime = new DateNoTime();
    if (obj.date_no_time) dateNoTime.setDateNoTime(obj.date_no_time);
    return dateNoTime;
  }
}
