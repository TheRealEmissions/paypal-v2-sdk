import { TemplateFieldName } from "../Enums/TemplateFieldName.js";
import Types from "../Types.js";
import TemplateDisplayPreference, { TTemplateDisplayPreference } from "./TemplateDisplayPreference.js";

export type TTemplateSubtotalSetting = {
  display_preference?: TTemplateDisplayPreference;
  field_name?: keyof typeof TemplateFieldName;
};

class TemplateSubtotalSetting extends Types {
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

  override fromObject(obj: TTemplateSubtotalSetting) {
    this.displayPreference = obj.display_preference
      ? new TemplateDisplayPreference().fromObject(obj.display_preference)
      : undefined;
    this.fieldName = TemplateFieldName[obj.field_name as keyof typeof TemplateFieldName];
    return this;
  }
}

export default TemplateSubtotalSetting;
