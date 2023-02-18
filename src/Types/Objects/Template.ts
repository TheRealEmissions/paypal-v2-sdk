import PayPal from "@Types/../PayPal.js";
import { UnitOfMeasure } from "@Types/Enums/UnitOfMeasure.js";
import Types, { ITypes, Static } from "@Types/Types.js";
import LinkDescription, { TLinkDescription } from "./LinkDescription.js";
import TemplateInfo, { TTemplateInfo } from "./TemplateInfo.js";
import TemplateSettings, { TTemplateSettings } from "./TemplateSettings.js";

export type TTemplate = {
  default_template?: boolean;
  readonly id?: string;
  readonly links?: TLinkDescription[];
  name?: string;
  settings?: TTemplateSettings;
  readonly standard_template?: boolean;
  template_info?: TTemplateInfo;
  unit_of_measure?: keyof typeof UnitOfMeasure;
};

class Template extends Types implements Static<ITypes, typeof Template> {
  defaultTemplate?: boolean;
  id?: string;
  links?: LinkDescription[];
  name?: string;
  settings?: TemplateSettings;
  standardTemplate?: boolean;
  templateInfo?: TemplateInfo;
  unitOfMeasure?: UnitOfMeasure;

  PayPal?: PayPal;
  constructor(PayPal?: PayPal) {
    super();
    this.PayPal = PayPal;
  }

  setPayPal(PayPal: PayPal) {
    this.PayPal = PayPal;
    return this;
  }

  async create() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the template");
    return this.PayPal.Invoicing.createTemplate(this);
  }

  async delete() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the template");
    if (!this.id) {
      throw new Error("Template ID is required to delete template");
    }
    return this.PayPal.Invoicing.deleteTemplate(this);
  }

  async fullyUpdate() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the template");
    if (!this.id) {
      throw new Error("Template ID is required to update template");
    }
    return this.PayPal.Invoicing.fullyUpdateTemplate(this);
  }

  async get() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the template");
    if (!this.id) {
      throw new Error("Template ID is required to get template");
    }
    return this.PayPal.Invoicing.getTemplate(this);
  }

  setDefaultTemplate(defaultTemplate: boolean) {
    this.defaultTemplate = defaultTemplate;
    return this;
  }

  setId(id: string) {
    this.id = id;
    return this;
  }

  setLinks(...links: (LinkDescription | ((link: LinkDescription) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkDesc = new LinkDescription();
      link(linkDesc);
      return linkDesc;
    });
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setSettings(settings: TemplateSettings | ((settings: TemplateSettings) => void)) {
    if (settings instanceof TemplateSettings) {
      this.settings = settings;
    } else {
      const templateSettings = new TemplateSettings();
      settings(templateSettings);
      this.settings = templateSettings;
    }
    return this;
  }

  setStandardTemplate(standardTemplate: boolean) {
    this.standardTemplate = standardTemplate;
    return this;
  }

  setTemplateInfo(templateInfo: TemplateInfo | ((templateInfo: TemplateInfo) => void)) {
    if (templateInfo instanceof TemplateInfo) {
      this.templateInfo = templateInfo;
    } else {
      const templateInfoObj = new TemplateInfo();
      templateInfo(templateInfoObj);
      this.templateInfo = templateInfoObj;
    }
    return this;
  }

  setUnitOfMeasure(unitOfMeasure: UnitOfMeasure | ((unitOfMeasure: typeof UnitOfMeasure) => UnitOfMeasure)) {
    if (typeof unitOfMeasure === "function") {
      this.unitOfMeasure = unitOfMeasure(UnitOfMeasure);
    } else {
      this.unitOfMeasure = unitOfMeasure;
    }
    return this;
  }

  static fromObject(obj: TTemplate) {
    const template = new Template();
    if (obj.default_template) template.setDefaultTemplate(obj.default_template);
    if (obj.id) template.setId(obj.id);
    if (obj.links) template.setLinks(...obj.links.map((x) => LinkDescription.fromObject(x)));
    if (obj.name) template.setName(obj.name);
    if (obj.settings) template.setSettings(TemplateSettings.fromObject(obj.settings));
    if (obj.standard_template) template.setStandardTemplate(obj.standard_template);
    if (obj.template_info) template.setTemplateInfo(TemplateInfo.fromObject(obj.template_info));
    if (obj.unit_of_measure) template.setUnitOfMeasure(UnitOfMeasure[obj.unit_of_measure]);
    return template;
  }
}

export default Template;
