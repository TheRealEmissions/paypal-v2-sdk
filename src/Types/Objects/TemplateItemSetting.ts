import { TemplateFieldName } from "../Enums/TemplateFieldName";
import Types from "../Types";
import TemplateDisplayPreference, {
  TTemplateDisplayPreference,
} from "./TemplateDisplayPreference";

export type TTemplateItemSetting = {
  display_preference: TTemplateDisplayPreference;
  field_name: string;
};

class TemplateItemSetting extends Types {
  displayPreference: TemplateDisplayPreference;
  fieldName: TemplateFieldName;
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

  override fromObject(obj: TTemplateItemSetting) {
    this.displayPreference = new TemplateDisplayPreference().fromObject(
      obj.display_preference
    );
    this.fieldName =
      TemplateFieldName[obj.field_name as keyof typeof TemplateFieldName];
    return this;
  }
}

export default TemplateItemSetting;
