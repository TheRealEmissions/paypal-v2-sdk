import Types, { ITypes, Static } from "../Types.js";
import TemplateItemSetting, { TTemplateItemSetting } from "./TemplateItemSetting.js";
import TemplateSubtotalSetting, { TTemplateSubtotalSetting } from "./TemplateSubtotalSetting.js";

export type TTemplateSettings = {
  template_item_settings?: TTemplateItemSetting[];
  template_subtotal_settings?: TTemplateSubtotalSetting[];
};

class TemplateSettings extends Types implements Static<ITypes, typeof TemplateSettings> {
  templateItemSettings?: TemplateItemSetting[];
  templateSubtotalSettings?: TemplateSubtotalSetting[];
  constructor() {
    super();
  }

  setTemplateItemSettings(...templateItemSettings: (TemplateItemSetting | ((setting: TemplateItemSetting) => void))[]) {
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

  setTemplateSubtotalSettings(
    ...templateSubtotalSettings: (TemplateSubtotalSetting | ((setting: TemplateSubtotalSetting) => void))[]
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

  static fromObject(obj: TTemplateSettings) {
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

export default TemplateSettings;
