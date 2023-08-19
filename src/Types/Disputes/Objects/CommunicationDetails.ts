import { Utility, Static, IUtility, OnlySetters } from "../../Utility.js";

export type TCommunicationDetails = {
  email?: string;
  note?: string;
  time_posted?: string;
};

type CommunicationDetailsFields = {
  readonly email?: string;
  readonly note?: string;
  readonly timePosted?: string;
};

export class CommunicationDetails extends Utility implements Static<IUtility, typeof CommunicationDetails> {
  private email?: string;
  private note?: string;
  private timePosted?: string;

  public setEmail(email: string): OnlySetters<this> {
    this.email = email;
    return this;
  }
  public getEmail() {
    return this.email;
  }

  public setNote(note: string): OnlySetters<this> {
    this.note = note;
    return this;
  }
  public getNote() {
    return this.note;
  }

  public setTimePosted(timePosted: string): OnlySetters<this> {
    this.timePosted = timePosted;
    return this;
  }
  public getTimePosted() {
    return this.timePosted;
  }

  public override getFields<T extends CommunicationDetailsFields>() {
    return super._getFields<T>();
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
