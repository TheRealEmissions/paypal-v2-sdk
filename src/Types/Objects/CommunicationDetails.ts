import Types, { ITypes, Static } from "../Types";

export type TCommunicationDetails = {
  email?: string;
  note?: string;
  time_posted?: string;
};

class CommunicationDetails extends Types implements Static<ITypes, typeof CommunicationDetails> {
  email?: string;
  note?: string;
  timePosted?: string;

  constructor() {
    super();
  }

  setEmail(email: string) {
    this.email = email;
    return this;
  }

  setNote(note: string) {
    this.note = note;
    return this;
  }

  setTimePosted(timePosted: string) {
    this.timePosted = timePosted;
    return this;
  }

  static fromObject(obj: TCommunicationDetails) {
    const communicationDetails = new CommunicationDetails();
    if (obj.email) communicationDetails.setEmail(obj.email);
    if (obj.note) communicationDetails.setNote(obj.note);
    if (obj.time_posted) communicationDetails.setTimePosted(obj.time_posted);
    return communicationDetails;
  }
}

export default CommunicationDetails;
