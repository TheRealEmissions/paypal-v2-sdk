import Types, { ITypes, Static } from "@Types/Types.js";

export type TTemplateDisplayPreference = {
  hidden?: boolean;
};

class TemplateDisplayPreference extends Types implements Static<ITypes, typeof TemplateDisplayPreference> {
  hidden?: boolean;
  constructor() {
    super();
  }

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

export default TemplateDisplayPreference;
