import { TemplateFieldName } from "../Enums/TemplateFieldName.js";
import { Utility, IUtility, Static } from "../Utility.js";
import { TemplateDisplayPreference, TTemplateDisplayPreference } from "./TemplateDisplayPreference.js";

export type TTemplateItemSetting = {
  display_preference?: TTemplateDisplayPreference;
  field_name?: keyof typeof TemplateFieldName;
};

export class TemplateItemSetting extends Utility implements Static<IUtility, typeof TemplateItemSetting> {
  private displayPreference?: TemplateDisplayPreference;
  private fieldName?: TemplateFieldName;

  public setDisplayPreference(displayPreference: TemplateDisplayPreference): this;
  public setDisplayPreference(displayPreference: (displayPreference: TemplateDisplayPreference) => void): this;
  public setDisplayPreference(
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
  public getDisplayPreference() {
    return this.displayPreference;
  }

  public setFieldName(fieldName: TemplateFieldName): this;
  public setFieldName(fieldName: (fieldName: typeof TemplateFieldName) => TemplateFieldName): this;
  public setFieldName(fieldName: TemplateFieldName | ((fieldName: typeof TemplateFieldName) => TemplateFieldName)) {
    if (typeof fieldName === "function") this.fieldName = fieldName(TemplateFieldName);
    else this.fieldName = fieldName;
    return this;
  }
  public getFieldName() {
    return this.fieldName;
  }

  public override getFields<T extends TTemplateItemSetting>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TTemplateItemSetting) {
    const templateItemSetting = new TemplateItemSetting();
    if (obj.display_preference)
      templateItemSetting.setDisplayPreference(TemplateDisplayPreference.fromObject(obj.display_preference));
    if (obj.field_name) templateItemSetting.setFieldName(TemplateFieldName[obj.field_name]);
    return templateItemSetting;
  }
}
