import Types, { ITypes, Static } from "../Types.js";

export type TTemplateDisplayPreference = {
  hidden?: boolean;
};

export class TemplateDisplayPreference extends Types implements Static<ITypes, typeof TemplateDisplayPreference> {
  hidden?: boolean;

  setHidden(hidden: boolean) {
    this.hidden = hidden;
    return this;
  }

  static fromObject(obj: TTemplateDisplayPreference) {
    const templateDisplayPreference = new TemplateDisplayPreference();
    if (obj.hidden) templateDisplayPreference.setHidden(obj.hidden);
    return templateDisplayPreference;
  }
}
