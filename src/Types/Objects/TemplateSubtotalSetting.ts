import { TemplateFieldName } from "../Enums/TemplateFieldName";
import Types from "../Types";
import TemplateDisplayPreference, {
  TTemplateDisplayPreference,
} from "./TemplateDisplayPreference";

export type TTemplateSubtotalSetting = {
  display_preference: TTemplateDisplayPreference;
  field_name: string;
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
    this.displayPreference = new TemplateDisplayPreference().fromObject(
      obj.display_preference
    );
    this.fieldName =
      TemplateFieldName[obj.field_name as keyof typeof TemplateFieldName];
    return this;
  }
}

export default TemplateSubtotalSetting;
