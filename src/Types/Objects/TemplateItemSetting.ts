import { TemplateFieldName } from "../Enums/TemplateFieldName.js";
import Types, { ITypes, Static } from "../Types.js";
import { TemplateDisplayPreference, TTemplateDisplayPreference } from "./TemplateDisplayPreference.js";

export type TTemplateItemSetting = {
  display_preference?: TTemplateDisplayPreference;
  field_name?: keyof typeof TemplateFieldName;
};

export class TemplateItemSetting extends Types implements Static<ITypes, typeof TemplateItemSetting> {
  displayPreference?: TemplateDisplayPreference;
  fieldName?: TemplateFieldName;

  setDisplayPreference(displayPreference: TemplateDisplayPreference): this;
  setDisplayPreference(displayPreference: (displayPreference: TemplateDisplayPreference) => void): this;
  setDisplayPreference(
    displayPreference: TemplateDisplayPreference | ((displayPreference: TemplateDisplayPreference) => void)
  ) {
    if (displayPreference instanceof TemplateDisplayPreference) {
      this.displayPreference = displayPreference;
    } else {
      const templateDisplayPreference = new TemplateDisplayPreference();
      displayPreference(templateDisplayPreference);
      this.displayPreference = templateDisplayPreference;
    }
    return this;
  }

  setFieldName(fieldName: TemplateFieldName): this;
  setFieldName(fieldName: (fieldName: typeof TemplateFieldName) => TemplateFieldName): this;
  setFieldName(fieldName: TemplateFieldName | ((fieldName: typeof TemplateFieldName) => TemplateFieldName)) {
    if (typeof fieldName === "function") this.fieldName = fieldName(TemplateFieldName);
    else this.fieldName = fieldName;
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
