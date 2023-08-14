import { Action } from "../Enums/Action";
import { Utility, IUtility, Static } from "../Utility";

export type TActionInfo = {
  action?: keyof typeof Action;
  mandatory?: boolean;
  response_option?: string;
};

export class ActionInfo extends Utility implements Static<IUtility, typeof ActionInfo> {
  private action?: Action;
  private mandatory?: boolean;
  private responseOption?: string;

  public setAction(action: Action): this;
  public setAction(action: (action: typeof Action) => Action): this;
  public setAction(action: Action | ((action: typeof Action) => Action)) {
    if (typeof action === "function") this.action = action(Action);
    else this.action = action;
    return this;
  }
  public getAction() {
    return this.action;
  }

  public setMandatory(mandatory: boolean) {
    this.mandatory = mandatory;
    return this;
  }
  public getMandatory() {
    return this.mandatory;
  }

  public setResponseOption(responseOption: string) {
    this.responseOption = responseOption;
    return this;
  }
  public getResponseOption() {
    return this.responseOption;
  }

  public override getFields<T extends TActionInfo>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TActionInfo) {
    const actionInfo = new ActionInfo();
    if (obj.action !== undefined) actionInfo.setAction(Action[obj.action]);
    if (obj.mandatory !== undefined) actionInfo.setMandatory(obj.mandatory);
    if (obj.response_option !== undefined) actionInfo.setResponseOption(obj.response_option);
    return actionInfo;
  }
}
