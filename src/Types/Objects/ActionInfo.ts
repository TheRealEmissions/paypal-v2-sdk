import { Action } from "../Enums/Action";
import Types, { ITypes, StaticImplements } from "../Types";

export type TActionInfo = {
  action?: keyof typeof Action;
  mandatory?: boolean;
  response_option?: string;
};

class ActionInfo extends Types implements StaticImplements<ITypes, typeof ActionInfo> {
  action?: Action;
  mandatory?: boolean;
  responseOption?: string;
  constructor() {
    super();
  }

  setAction(action: Action) {
    this.action = action;
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

export default ActionInfo;
