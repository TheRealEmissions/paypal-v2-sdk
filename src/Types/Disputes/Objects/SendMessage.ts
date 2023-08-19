import { IUtility, Static, Utility } from "../../Utility";

export type TSendMessage = {
  message: string;
};

type SendMessageFields = {
  readonly message: string;
};

export class SendMessage extends Utility implements Static<IUtility, typeof SendMessage> {
  private message!: string;

  public setMessage(message: string) {
    this.message = message;
    return this;
  }
  public getMessage() {
    return this.message;
  }

  public override getFields<T extends Partial<SendMessageFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TSendMessage) {
    const sendMessage = new SendMessage();
    if (obj.message) sendMessage.setMessage(obj.message);
    return sendMessage;
  }
}
