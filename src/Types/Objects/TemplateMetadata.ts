import Types, { ITypes, StaticImplements } from "../Types.js";

export type TTemplateMetadata = {
  readonly create_time?: string;
  readonly created_by?: string;
  readonly last_update_time?: string;
  readonly last_updated_by?: string;
};

class TemplateMetadata extends Types implements StaticImplements<ITypes, typeof TemplateMetadata> {
  createTime?: string;
  createdBy?: string;
  lastUpdateTime?: string;
  lastUpdatedBy?: string;
  constructor() {
    super();
  }

  setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }

  setCreatedBy(createdBy: string) {
    this.createdBy = createdBy;
    return this;
  }

  setLastUpdateTime(lastUpdateTime: string) {
    this.lastUpdateTime = lastUpdateTime;
    return this;
  }

  setLastUpdatedBy(lastUpdatedBy: string) {
    this.lastUpdatedBy = lastUpdatedBy;
    return this;
  }

  static fromObject(obj: TTemplateMetadata) {
    const templateMetadata = new TemplateMetadata();
    if (obj.create_time) templateMetadata.setCreateTime(obj.create_time);
    if (obj.created_by) templateMetadata.setCreatedBy(obj.created_by);
    if (obj.last_update_time) templateMetadata.setLastUpdateTime(obj.last_update_time);
    if (obj.last_updated_by) templateMetadata.setLastUpdatedBy(obj.last_updated_by);
    return templateMetadata;
  }
}

export default TemplateMetadata;
