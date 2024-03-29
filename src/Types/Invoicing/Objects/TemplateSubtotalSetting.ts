import { TemplateItemField } from "../Enums/TemplateItemField.js";
import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { TemplateDisplayPreference, TTemplateDisplayPreference } from "./TemplateDisplayPreference.js";

export type TTemplateSubtotalSetting = {
  display_preference?: TTemplateDisplayPreference;
  field_name?: keyof typeof TemplateItemField;
};

type TemplateSubtotalSettingFields = {
  readonly displayPreference?: TemplateDisplayPreference;
  readonly fieldName?: TemplateItemField;
};

export class TemplateSubtotalSetting extends Utility implements Static<IUtility, typeof TemplateSubtotalSetting> {
  private displayPreference?: TemplateDisplayPreference;
  private fieldName?: TemplateItemField;

  public setDisplayPreference(displayPreference: TemplateDisplayPreference): this;
  public setDisplayPreference(
    displayPreference: (displayPreference: OnlySetters<TemplateDisplayPreference>) => void
  ): this;
  public setDisplayPreference(
    displayPreference: TemplateDisplayPreference | ((displayPreference: OnlySetters<TemplateDisplayPreference>) => void)
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

  public setFieldName(fieldName: TemplateItemField): this;
  public setFieldName(fieldName: (fieldName: typeof TemplateItemField) => TemplateItemField): this;
  public setFieldName(fieldName: TemplateItemField | ((fieldName: typeof TemplateItemField) => TemplateItemField)) {
    if (typeof fieldName === "function") this.fieldName = fieldName(TemplateItemField);
    else this.fieldName = fieldName;
    return this;
  }
  public getFieldName() {
    return this.fieldName;
  }

  public override getFields<T extends TemplateSubtotalSettingFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TTemplateSubtotalSetting) {
    const templateSubtotalSetting = new TemplateSubtotalSetting();
    if (obj.display_preference)
      templateSubtotalSetting.setDisplayPreference(TemplateDisplayPreference.fromObject(obj.display_preference));
    if (obj.field_name) templateSubtotalSetting.setFieldName(TemplateItemField[obj.field_name]);
    return templateSubtotalSetting;
  }
}
