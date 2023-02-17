import { TemplateFieldName } from "../Enums/TemplateFieldName.js";
import Types, { ITypes, Static } from "../Types.js";
import TemplateDisplayPreference, { TTemplateDisplayPreference } from "./TemplateDisplayPreference.js";

export type TTemplateSubtotalSetting = {
  display_preference?: TTemplateDisplayPreference;
  field_name?: keyof typeof TemplateFieldName;
};

class TemplateSubtotalSetting extends Types implements Static<ITypes, typeof TemplateSubtotalSetting> {
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

  static fromObject(obj: TTemplateSubtotalSetting) {
    const templateSubtotalSetting = new TemplateSubtotalSetting();
    if (obj.display_preference)
      templateSubtotalSetting.setDisplayPreference(TemplateDisplayPreference.fromObject(obj.display_preference));
    if (obj.field_name) templateSubtotalSetting.setFieldName(TemplateFieldName[obj.field_name]);
    return templateSubtotalSetting;
  }
}

export default TemplateSubtotalSetting;
