import Types from "../Types";
import TemplateItemSetting, { TTemplateItemSetting } from "./TemplateItemSetting";
import TemplateSubtotalSetting, { TTemplateSubtotalSetting } from "./TemplateSubtotalSetting";

export type TTemplateSettings = {
  template_item_settings?: TTemplateItemSetting[];
  template_subtotal_settings?: TTemplateSubtotalSetting[];
};

class TemplateSettings extends Types {
  templateItemSettings?: TemplateItemSetting[];
  templateSubtotalSettings?: TemplateSubtotalSetting[];
  constructor() {
    super();
  }

  setTemplateItemSettings(templateItemSettings: TemplateItemSetting[]) {
    this.templateItemSettings = templateItemSettings;
    return this;
  }

  setTemplateSubtotalSettings(templateSubtotalSettings: TemplateSubtotalSetting[]) {
    this.templateSubtotalSettings = templateSubtotalSettings;
    return this;
  }

  override fromObject(obj: TTemplateSettings) {
    this.templateItemSettings = obj.template_item_settings?.map((item) => {
      return new TemplateItemSetting().fromObject(item);
    });
    this.templateSubtotalSettings = obj.template_subtotal_settings?.map((item) => {
      return new TemplateSubtotalSetting().fromObject(item);
    });
    return this;
  }
}

export default TemplateSettings;
