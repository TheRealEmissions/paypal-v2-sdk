import PayPal from "../../PayPal.js";
import { UnitOfMeasure } from "../Enums/UnitOfMeasure.js";
import Types from "../Types.js";
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
  unit_of_measure?: string;
};

class Template extends Types {
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

  setLinks(links: LinkDescription[]) {
    this.links = links;
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setSettings(settings: TemplateSettings) {
    this.settings = settings;
    return this;
  }

  setStandardTemplate(standardTemplate: boolean) {
    this.standardTemplate = standardTemplate;
    return this;
  }

  setTemplateInfo(templateInfo: TemplateInfo) {
    this.templateInfo = templateInfo;
    return this;
  }

  setUnitOfMeasure(unitOfMeasure: UnitOfMeasure) {
    this.unitOfMeasure = unitOfMeasure;
    return this;
  }

  override fromObject(obj: TTemplate) {
    this.defaultTemplate = obj.default_template;
    this.id = obj.id;
    this.links = obj.links?.map((item) => {
      return new LinkDescription().fromObject(item);
    });
    this.name = obj.name;
    this.settings = obj.settings ? new TemplateSettings().fromObject(obj.settings) : undefined;
    this.standardTemplate = obj.standard_template;
    this.templateInfo = obj.template_info ? new TemplateInfo().fromObject(obj.template_info) : undefined;
    this.unitOfMeasure = UnitOfMeasure[obj.unit_of_measure as keyof typeof UnitOfMeasure];
    return this;
  }
}

export default Template;
