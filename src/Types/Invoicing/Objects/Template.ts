import PayPal from "../../../PayPal.js";
import { UnitOfMeasure } from "../Enums/UnitOfMeasure.js";
import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { TemplateInfo, TTemplateInfo } from "./TemplateInfo.js";
import { TemplateSettings, TTemplateSettings } from "./TemplateSettings.js";
import { LinkDescription, TLinkDescription } from "./LinkDescription.js";

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

type TemplateFields = {
  readonly defaultTemplate?: boolean;
  readonly id?: string;
  readonly links?: LinkDescription[];
  readonly name?: string;
  readonly settings?: TemplateSettings;
  readonly standardTemplate?: boolean;
  readonly templateInfo?: TemplateInfo;
  readonly unitOfMeasure?: UnitOfMeasure;
};

export class Template extends Utility implements Static<IUtility, typeof Template> {
  private defaultTemplate?: boolean;
  private id?: string;
  private links?: LinkDescription[];
  private name?: string;
  private settings?: TemplateSettings;
  private standardTemplate?: boolean;
  private templateInfo?: TemplateInfo;
  private unitOfMeasure?: UnitOfMeasure;

  PayPal?: PayPal;
  constructor(PayPal?: PayPal) {
    super();
    this.PayPal = PayPal;
  }

  setPayPal(PayPal: PayPal) {
    this.PayPal = PayPal;
    return this;
  }

  public async create() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the template");
    return this.PayPal.getInvoicing().createTemplate(this);
  }

  public async delete() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the template");
    if (!this.id) {
      throw new Error("Template ID is required to delete template");
    }
    return this.PayPal.getInvoicing().deleteTemplate(this);
  }

  public async fullyUpdate() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the template");
    if (!this.id) {
      throw new Error("Template ID is required to update template");
    }
    return this.PayPal.getInvoicing().fullyUpdateTemplate(this);
  }

  public async get() {
    if (!this.PayPal)
      throw new Error("To use in-built methods, please provide PayPal instance when initialising the template");
    if (!this.id) {
      throw new Error("Template ID is required to get template");
    }
    return this.PayPal.getInvoicing().getTemplate(this);
  }

  public setDefaultTemplate(defaultTemplate: boolean) {
    this.defaultTemplate = defaultTemplate;
    return this;
  }
  public getDefaultTemplate() {
    return this.defaultTemplate;
  }

  public setId(id: string) {
    this.id = id;
    return this;
  }
  public getId() {
    return this.id;
  }

  public setLinks(...links: LinkDescription[]): this;
  public setLinks(...links: ((link: OnlySetters<LinkDescription>) => void)[]): this;
  public setLinks(...links: (LinkDescription | ((link: OnlySetters<LinkDescription>) => void))[]) {
    this.links = links.map((link) => {
      if (link instanceof LinkDescription) return link;
      const linkDesc = new LinkDescription();
      link(linkDesc);
      return linkDesc;
    });
    return this;
  }
  public getLinks() {
    return this.links;
  }

  public setName(name: string) {
    this.name = name;
    return this;
  }
  public getName() {
    return this.name;
  }

  public setSettings(settings: TemplateSettings): this;
  public setSettings(settings: (settings: OnlySetters<TemplateSettings>) => void): this;
  public setSettings(settings: TemplateSettings | ((settings: OnlySetters<TemplateSettings>) => void)) {
    if (settings instanceof TemplateSettings) {
      this.settings = settings;
    } else {
      const templateSettings = new TemplateSettings();
      settings(templateSettings);
      this.settings = templateSettings;
    }
    return this;
  }
  public getSettings() {
    return this.settings;
  }

  public setStandardTemplate(standardTemplate: boolean) {
    this.standardTemplate = standardTemplate;
    return this;
  }
  public getStandardTemplate() {
    return this.standardTemplate;
  }

  public setTemplateInfo(templateInfo: TemplateInfo): this;
  public setTemplateInfo(templateInfo: (templateInfo: OnlySetters<TemplateInfo>) => void): this;
  public setTemplateInfo(templateInfo: TemplateInfo | ((templateInfo: OnlySetters<TemplateInfo>) => void)) {
    if (templateInfo instanceof TemplateInfo) {
      this.templateInfo = templateInfo;
    } else {
      const templateInfoObj = new TemplateInfo();
      templateInfo(templateInfoObj);
      this.templateInfo = templateInfoObj;
    }
    return this;
  }
  public getTemplateInfo() {
    return this.templateInfo;
  }

  public setUnitOfMeasure(unitOfMeasure: UnitOfMeasure): this;
  public setUnitOfMeasure(unitOfMeasure: (unitOfMeasure: typeof UnitOfMeasure) => UnitOfMeasure): this;
  public setUnitOfMeasure(unitOfMeasure: UnitOfMeasure | ((unitOfMeasure: typeof UnitOfMeasure) => UnitOfMeasure)) {
    if (typeof unitOfMeasure === "function") {
      this.unitOfMeasure = unitOfMeasure(UnitOfMeasure);
    } else {
      this.unitOfMeasure = unitOfMeasure;
    }
    return this;
  }
  public getUnitOfMeasure() {
    return this.unitOfMeasure;
  }

  public override getFields<T extends TemplateFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TTemplate) {
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
