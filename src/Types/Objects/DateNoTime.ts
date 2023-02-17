import Types, { ITypes, StaticImplements } from "../Types.js";

export type TDateNoTime = {
  date_no_time?: string;
};

class DateNoTime extends Types implements StaticImplements<ITypes, typeof DateNoTime> {
  dateNoTime?: string;
  constructor() {
    super();
  }

  setDateNoTime(dateNoTime: string) {
    if (dateNoTime.length !== 10) {
      throw new Error("DateNoTime must be in YYYY-MM-DD format");
    }

    const regex = new RegExp(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/);
    if (!regex.test(dateNoTime)) {
      throw new Error("DateNoTime must be in YYYY-MM-DD format");
    }
    this.dateNoTime = dateNoTime;
    return this;
  }

  static fromObject(obj: TDateNoTime) {
    const dateNoTime = new DateNoTime();
    if (obj.date_no_time) dateNoTime.setDateNoTime(obj.date_no_time);
    return dateNoTime;
  }
}

export default DateNoTime;
