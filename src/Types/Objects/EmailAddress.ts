import { Utility, IUtility, Static } from "../Utility.js";

export type TEmailAddress = {
  email_address?: string;
};

export class EmailAddress extends Utility implements Static<IUtility, typeof EmailAddress> {
  private emailAddress?: string;

  public setEmailAddress(emailAddress: string) {
    this.emailAddress = emailAddress;
    return this;
  }
  public getEmailAddress() {
    return this.emailAddress;
  }

  public override getFields<T extends TEmailAddress>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TEmailAddress) {
    const emailAddress = new EmailAddress();
    if (obj.email_address) emailAddress.setEmailAddress(obj.email_address);
    return emailAddress;
  }
}
