import { Utility, IUtility, Static } from "../../Utility.js";

export type TTemplateMetadata = {
  readonly create_time?: string;
  readonly created_by?: string;
  readonly last_update_time?: string;
  readonly last_updated_by?: string;
};

export class TemplateMetadata extends Utility implements Static<IUtility, typeof TemplateMetadata> {
  private createTime?: string;
  private createdBy?: string;
  private lastUpdateTime?: string;
  private lastUpdatedBy?: string;

  public setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }
  public getCreateTime() {
    return this.createTime;
  }

  public setCreatedBy(createdBy: string) {
    this.createdBy = createdBy;
    return this;
  }
  public getCreatedBy() {
    return this.createdBy;
  }

  public setLastUpdateTime(lastUpdateTime: string) {
    this.lastUpdateTime = lastUpdateTime;
    return this;
  }
  public getLastUpdateTime() {
    return this.lastUpdateTime;
  }

  public setLastUpdatedBy(lastUpdatedBy: string) {
    this.lastUpdatedBy = lastUpdatedBy;
    return this;
  }
  public getLastUpdatedBy() {
    return this.lastUpdatedBy;
  }

  public override getFields<T extends TTemplateMetadata>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TTemplateMetadata) {
    const templateMetadata = new TemplateMetadata();
    if (obj.create_time) templateMetadata.setCreateTime(obj.create_time);
    if (obj.created_by) templateMetadata.setCreatedBy(obj.created_by);
    if (obj.last_update_time) templateMetadata.setLastUpdateTime(obj.last_update_time);
    if (obj.last_updated_by) templateMetadata.setLastUpdatedBy(obj.last_updated_by);
    return templateMetadata;
  }
}
