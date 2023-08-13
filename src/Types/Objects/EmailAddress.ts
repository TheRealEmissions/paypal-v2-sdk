import Types, { ITypes, Static } from "../Types.js";

export type TEmailAddress = {
  email_address?: string;
};

class EmailAddress extends Types implements Static<ITypes, typeof EmailAddress> {
  emailAddress?: string;

  setEmailAddress(emailAddress: string) {
    this.emailAddress = emailAddress;
    return this;
  }

  static fromObject(obj: TEmailAddress) {
    const emailAddress = new EmailAddress();
    if (obj.email_address) emailAddress.setEmailAddress(obj.email_address);
    return emailAddress;
  }
}

export default EmailAddress;
