import PayPal from "../../PayPal";
import Types from "../Types";

export type TFileReference = {
  content_type: string;
  create_time: string;
  id: string;
  reference_url: string;
  size: string;
};

class FileReference extends Types {
  contentType: string;
  createTime: string;
  id: string;
  referenceUrl: string;
  size: string;
  constructor() {
    super();
  }

  setContentType(contentType: string) {
    this.contentType = contentType;
    return this;
  }

  setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }

  setId(id: string) {
    this.id = id;
    return this;
  }

  setReferenceUrl(referenceUrl: string) {
    this.referenceUrl = referenceUrl;
    return this;
  }

  setSize(size: string) {
    this.size = size;
    return this;
  }

  override fromObject(obj: TFileReference) {
    this.contentType = obj.content_type;
    this.createTime = obj.create_time;
    this.id = obj.id;
    this.referenceUrl = obj.reference_url;
    this.size = obj.size;
    return this;
  }
}

export default FileReference;
