import PayPal from "../../PayPal";
import Types from "../Types";

class DateNoTime extends Types {
  dateNoTime: string;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  setDateNoTime(dateNoTime: string) {
    if (dateNoTime.length !== 10) {
      throw new Error("DateNoTime must be in YYYY-MM-DD format");
    }

    const regex = new RegExp(
      /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
    );
    if (!regex.test(dateNoTime)) {
      throw new Error("DateNoTime must be in YYYY-MM-DD format");
    }
    this.dateNoTime = dateNoTime;
    return this;
  }
}

export default DateNoTime;
