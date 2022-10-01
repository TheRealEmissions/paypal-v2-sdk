import Types from "../Types.js";

export type TEmailAddress = {
  email_address?: string;
};

class EmailAddress extends Types {
  emailAddress?: string;
  constructor() {
    super();
  }

  setEmailAddress(emailAddress: string) {
    this.emailAddress = emailAddress;
    return this;
  }

  override fromObject(obj: TEmailAddress) {
    this.emailAddress = obj.email_address;
    return this;
  }
}

export default EmailAddress;
