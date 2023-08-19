import { Utility, IUtility, Static } from "../../Utility.js";

export type TTemplateDisplayPreference = {
  hidden?: boolean;
};

type TemplateDisplayPreferenceFields = {
  readonly hidden?: boolean;
};

export class TemplateDisplayPreference extends Utility implements Static<IUtility, typeof TemplateDisplayPreference> {
  private hidden?: boolean;

  public setHidden(hidden: boolean) {
    this.hidden = hidden;
    return this;
  }
  public getHidden() {
    return this.hidden;
  }

  public override getFields<T extends TemplateDisplayPreferenceFields>() {
    return super._getFields<T>();
  }

  static fromObject(obj: TTemplateDisplayPreference) {
    const templateDisplayPreference = new TemplateDisplayPreference();
    if (obj.hidden) templateDisplayPreference.setHidden(obj.hidden);
    return templateDisplayPreference;
  }
}
