import Types from "../Types";

export type TTemplateMetadata = {
  create_time: string;
  created_by: string;
  last_update_time: string;
  last_updated_by: string;
};

class TemplateMetadata extends Types {
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

  override fromObject(obj: TTemplateMetadata) {
    this.createTime = obj.create_time;
    this.createdBy = obj.created_by;
    this.lastUpdateTime = obj.last_update_time;
    this.lastUpdatedBy = obj.last_updated_by;
    return this;
  }
}

export default TemplateMetadata;
