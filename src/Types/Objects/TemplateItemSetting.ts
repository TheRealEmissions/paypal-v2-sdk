import { TemplateFieldName } from "../Enums/TemplateFieldName.js";
import Types, { ITypes, StaticImplements } from "../Types.js";
import TemplateDisplayPreference, { TTemplateDisplayPreference } from "./TemplateDisplayPreference.js";

export type TTemplateItemSetting = {
  display_preference?: TTemplateDisplayPreference;
  field_name?: keyof typeof TemplateFieldName;
};

class TemplateItemSetting extends Types implements StaticImplements<ITypes, typeof TemplateItemSetting> {
  displayPreference?: TemplateDisplayPreference;
  fieldName?: TemplateFieldName;
  constructor() {
    super();
  }

  setDisplayPreference(displayPreference: TemplateDisplayPreference) {
    this.displayPreference = displayPreference;
    return this;
  }

  setFieldName(fieldName: TemplateFieldName) {
    this.fieldName = fieldName;
    return this;
  }

  static fromObject(obj: TTemplateItemSetting) {
    const templateItemSetting = new TemplateItemSetting();
    if (obj.display_preference)
      templateItemSetting.setDisplayPreference(TemplateDisplayPreference.fromObject(obj.display_preference));
    if (obj.field_name) templateItemSetting.setFieldName(TemplateFieldName[obj.field_name]);
    return templateItemSetting;
  }
}

export default TemplateItemSetting;
