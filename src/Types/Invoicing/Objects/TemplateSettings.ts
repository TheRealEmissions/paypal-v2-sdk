import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { TemplateItemSetting, TTemplateItemSetting } from "./TemplateItemSetting.js";
import { TemplateSubtotalSetting, TTemplateSubtotalSetting } from "./TemplateSubtotalSetting.js";

export type TTemplateSettings = {
  template_item_settings?: TTemplateItemSetting[];
  template_subtotal_settings?: TTemplateSubtotalSetting[];
};

export class TemplateSettings extends Utility implements Static<IUtility, typeof TemplateSettings> {
  private templateItemSettings?: TemplateItemSetting[];
  private templateSubtotalSettings?: TemplateSubtotalSetting[];

  public setTemplateItemSettings(...templateItemSettings: TemplateItemSetting[]): this;
  public setTemplateItemSettings(
    ...templateItemSettings: ((setting: OnlySetters<TemplateItemSetting>) => void)[]
  ): this;
  public setTemplateItemSettings(
    ...templateItemSettings: (TemplateItemSetting | ((setting: OnlySetters<TemplateItemSetting>) => void))[]
  ) {
    this.templateItemSettings = templateItemSettings.map((templateItemSetting) => {
      if (templateItemSetting instanceof TemplateItemSetting) return templateItemSetting;
      else {
        const t = new TemplateItemSetting();
        templateItemSetting(t);
        return t;
      }
    });
    return this;
  }
  public getTemplateItemSettings() {
    return this.templateItemSettings;
  }

  public setTemplateSubtotalSettings(...templateSubtotalSettings: TemplateSubtotalSetting[]): this;
  public setTemplateSubtotalSettings(
    ...templateSubtotalSettings: ((setting: OnlySetters<TemplateSubtotalSetting>) => void)[]
  ): this;
  public setTemplateSubtotalSettings(
    ...templateSubtotalSettings: (TemplateSubtotalSetting | ((setting: OnlySetters<TemplateSubtotalSetting>) => void))[]
  ) {
    this.templateSubtotalSettings = templateSubtotalSettings.map((templateSubtotalSetting) => {
      if (templateSubtotalSetting instanceof TemplateSubtotalSetting) return templateSubtotalSetting;
      else {
        const t = new TemplateSubtotalSetting();
        templateSubtotalSetting(t);
        return t;
      }
    });
    return this;
  }
  public getTemplateSubtotalSettings() {
    return this.templateSubtotalSettings;
  }

  public override getFields<T extends TTemplateSettings>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TTemplateSettings) {
    const templateSettings = new TemplateSettings();
    if (obj.template_item_settings)
      templateSettings.setTemplateItemSettings(
        ...obj.template_item_settings.map((templateItemSetting) => TemplateItemSetting.fromObject(templateItemSetting))
      );
    if (obj.template_subtotal_settings)
      templateSettings.setTemplateSubtotalSettings(
        ...obj.template_subtotal_settings.map((templateSubtotalSetting) =>
          TemplateSubtotalSetting.fromObject(templateSubtotalSetting)
        )
      );
    return templateSettings;
  }
}
