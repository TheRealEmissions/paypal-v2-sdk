import { Utility, Static, IUtility } from "../Utility.js";

export type TCommunicationDetails = {
  email?: string;
  note?: string;
  time_posted?: string;
};

export class CommunicationDetails extends Utility implements Static<IUtility, typeof CommunicationDetails> {
  private email?: string;
  private note?: string;
  private timePosted?: string;

  public setEmail(email: string) {
    this.email = email;
    return this;
  }
  public getEmail() {
    return this.email;
  }

  public setNote(note: string) {
    this.note = note;
    return this;
  }
  public getNote() {
    return this.note;
  }

  public setTimePosted(timePosted: string) {
    this.timePosted = timePosted;
    return this;
  }
  public getTimePosted() {
    return this.timePosted;
  }

  public override getFields<T extends TCommunicationDetails>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TCommunicationDetails) {
    const communicationDetails = new CommunicationDetails();
    if (obj.email) communicationDetails.setEmail(obj.email);
    if (obj.note) communicationDetails.setNote(obj.note);
    if (obj.time_posted) communicationDetails.setTimePosted(obj.time_posted);
    return communicationDetails;
  }
}

export default CommunicationDetails;
