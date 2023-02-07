import { Action } from "../Enums/Action";
import Types from "../Types";

export type TActionInfo = {
  action?: string;
  mandatory?: boolean;
  response_option?: string;
};

class ActionInfo extends Types {
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

  override fromObject(obj: TActionInfo) {
    this.action = Action[obj.action as keyof typeof Action];
    this.mandatory = obj.mandatory;
    this.responseOption = obj.response_option;
    return this;
  }
}

export default ActionInfo;
