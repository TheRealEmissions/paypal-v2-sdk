import { Action } from "../Enums/Action";
import Types, { ITypes, Static } from "../Types";

export type TActionInfo = {
  action?: keyof typeof Action;
  mandatory?: boolean;
  response_option?: string;
};

export class ActionInfo extends Types implements Static<ITypes, typeof ActionInfo> {
  action?: Action;
  mandatory?: boolean;
  responseOption?: string;

  setAction(action: Action): this;
  setAction(action: (action: typeof Action) => Action): this;
  setAction(action: Action | ((action: typeof Action) => Action)) {
    if (typeof action === "function") this.action = action(Action);
    else this.action = action;
    return this;
  }

  setMandatory(mandatory: boolean) {
    this.mandatory = mandatory;
    return this;
  }

  setResponseOption(responseOption: string) {
    this.responseOption = responseOption;
    return this;
  }

  static fromObject(obj: TActionInfo) {
    const actionInfo = new ActionInfo();
    if (obj.action !== undefined) actionInfo.setAction(Action[obj.action]);
    if (obj.mandatory !== undefined) actionInfo.setMandatory(obj.mandatory);
    if (obj.response_option !== undefined) actionInfo.setResponseOption(obj.response_option);
    return actionInfo;
  }
}
