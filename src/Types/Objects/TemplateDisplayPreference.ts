import Types from "../Types";

export type TTemplateDisplayPreference = {
  hidden?: boolean;
};

class TemplateDisplayPreference extends Types {
  hidden?: boolean;
  constructor() {
    super();
  }

  setHidden(hidden: boolean) {
    this.hidden = hidden;
    return this;
  }

  override fromObject(obj: TTemplateDisplayPreference) {
    this.hidden = obj.hidden;
    return this;
  }
}

export default TemplateDisplayPreference;
