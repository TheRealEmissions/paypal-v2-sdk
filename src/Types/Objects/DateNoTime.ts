import Types, { ITypes, Static } from "../Types.js";

export type TDateNoTime = {
  date_no_time?: string;
};

class DateNoTime extends Types implements Static<ITypes, typeof DateNoTime> {
  dateNoTime?: string;

  setDateNoTime(dateNoTime: string) {
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

  static fromObject(obj: TDateNoTime) {
    const dateNoTime = new DateNoTime();
    if (obj.date_no_time) dateNoTime.setDateNoTime(obj.date_no_time);
    return dateNoTime;
  }
}

export default DateNoTime;
